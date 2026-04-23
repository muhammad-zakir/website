<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';

	const COUNTRY_CODES = [
		{ code: '62', country: 'Indonesia', flag: '🇮🇩' },
		{ code: '1', country: 'United States', flag: '🇺🇸' },
		{ code: '44', country: 'United Kingdom', flag: '🇬🇧' },
		{ code: '65', country: 'Singapore', flag: '🇸🇬' },
		{ code: '60', country: 'Malaysia', flag: '🇲🇾' },
		{ code: '61', country: 'Australia', flag: '🇦🇺' },
		{ code: '81', country: 'Japan', flag: '🇯🇵' },
		{ code: '82', country: 'South Korea', flag: '🇰🇷' },
		{ code: '86', country: 'China', flag: '🇨🇳' },
		{ code: '91', country: 'India', flag: '🇮🇳' },
		{ code: '49', country: 'Germany', flag: '🇩🇪' },
		{ code: '33', country: 'France', flag: '🇫🇷' },
		{ code: '971', country: 'UAE', flag: '🇦🇪' },
		{ code: '966', country: 'Saudi Arabia', flag: '🇸🇦' },
		{ code: '63', country: 'Philippines', flag: '🇵🇭' },
		{ code: '66', country: 'Thailand', flag: '🇹🇭' },
		{ code: '84', country: 'Vietnam', flag: '🇻🇳' }
	];

	let selectedCountryCode = $state('62');
	let rawPhoneNumber = $state('');
	let messageText = $state('');
	let hasCopiedLink = $state(false);

	const sanitizedPhoneNumber = $derived(rawPhoneNumber.replace(/\D/g, ''));

	const formattedPhoneNumber = $derived.by(() => {
		if (!sanitizedPhoneNumber) return '';
		let number = sanitizedPhoneNumber;
		if (number.startsWith('0')) {
			number = number.substring(1);
		}
		return number;
	});

	const fullInternationalNumber = $derived(
		formattedPhoneNumber ? `${selectedCountryCode}${formattedPhoneNumber}` : ''
	);

	const displayFormattedNumber = $derived.by(() => {
		if (!fullInternationalNumber) return '';
		return `+${selectedCountryCode} ${formattedPhoneNumber}`;
	});

	const generatedWhatsappLink = $derived.by(() => {
		if (!fullInternationalNumber) return '';
		let link = `https://wa.me/${fullInternationalNumber}`;
		if (messageText.trim()) {
			link += `?text=${encodeURIComponent(messageText.trim())}`;
		}
		return link;
	});

	function handlePhoneNumberInput(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		const cursorPosition = inputElement.selectionStart ?? 0;
		const previousValue = inputElement.value;
		const strippedValue = previousValue.replace(/\D/g, '');
		rawPhoneNumber = strippedValue;

		// Restore cursor position accounting for removed characters
		requestAnimationFrame(() => {
			const removedCharactersBeforeCursor = previousValue
				.substring(0, cursorPosition)
				.replace(/\D/g, '').length;
			const newCursorPosition = Math.min(removedCharactersBeforeCursor, strippedValue.length);
			inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
		});
	}

	function handlePhoneNumberPaste(event: ClipboardEvent) {
		event.preventDefault();
		const pastedText = event.clipboardData?.getData('text') ?? '';
		const strippedPastedText = pastedText.replace(/\D/g, '');
		rawPhoneNumber = strippedPastedText;
	}

	async function copyGeneratedLinkToClipboard() {
		if (!generatedWhatsappLink) return;
		try {
			await navigator.clipboard.writeText(generatedWhatsappLink);
			hasCopiedLink = true;
			setTimeout(() => {
				hasCopiedLink = false;
			}, 2000);
		} catch {
			// Fallback for older browsers
			const temporaryTextArea = document.createElement('textarea');
			temporaryTextArea.value = generatedWhatsappLink;
			document.body.appendChild(temporaryTextArea);
			temporaryTextArea.select();
			document.execCommand('copy');
			document.body.removeChild(temporaryTextArea);
			hasCopiedLink = true;
			setTimeout(() => {
				hasCopiedLink = false;
			}, 2000);
		}
	}
</script>

<SeoHead
	title="WhatsApp Click-to-Chat"
	description="Generate a WhatsApp click-to-chat link from any phone number. Auto-strips non-numeric characters and formats to international format."
	canonicalUrl="https://zakir.id/tools/whatsapp-click-to-chat"
/>

<section class="px-4 pt-28 pb-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-xl">
		<ScrollReveal>
			<div class="mb-8 text-center sm:text-left">
				<a
					href="/tools"
					class="mb-4 inline-flex items-center gap-1 text-xs text-graphite-400 transition-colors duration-200 hover:text-pastel-300"
				>
					<svg
						class="h-3.5 w-3.5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
					Back to Tools
				</a>
				<h1 class="text-2xl font-bold text-graphite-50 sm:text-3xl">
					WhatsApp Click-to-Chat
				</h1>
				<p class="mt-2 text-sm text-graphite-300">
					Enter a phone number to generate a direct WhatsApp chat link. Non-numeric characters are automatically removed.
				</p>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<GlassCard>
				<div class="space-y-5">
					<!-- Country Code + Phone Number -->
					<div>
						<label for="phone-number-input" class="mb-2 block text-sm font-medium text-graphite-200">
							Phone Number
						</label>
						<div class="flex gap-2">
							<select
								id="country-code-select"
								bind:value={selectedCountryCode}
								class="w-28 rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-3 py-2.5 text-sm text-graphite-100 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30 sm:w-32"
								aria-label="Country code"
							>
								{#each COUNTRY_CODES as countryCodeOption}
									<option value={countryCodeOption.code}>
										{countryCodeOption.flag} +{countryCodeOption.code}
									</option>
								{/each}
							</select>
							<input
								id="phone-number-input"
								type="text"
								inputmode="numeric"
								value={rawPhoneNumber}
								oninput={handlePhoneNumberInput}
								onpaste={handlePhoneNumberPaste}
								placeholder="8119710096"
								class="flex-1 rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-4 py-2.5 text-sm text-graphite-100 placeholder:text-graphite-500 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30"
							/>
						</div>
						{#if displayFormattedNumber}
							<p class="mt-2 text-xs text-graphite-400">
								Formatted: <span class="font-medium text-pastel-300">{displayFormattedNumber}</span>
							</p>
						{/if}
					</div>

					<!-- Message -->
					<div>
						<label for="message-input" class="mb-2 block text-sm font-medium text-graphite-200">
							Message <span class="text-graphite-500">(optional)</span>
						</label>
						<textarea
							id="message-input"
							bind:value={messageText}
							rows={3}
							placeholder="Hi! I'd like to chat..."
							class="w-full resize-none rounded-lg border border-graphite-600/50 bg-graphite-700/50 px-4 py-2.5 text-sm text-graphite-100 placeholder:text-graphite-500 transition-colors duration-200 focus:border-pastel-300/50 focus:ring-1 focus:ring-pastel-300/30"
						></textarea>
					</div>

					<!-- Generated Link Preview -->
					{#if generatedWhatsappLink}
						<div
							class="rounded-lg border border-graphite-600/30 bg-graphite-900/50 p-3"
							style="animation: fadeInUp 0.3s ease-out both;"
						>
							<p class="mb-1 text-[11px] font-medium text-graphite-400 uppercase">Generated Link</p>
							<p class="break-all text-xs font-mono text-pastel-300">{generatedWhatsappLink}</p>
						</div>
					{/if}

					<!-- Actions -->
					<div class="flex flex-col gap-2 sm:flex-row">
						<a
							href={generatedWhatsappLink || '#'}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 {generatedWhatsappLink
								? 'bg-pastel-300 text-graphite-900 hover:bg-pastel-200 hover:shadow-lg hover:shadow-pastel-300/20'
								: 'cursor-not-allowed bg-graphite-600 text-graphite-400'}"
							aria-disabled={!generatedWhatsappLink}
							onclick={(event) => { if (!generatedWhatsappLink) event.preventDefault(); }}
						>
							Open in WhatsApp
						</a>
						<button
							onclick={copyGeneratedLinkToClipboard}
							disabled={!generatedWhatsappLink}
							class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-graphite-600 bg-graphite-700/40 px-5 py-2.5 text-sm font-medium transition-all duration-300 {generatedWhatsappLink
								? 'text-graphite-200 hover:border-pastel-300/30 hover:text-pastel-300'
								: 'cursor-not-allowed text-graphite-500'}"
						>
							{#if hasCopiedLink}
								<svg class="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								Copied!
							{:else}
								<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
								Copy link
							{/if}
						</button>
					</div>
				</div>
			</GlassCard>
		</ScrollReveal>
	</div>
</section>
