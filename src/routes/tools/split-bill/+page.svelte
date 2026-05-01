<script lang="ts">
	import { browser } from '$app/environment';
	import lzString from 'lz-string';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import { CURRENCIES, DEFAULT_CURRENCY_CODE } from '$lib/countries';
	import type { BillPerson, BillItem, BillState } from '$lib/types';

	const { compressToEncodedURIComponent, decompressFromEncodedURIComponent } = lzString;

	/* ─── State ─── */
	let people: BillPerson[] = $state([]);
	let items: BillItem[] = $state([]);
	let taxPercentage: number = $state(10);
	let servicePercentage: number = $state(5);
	let selectedCurrencyCode: string = $state(DEFAULT_CURRENCY_CODE);

	const selectedCurrency = $derived(
		CURRENCIES.find((currency) => currency.code === selectedCurrencyCode) ?? CURRENCIES[0]
	);

	/* ─── Input States ─── */
	let newPersonName = $state('');
	let newItemName = $state('');
	let newItemPrice = $state('');
	let hasCopiedShareLink = $state(false);
	let hasRestoredFromUrl = $state(false);

	/* ─── ID Generation ─── */
	function generateUniqueId(): string {
		return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
	}

	/* ─── URL State Persistence ─── */
	function serializeBillStateToUrl(): string {
		const billState: BillState = {
			people: $state.snapshot(people),
			items: $state.snapshot(items),
			taxPercentage,
			servicePercentage,
			currencyCode: selectedCurrencyCode
		};
		const jsonString = JSON.stringify(billState);
		const compressedString = compressToEncodedURIComponent(jsonString);
		return compressedString;
	}

	function restoreBillStateFromUrl(compressedData: string): boolean {
		try {
			const decompressedString = decompressFromEncodedURIComponent(compressedData);
			if (!decompressedString) return false;
			const parsedState: BillState = JSON.parse(decompressedString);
			if (parsedState.people && parsedState.items) {
				people = parsedState.people;
				items = parsedState.items;
				taxPercentage = parsedState.taxPercentage ?? 10;
				servicePercentage = parsedState.servicePercentage ?? 5;
				selectedCurrencyCode = parsedState.currencyCode ?? DEFAULT_CURRENCY_CODE;
				return true;
			}
			return false;
		} catch {
			return false;
		}
	}

	/* ─── Restore from URL on mount ─── */
	$effect(() => {
		if (!browser || hasRestoredFromUrl) return;
		const urlHash = window.location.hash;
		if (urlHash.startsWith('#data=')) {
			const compressedData = urlHash.substring(6);
			if (compressedData) {
				const wasRestored = restoreBillStateFromUrl(compressedData);
				if (wasRestored) {
					hasRestoredFromUrl = true;
				}
			}
		}
	});

	/* ─── People Management ─── */
	function addNewPerson() {
		const trimmedName = newPersonName.trim();
		if (!trimmedName) return;
		people = [...people, { id: generateUniqueId(), name: trimmedName }];
		newPersonName = '';
	}

	function removePersonById(personId: string) {
		people = people.filter((person) => person.id !== personId);
		// Also unassign from all items
		items = items.map((item) => ({
			...item,
			assignedPersonIds: item.assignedPersonIds.filter((id) => id !== personId)
		}));
	}

	function handlePersonInputKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			addNewPerson();
		}
	}

	/* ─── Item Management ─── */
	function addNewItem() {
		const trimmedName = newItemName.trim();
		const parsedPrice = parseFloat(newItemPrice);
		if (!trimmedName || isNaN(parsedPrice) || parsedPrice <= 0) return;
		items = [
			...items,
			{
				id: generateUniqueId(),
				name: trimmedName,
				price: parsedPrice,
				assignedPersonIds: []
			}
		];
		newItemName = '';
		newItemPrice = '';
	}

	function removeItemById(itemId: string) {
		items = items.filter((item) => item.id !== itemId);
	}

	function handleItemInputKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			addNewItem();
		}
	}

	function togglePersonAssignmentForItem(itemId: string, personId: string) {
		items = items.map((item) => {
			if (item.id !== itemId) return item;
			const isCurrentlyAssigned = item.assignedPersonIds.includes(personId);
			return {
				...item,
				assignedPersonIds: isCurrentlyAssigned
					? item.assignedPersonIds.filter((id) => id !== personId)
					: [...item.assignedPersonIds, personId]
			};
		});
	}

	function tagAllPeopleForItem(itemId: string) {
		items = items.map((item) => {
			if (item.id !== itemId) return item;
			return {
				...item,
				assignedPersonIds: people.map((person) => person.id)
			};
		});
	}

	function untagAllPeopleForItem(itemId: string) {
		items = items.map((item) => {
			if (item.id !== itemId) return item;
			return {
				...item,
				assignedPersonIds: []
			};
		});
	}

	function areAllPeopleTaggedForItem(item: BillItem): boolean {
		return people.length > 0 && people.every((person) => item.assignedPersonIds.includes(person.id));
	}

	/* ─── Calculations ─── */
	const subtotalAmount = $derived(items.reduce((sum, item) => sum + item.price, 0));
	const taxAmount = $derived(subtotalAmount * (taxPercentage / 100));
	const serviceAmount = $derived(subtotalAmount * (servicePercentage / 100));
	const grandTotalAmount = $derived(subtotalAmount + taxAmount + serviceAmount);

	const perPersonBreakdown = $derived.by(() => {
		const breakdown = new Map<string, number>();

		// Initialize all people with 0
		for (const person of people) {
			breakdown.set(person.id, 0);
		}

		// Calculate base share for each item
		for (const item of items) {
			if (item.assignedPersonIds.length === 0) continue;
			const sharePerPerson = item.price / item.assignedPersonIds.length;
			for (const personId of item.assignedPersonIds) {
				const currentAmount = breakdown.get(personId) ?? 0;
				breakdown.set(personId, currentAmount + sharePerPerson);
			}
		}

		// Apply tax and service proportionally
		const totalMultiplier = subtotalAmount > 0 ? grandTotalAmount / subtotalAmount : 1;

		const results: { person: BillPerson; baseAmount: number; totalAmount: number }[] = [];
		for (const person of people) {
			const baseAmount = breakdown.get(person.id) ?? 0;
			results.push({
				person,
				baseAmount,
				totalAmount: baseAmount * totalMultiplier
			});
		}

		return results;
	});

	const unassignedItemsTotal = $derived(
		items
			.filter((item) => item.assignedPersonIds.length === 0)
			.reduce((sum, item) => sum + item.price, 0)
	);

	/* ─── Share ─── */
	async function saveAndCopyShareLink() {
		const compressedData = serializeBillStateToUrl();
		const shareUrl = `${window.location.origin}${window.location.pathname}#data=${compressedData}`;

		try {
			await navigator.clipboard.writeText(shareUrl);
			hasCopiedShareLink = true;
			// Update URL without navigation
			window.history.replaceState(null, '', `${window.location.pathname}#data=${compressedData}`);
			setTimeout(() => {
				hasCopiedShareLink = false;
			}, 2500);
		} catch {
			const temporaryTextArea = document.createElement('textarea');
			temporaryTextArea.value = shareUrl;
			document.body.appendChild(temporaryTextArea);
			temporaryTextArea.select();
			document.execCommand('copy');
			document.body.removeChild(temporaryTextArea);
			hasCopiedShareLink = true;
			setTimeout(() => {
				hasCopiedShareLink = false;
			}, 2500);
		}
	}

	function clearAllData() {
		people = [];
		items = [];
		taxPercentage = 10;
		servicePercentage = 5;
		selectedCurrencyCode = DEFAULT_CURRENCY_CODE;
		window.history.replaceState(null, '', window.location.pathname);
	}

	/* ─── Formatting ─── */
	function formatCurrencyAmount(amount: number): string {
		return new Intl.NumberFormat('id-ID', {
			style: 'decimal',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(Math.round(amount));
	}

	function formatWithCurrency(amount: number): string {
		return `${selectedCurrency.symbol} ${formatCurrencyAmount(amount)}`;
	}
</script>

<SeoHead
	title="Split Bill Calculator"
	description="Split a bill among friends with per-item tagging, tax, and service charge. Save and share via URL."
	canonicalUrl="https://zakir.id/tools/split-bill"
/>

<section class="px-4 pt-28 pb-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<ScrollReveal>
			<div class="mb-8 text-center sm:text-left">
				<a
					href="/tools"
					class="mb-4 inline-flex items-center gap-1 text-xs text-graphite-400 transition-colors duration-200 hover:text-pastel-300"
				>
					<svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
					Back to Tools
				</a>
				<h1 class="text-2xl font-bold text-graphite-50 sm:text-3xl">
					Split Bill Calculator
				</h1>
				<p class="mt-2 text-sm text-graphite-300">
					Add people and items, tag each item to the people who ordered it, and get a fair split including tax and service.
				</p>
			</div>
		</ScrollReveal>

		<div class="space-y-6">
			<!-- People Section -->
			<ScrollReveal delay={100}>
				<GlassCard>
					<h2 class="mb-4 flex items-center gap-2 text-sm font-semibold text-pastel-300">
						<span aria-hidden="true">👥</span> People
						{#if people.length > 0}
							<span class="rounded-full bg-graphite-600/50 px-2 py-0.5 text-[11px] text-graphite-400">{people.length}</span>
						{/if}
					</h2>

					<!-- Add Person -->
					<div class="mb-3 flex gap-2">
						<input
							type="text"
							bind:value={newPersonName}
							onkeydown={handlePersonInputKeydown}
							placeholder="Person name"
							class="min-w-0 flex-1 rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2 text-sm text-graphite-100 placeholder:text-graphite-500 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30"
							aria-label="New person name"
						/>
						<button
							onclick={addNewPerson}
							disabled={!newPersonName.trim()}
							class="shrink-0 rounded-lg bg-pastel-300/15 px-4 py-2 text-sm font-medium text-pastel-300 transition-all duration-200 hover:bg-pastel-300/25 disabled:cursor-not-allowed disabled:opacity-40"
						>
							Add
						</button>
					</div>

					<!-- People List -->
					{#if people.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each people as person (person.id)}
								<div
									class="flex items-center gap-1.5 rounded-full border border-graphite-600/50 bg-graphite-700/40 px-3 py-1.5 text-sm text-graphite-200"
									style="animation: fadeInUp 0.2s ease-out both;"
								>
									<span>{person.name}</span>
									<button
										onclick={() => removePersonById(person.id)}
										class="flex h-4 w-4 items-center justify-center rounded-full text-graphite-400 transition-colors duration-200 hover:bg-graphite-600 hover:text-pastel-400"
										aria-label="Remove {person.name}"
									>
										<svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
							{/each}
						</div>
					{:else}
						<p class="text-xs text-graphite-500">No people added yet. Add the people splitting this bill.</p>
					{/if}
				</GlassCard>
			</ScrollReveal>

			<!-- Items Section -->
			<ScrollReveal delay={200}>
				<GlassCard>
					<h2 class="mb-4 flex items-center gap-2 text-sm font-semibold text-pastel-300">
						<span aria-hidden="true">📋</span> Items
						{#if items.length > 0}
							<span class="rounded-full bg-graphite-600/50 px-2 py-0.5 text-[11px] text-graphite-400">{items.length}</span>
						{/if}
					</h2>

					<!-- Add Item — stacks on mobile for better fit -->
					<div class="mb-4 space-y-2 sm:flex sm:gap-2 sm:space-y-0">
						<input
							type="text"
							bind:value={newItemName}
							onkeydown={handleItemInputKeydown}
							placeholder="Item name"
							class="w-full min-w-0 rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2 text-sm text-graphite-100 placeholder:text-graphite-500 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30 sm:flex-1"
							aria-label="New item name"
						/>
						<div class="flex gap-2">
							<input
								type="number"
								bind:value={newItemPrice}
								onkeydown={handleItemInputKeydown}
								placeholder="Price"
								min="0"
								step="any"
								class="min-w-0 flex-1 rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2 text-sm text-graphite-100 placeholder:text-graphite-500 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30 sm:w-28 sm:flex-none"
								aria-label="Item price"
							/>
							<button
								onclick={addNewItem}
								disabled={!newItemName.trim() || !newItemPrice || parseFloat(newItemPrice) <= 0}
								class="shrink-0 rounded-lg bg-pastel-300/15 px-4 py-2 text-sm font-medium text-pastel-300 transition-all duration-200 hover:bg-pastel-300/25 disabled:cursor-not-allowed disabled:opacity-40"
							>
								Add
							</button>
						</div>
					</div>

					<!-- Items List -->
					{#if items.length > 0}
						<div class="space-y-3">
							{#each items as item (item.id)}
								<div
									class="rounded-xl border border-graphite-600/30 bg-graphite-900/30 p-3"
									style="animation: fadeInUp 0.2s ease-out both;"
								>
									<div class="mb-2 flex items-start justify-between gap-2">
										<div class="min-w-0 flex-1">
											<p class="truncate text-sm font-medium text-graphite-100">{item.name}</p>
											<p class="text-xs font-medium text-pastel-300">{formatWithCurrency(item.price)}</p>
										</div>
										<button
											onclick={() => removeItemById(item.id)}
											class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-graphite-400 transition-colors duration-200 hover:bg-graphite-600 hover:text-pastel-400"
											aria-label="Remove item {item.name}"
										>
											<svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>

									<!-- Person Assignment Chips -->
									{#if people.length > 0}
										<div class="flex flex-wrap items-center gap-1.5">
											<!-- Tag All / Untag All toggle -->
											<button
												onclick={() => areAllPeopleTaggedForItem(item) ? untagAllPeopleForItem(item.id) : tagAllPeopleForItem(item.id)}
												class="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 {areAllPeopleTaggedForItem(item)
													? 'bg-pastel-300/10 text-pastel-400 hover:bg-red-400/10 hover:text-red-400'
													: 'bg-graphite-600/20 text-graphite-500 hover:bg-pastel-300/10 hover:text-pastel-300'}"
												aria-label="{areAllPeopleTaggedForItem(item) ? 'Untag all people from' : 'Tag all people to'} {item.name}"
											>
												{areAllPeopleTaggedForItem(item) ? 'Untag all' : 'Tag all'}
											</button>

											<span class="text-graphite-600" aria-hidden="true">·</span>

											{#each people as person (person.id)}
												<button
													onclick={() => togglePersonAssignmentForItem(item.id, person.id)}
													class="rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 {item.assignedPersonIds.includes(person.id)
														? 'bg-pastel-300/20 text-pastel-300 border border-pastel-300/40'
														: 'bg-graphite-600/30 text-graphite-400 border border-graphite-600/30 hover:border-graphite-500/50 hover:text-graphite-300'}"
													aria-label="{item.assignedPersonIds.includes(person.id) ? 'Unassign' : 'Assign'} {person.name} to {item.name}"
													aria-pressed={item.assignedPersonIds.includes(person.id)}
												>
													{person.name}
												</button>
											{/each}
										</div>
									{:else}
										<p class="text-[11px] text-graphite-500">Add people first to assign items.</p>
									{/if}
								</div>
							{/each}
						</div>
					{:else}
						<p class="text-xs text-graphite-500">No items added yet. Add the items from the bill.</p>
					{/if}
				</GlassCard>
			</ScrollReveal>

			<!-- Tax & Service -->
			<ScrollReveal delay={300}>
				<GlassCard>
					<h2 class="mb-4 flex items-center gap-2 text-sm font-semibold text-pastel-300">
						<span aria-hidden="true">💰</span> Tax, Service & Currency
					</h2>

					<!-- Currency -->
					<div class="mb-4">
						<label for="currency-select" class="mb-1 block text-xs font-medium text-graphite-300">
							Currency
						</label>
						<select
							id="currency-select"
							bind:value={selectedCurrencyCode}
							class="w-full rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2 text-sm text-graphite-100 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30"
						>
							{#each CURRENCIES as currency}
								<option value={currency.code}>
									{currency.symbol} — {currency.code}
								</option>
							{/each}
						</select>
					</div>

					<div class="grid grid-cols-2 gap-3 sm:gap-4">
						<div>
							<label for="tax-percentage-input" class="mb-1 block text-xs font-medium text-graphite-300">
								Tax (%)
							</label>
							<input
								id="tax-percentage-input"
								type="number"
								bind:value={taxPercentage}
								min="0"
								max="100"
								step="0.5"
								class="w-full rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2 text-sm text-graphite-100 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30"
							/>
						</div>
						<div>
							<label for="service-percentage-input" class="mb-1 block text-xs font-medium text-graphite-300">
								Service (%)
							</label>
							<input
								id="service-percentage-input"
								type="number"
								bind:value={servicePercentage}
								min="0"
								max="100"
								step="0.5"
								class="w-full rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2 text-sm text-graphite-100 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30"
							/>
						</div>
					</div>
				</GlassCard>
			</ScrollReveal>

			<!-- Summary -->
			{#if items.length > 0}
				<ScrollReveal delay={400}>
					<GlassCard>
						<h2 class="mb-4 flex items-center gap-2 text-sm font-semibold text-pastel-300">
							<span aria-hidden="true">📊</span> Summary
						</h2>

						<!-- Totals -->
						<div class="mb-4 space-y-2 rounded-xl border border-graphite-600/30 bg-graphite-900/30 p-3">
							<div class="flex justify-between text-xs text-graphite-300">
								<span>Subtotal</span>
								<span>{formatWithCurrency(subtotalAmount)}</span>
							</div>
							{#if taxPercentage > 0}
								<div class="flex justify-between text-xs text-graphite-400">
									<span>Tax ({taxPercentage}%)</span>
									<span>{formatWithCurrency(taxAmount)}</span>
								</div>
							{/if}
							{#if servicePercentage > 0}
								<div class="flex justify-between text-xs text-graphite-400">
									<span>Service ({servicePercentage}%)</span>
									<span>{formatWithCurrency(serviceAmount)}</span>
								</div>
							{/if}
							<div class="border-t border-graphite-600/30 pt-2">
								<div class="flex justify-between text-sm font-semibold">
									<span class="text-graphite-100">Grand Total</span>
									<span class="text-pastel-300">{formatWithCurrency(grandTotalAmount)}</span>
								</div>
							</div>
						</div>

						<!-- Unassigned Warning -->
						{#if unassignedItemsTotal > 0}
							<div class="mb-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-3 py-2">
								<p class="text-xs text-yellow-400">
									⚠️ Some items worth {formatWithCurrency(unassignedItemsTotal)} are not assigned to anyone and won't be included in the per-person split.
								</p>
							</div>
						{/if}

						<!-- Per Person Breakdown -->
						{#if perPersonBreakdown.length > 0}
							<h3 class="mb-2 text-xs font-semibold text-graphite-300 uppercase tracking-wider">Per Person</h3>
							<div class="space-y-2">
								{#each perPersonBreakdown as breakdown (breakdown.person.id)}
									<div class="flex items-center justify-between rounded-lg border border-graphite-600/30 bg-graphite-900/30 px-3 py-2.5">
										<span class="min-w-0 truncate text-sm font-medium text-graphite-200">{breakdown.person.name}</span>
										<div class="shrink-0 text-right">
											<span class="text-sm font-bold text-pastel-300">{formatWithCurrency(breakdown.totalAmount)}</span>
											{#if breakdown.baseAmount !== breakdown.totalAmount}
												<p class="text-[10px] text-graphite-500">base: {formatWithCurrency(breakdown.baseAmount)}</p>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</GlassCard>
				</ScrollReveal>
			{/if}

			<!-- Actions -->
			{#if items.length > 0 || people.length > 0}
				<ScrollReveal delay={500}>
					<div class="flex flex-col gap-2 sm:flex-row">
						<button
							onclick={saveAndCopyShareLink}
							class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 {hasCopiedShareLink
								? 'bg-green-500/20 text-green-400 border border-green-500/30'
								: 'bg-pastel-300 text-graphite-900 hover:bg-pastel-200 hover:shadow-lg hover:shadow-pastel-300/20'}"
						>
							{#if hasCopiedShareLink}
								<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								Link copied!
							{:else}
								<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
								</svg>
								Save & Copy Link
							{/if}
						</button>
						<button
							onclick={clearAllData}
							class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-graphite-600 bg-graphite-700/40 px-5 py-2.5 text-sm font-medium text-graphite-300 transition-all duration-300 hover:border-red-400/30 hover:text-red-400"
						>
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
							</svg>
							Clear All
						</button>
					</div>
				</ScrollReveal>
			{/if}
		</div>
	</div>
</section>
