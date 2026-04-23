<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { TOOLS } from '$lib/constants';
</script>

<SeoHead
	title="Tools"
	description="Free online tools by Muhammad Zakir — WhatsApp Click-to-Chat generator, Split Bill Calculator, and more."
	canonicalUrl="https://zakir.id/tools"
/>

<section class="px-4 pt-28 pb-20 sm:px-6 lg:px-8" aria-labelledby="tools-heading">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<div class="mb-10 text-center sm:text-left">
				<span class="mb-3 inline-block text-xs font-semibold tracking-[0.3em] text-pastel-300 uppercase">
					Utilities
				</span>
				<h1 id="tools-heading" class="text-3xl font-bold text-graphite-50 sm:text-4xl">
					Online Tools
				</h1>
				<p class="mt-3 text-sm text-graphite-300 sm:text-base">
					A collection of small, useful tools I built for personal use. Feel free to use and share them.
				</p>
			</div>
		</ScrollReveal>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each TOOLS as tool, toolIndex}
				<ScrollReveal delay={toolIndex * 100 + 100}>
					<a
						href={tool.href}
						class="group flex flex-col rounded-2xl border border-graphite-600/50 bg-graphite-800/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-pastel-300/30 hover:bg-graphite-700/60 sm:p-6"
					>
						<span class="mb-3 text-2xl" aria-hidden="true">{tool.icon}</span>
						<h2 class="text-base font-semibold text-graphite-50 transition-colors duration-300 group-hover:text-pastel-300 sm:text-lg">
							{tool.title}
						</h2>
						<p class="mt-2 flex-1 text-xs leading-relaxed text-graphite-400 sm:text-sm">
							{tool.description}
						</p>
						<div class="mt-4 flex items-center gap-1 text-xs font-medium text-pastel-300 transition-all duration-300 group-hover:gap-2">
							Open tool
							<svg
								class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</a>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
