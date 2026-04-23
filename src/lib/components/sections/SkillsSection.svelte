<script lang="ts">
	import { SKILL_CATEGORIES } from '$lib/constants';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
</script>

<section
	class="bg-graphite-950/30 px-4 py-20 sm:px-6 lg:px-8"
	aria-labelledby="skills-heading"
>
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading label="Tech Stack" title="Skills & Technologies" id="skills-heading" />
		</ScrollReveal>

		<div class="space-y-4">
			{#each SKILL_CATEGORIES as category, categoryIndex}
				<ScrollReveal delay={categoryIndex * 100 + 100}>
					<div
						class="rounded-2xl border border-graphite-600/50 bg-graphite-800/50 p-4 backdrop-blur-sm sm:p-5"
					>
						<h3
							class="mb-3 flex items-center gap-2 text-sm font-semibold text-pastel-300"
						>
							<span class="text-xs" aria-hidden="true">{category.icon}</span>
							{category.title}
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each category.skills as skill}
								<span
									class="inline-block rounded-full border border-graphite-500/50 bg-graphite-600/40 px-3 py-1.5 text-xs font-medium text-graphite-200 transition-all duration-300 hover:border-pastel-300/50 hover:text-pastel-200"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		<!-- Languages -->
		<ScrollReveal delay={400} class="mt-6">
			<div class="flex flex-wrap items-center justify-center gap-3 text-xs text-graphite-400 sm:justify-start sm:text-sm">
				<span>Bahasa Indonesia <span class="text-graphite-500">(Native)</span></span>
				<span class="text-graphite-600" aria-hidden="true">·</span>
				<span>English <span class="text-graphite-500">(Fluent)</span></span>
			</div>
		</ScrollReveal>
	</div>
</section>
