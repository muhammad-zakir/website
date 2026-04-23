<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { SOCIAL_LINKS } from '$lib/constants';

	const contactLinks = SOCIAL_LINKS.filter((link) => link.label !== 'Website');
</script>

<SeoHead
	title="Contact"
	description="Get in touch with Muhammad Zakir — Software Engineer. Let's build something great together."
	canonicalUrl="https://zakir.id/contact"
/>

<section class="relative flex min-h-screen items-center justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
	<!-- Decorative background -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
		style="background: radial-gradient(circle, var(--color-pastel-300) 0%, transparent 70%);"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto w-full max-w-lg">
		<ScrollReveal>
			<div class="text-center">
				<span class="mb-3 inline-block text-xs font-semibold tracking-[0.3em] text-pastel-300 uppercase">
					Let's Connect
				</span>
				<h1 class="text-3xl font-bold text-graphite-50 sm:text-4xl md:text-5xl">
					Get in Touch
				</h1>
				<p class="mt-4 text-sm leading-relaxed text-graphite-300 sm:text-base">
					I'd love to hear from you. Whether you have a project idea, a question, or just want to say hi — feel free to reach out.
				</p>
			</div>
		</ScrollReveal>

		<!-- Contact Cards -->
		<ScrollReveal delay={200} class="mt-10">
			<div class="space-y-3">
				{#each contactLinks as link, linkIndex}
					<a
						href={link.href}
						target={link.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
						aria-label="{link.label}: {link.value}"
						class="group flex items-center gap-4 rounded-xl border border-graphite-600/50 bg-graphite-800/50 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:border-pastel-300/30 hover:bg-graphite-700/60"
						style="animation: fadeInUp 0.5s ease-out {(linkIndex + 1) * 80 + 200}ms both;"
					>
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-graphite-600/50 transition-colors duration-300 group-hover:bg-pastel-300/20"
						>
							<svg
								class="h-5 w-5 text-graphite-300 transition-colors duration-300 group-hover:text-pastel-300"
								xmlns="http://www.w3.org/2000/svg"
								fill={link.label === 'GitHub' ? 'currentColor' : 'none'}
								viewBox="0 0 24 24"
								stroke={link.label === 'GitHub' ? 'none' : 'currentColor'}
								stroke-width="1.5"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d={link.iconPath} />
							</svg>
						</div>
						<div class="flex-1">
							<span class="text-[11px] font-medium text-graphite-400">{link.label}</span>
							<p class="text-sm font-medium text-graphite-200 transition-colors duration-300 group-hover:text-pastel-300 sm:text-base">
								{link.value}
							</p>
						</div>
						<svg
							class="h-4 w-4 text-graphite-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-pastel-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				{/each}
			</div>
		</ScrollReveal>

		<!-- Primary CTA -->
		<ScrollReveal delay={500} class="mt-8">
			<div class="text-center">
				<a
					href="mailto:hi@zakir.id"
					class="group inline-flex items-center gap-2 rounded-full bg-pastel-300 px-8 py-3 text-sm font-semibold text-graphite-900 transition-all duration-300 hover:bg-pastel-200 hover:shadow-lg hover:shadow-pastel-300/20"
				>
					<svg
						class="h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					Send me an email
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>
