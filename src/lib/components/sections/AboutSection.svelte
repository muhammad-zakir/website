<script lang="ts">
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="about-heading">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading label="About Me" title="Muhammad Zakir" id="about-heading" />
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<div class="space-y-4 text-center sm:text-left">
				<p class="text-sm leading-relaxed text-graphite-300 sm:text-base">
					I'm a seasoned software engineer that focuses mainly on the back-end side. My expertise
					spans PHP with CodeIgniter or Laravel, JavaScript/TypeScript with Adonis, Fastify, NestJS,
					and on the frontend with React, Svelte, and Vue. I also have experience with Python using
					Flask and Celery.
				</p>
				<p class="text-sm leading-relaxed text-graphite-300 sm:text-base">
					Recently, <span class="font-medium text-pastel-300">Elixir</span> with Phoenix, and
					<span class="font-medium text-pastel-300">Rust</span> have piqued my interest.
				</p>
			</div>
		</ScrollReveal>

		<!-- Quick Stats -->
		<ScrollReveal delay={200} class="mt-8">
			<GlassCard>
				<div class="grid grid-cols-3 gap-3 sm:gap-4">
					<div class="text-center">
						<span class="text-2xl font-bold text-pastel-300 sm:text-3xl">7+</span>
						<p class="mt-1 text-xs text-graphite-400">Years Exp.</p>
					</div>
					<div class="text-center">
						<span class="text-2xl font-bold text-pastel-300 sm:text-3xl">8</span>
						<p class="mt-1 text-xs text-graphite-400">Companies</p>
					</div>
					<div class="text-center">
						<span class="text-2xl font-bold text-pastel-300 sm:text-3xl">15+</span>
						<p class="mt-1 text-xs text-graphite-400">Technologies</p>
					</div>
				</div>
			</GlassCard>
		</ScrollReveal>

		<!-- Location -->
		<ScrollReveal delay={300} class="mt-6">
			<div class="flex items-center justify-center gap-2 text-sm text-graphite-400 sm:justify-start">
				<svg
					class="h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
					/>
				</svg>
				Jakarta, Indonesia
			</div>
		</ScrollReveal>
	</div>
</section>
