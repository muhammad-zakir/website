<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SelectOption {
		value: string;
		label: string;
		searchTerms: string;
	}

	interface SearchableSelectProps {
		options: SelectOption[];
		value: string;
		onchange: (value: string) => void;
		placeholder?: string;
		id?: string;
		ariaLabel?: string;
	}

	const {
		options,
		value,
		onchange,
		placeholder = 'Search...',
		id,
		ariaLabel
	}: SearchableSelectProps = $props();

	let isDropdownOpen = $state(false);
	let searchQuery = $state('');
	let highlightedIndex = $state(-1);
	let inputElement: HTMLInputElement | undefined = $state();
	let dropdownElement: HTMLDivElement | undefined = $state();
	let containerElement: HTMLDivElement | undefined = $state();

	const selectedOption = $derived(options.find((option) => option.value === value));

	const filteredOptions = $derived.by(() => {
		if (!searchQuery.trim()) return options;
		const lowerQuery = searchQuery.toLowerCase();
		return options.filter((option) => option.searchTerms.toLowerCase().includes(lowerQuery));
	});

	function openDropdown() {
		isDropdownOpen = true;
		searchQuery = '';
		highlightedIndex = -1;
		requestAnimationFrame(() => {
			inputElement?.focus();
		});
	}

	function closeDropdown() {
		isDropdownOpen = false;
		searchQuery = '';
		highlightedIndex = -1;
	}

	function selectOption(optionValue: string) {
		onchange(optionValue);
		closeDropdown();
	}

	function handleInputKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			highlightedIndex = Math.min(highlightedIndex + 1, filteredOptions.length - 1);
			scrollHighlightedIntoView();
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			highlightedIndex = Math.max(highlightedIndex - 1, 0);
			scrollHighlightedIntoView();
		} else if (event.key === 'Enter') {
			event.preventDefault();
			if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
				selectOption(filteredOptions[highlightedIndex].value);
			}
		} else if (event.key === 'Escape') {
			closeDropdown();
		}
	}

	function scrollHighlightedIntoView() {
		requestAnimationFrame(() => {
			const highlightedElement = dropdownElement?.querySelector('[data-highlighted="true"]');
			highlightedElement?.scrollIntoView({ block: 'nearest' });
		});
	}

	function handleTriggerKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
			event.preventDefault();
			openDropdown();
		}
	}

	/* Close on outside click */
	$effect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (containerElement && !containerElement.contains(event.target as Node)) {
				closeDropdown();
			}
		}

		if (isDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	});
</script>

<div class="relative" bind:this={containerElement}>
	<!-- Trigger Button -->
	<button
		type="button"
		{id}
		class="flex w-full items-center justify-between gap-2 rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2.5 text-left text-sm text-graphite-100 transition-colors duration-200 hover:border-graphite-500/50 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30 focus:outline-none"
		onclick={openDropdown}
		onkeydown={handleTriggerKeydown}
		aria-label={ariaLabel}
		aria-haspopup="listbox"
		aria-expanded={isDropdownOpen}
	>
		<span class="min-w-0 truncate">
			{selectedOption?.label ?? placeholder}
		</span>
		<svg
			class="h-3.5 w-3.5 shrink-0 text-graphite-400 transition-transform duration-200 {isDropdownOpen ? 'rotate-180' : ''}"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	<!-- Dropdown -->
	{#if isDropdownOpen}
		<div
			class="absolute top-full left-0 z-50 mt-1 w-full rounded-xl border border-graphite-600/50 bg-graphite-800/95 shadow-xl backdrop-blur-md"
			style="animation: fadeInUp 0.15s ease-out both;"
		>
			<!-- Search Input -->
			<div class="border-b border-graphite-600/30 p-2">
				<div class="flex items-center gap-2 rounded-lg border border-graphite-600/50 bg-graphite-900/50 px-3 py-2">
					<svg
						class="h-3.5 w-3.5 shrink-0 text-graphite-400"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<input
						bind:this={inputElement}
						type="text"
						bind:value={searchQuery}
						onkeydown={handleInputKeydown}
						placeholder={placeholder}
						class="min-w-0 flex-1 border-none bg-transparent p-0 text-sm text-graphite-100 placeholder:text-graphite-500 focus:ring-0 focus:outline-none"
						aria-label="Search options"
						autocomplete="off"
					/>
				</div>
			</div>

			<!-- Options List -->
			<div
				bind:this={dropdownElement}
				class="max-h-52 overflow-y-auto p-1.5"
				role="listbox"
			>
				{#if filteredOptions.length > 0}
					{#each filteredOptions as option, optionIndex}
						<button
							type="button"
							class="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition-colors duration-100 {option.value === value
								? 'bg-pastel-300/15 text-pastel-300'
								: highlightedIndex === optionIndex
									? 'bg-graphite-700/60 text-graphite-100'
									: 'text-graphite-300 hover:bg-graphite-700/40 hover:text-graphite-100'}"
							onclick={() => selectOption(option.value)}
							onmouseenter={() => (highlightedIndex = optionIndex)}
							role="option"
							aria-selected={option.value === value}
							data-highlighted={highlightedIndex === optionIndex}
						>
							{option.label}
						</button>
					{/each}
				{:else}
					<p class="px-3 py-4 text-center text-xs text-graphite-500">No results found</p>
				{/if}
			</div>
		</div>
	{/if}
</div>
