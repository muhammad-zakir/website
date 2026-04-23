<script lang="ts">
	import { EXPERIENCES, EDUCATION } from '$lib/constants';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	let expandedExperienceIndex = $state<number | null>(null);

	function toggleExperienceDetails(index: number) {
		expandedExperienceIndex = expandedExperienceIndex === index ? null : index;
	}
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="experience-heading">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading label="Career" title="Work Experience" id="experience-heading" />
		</ScrollReveal>

		<!-- Timeline -->
		<div class="relative">
			{#each EXPERIENCES as experience, experienceIndex}
				<ScrollReveal delay={experienceIndex * 60 + 100}>
					<div class="relative flex gap-4 pb-1">
						<!-- Timeline dot + line -->
						<div class="flex flex-col items-center">
							<div
								class="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border-2 border-pastel-300 bg-graphite-900 transition-colors duration-300 {expandedExperienceIndex === experienceIndex
									? 'bg-pastel-300'
									: ''}"
							></div>
							{#if experienceIndex < EXPERIENCES.length - 1}
								<div class="w-px flex-1 bg-graphite-600/40"></div>
							{/if}
						</div>

						<!-- Content -->
						<div class="min-w-0 flex-1 pb-6">
							<button
								class="group w-full text-left"
								onclick={() => toggleExperienceDetails(experienceIndex)}
								aria-expanded={expandedExperienceIndex === experienceIndex}
								aria-controls="experience-details-{experienceIndex}"
							>
								<div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
									<span class="text-xs font-medium text-pastel-300 sm:text-sm">{experience.period}</span>
									<span class="text-[10px] text-graphite-400 sm:text-xs">· {experience.location}</span>
								</div>
								<p class="mt-0.5 text-sm leading-tight font-semibold text-graphite-100 sm:text-base">
									{experience.role}
								</p>
								<p class="text-xs text-graphite-400 sm:text-sm">{experience.company}</p>

								<!-- Expand hint -->
								<div class="mt-1 flex items-center gap-1 text-[10px] text-graphite-500 transition-colors duration-200 group-hover:text-pastel-300/60">
									<svg
										class="h-3 w-3 transition-transform duration-200 {expandedExperienceIndex === experienceIndex
											? 'rotate-180'
											: ''}"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
									</svg>
									{expandedExperienceIndex === experienceIndex ? 'Less' : 'More'}
								</div>
							</button>

							<!-- Expandable Details -->
							{#if expandedExperienceIndex === experienceIndex}
								<div
									id="experience-details-{experienceIndex}"
									class="mt-3 space-y-3"
									style="animation: fadeInUp 0.3s ease-out both;"
								>
									{#if experience.description}
										<p class="text-xs leading-relaxed text-graphite-300 sm:text-sm">
											{experience.description}
										</p>
									{/if}

									{#if experience.highlights && experience.highlights.length > 0}
										<div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
											{#each experience.highlights as highlight}
												<div class="rounded-xl border border-graphite-600/50 bg-graphite-700/30 px-2 py-2 text-center">
													<span class="text-sm font-bold text-pastel-300">{highlight}</span>
												</div>
											{/each}
										</div>
									{/if}

									{#if experience.technologies && experience.technologies.length > 0}
										<div class="flex flex-wrap gap-1.5">
											{#each experience.technologies as technology}
												<span class="rounded-full bg-pastel-300/10 px-2.5 py-0.5 text-[11px] font-medium text-pastel-300">
													{technology}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							{/if}
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		<!-- Education -->
		<ScrollReveal delay={600} class="mt-4">
			<div
				class="flex items-center gap-3 rounded-xl border border-graphite-600/50 bg-graphite-800/50 px-4 py-3 backdrop-blur-sm"
			>
				<span
					class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pastel-300/15 text-sm text-pastel-300"
					aria-hidden="true"
				>
					🎓
				</span>
				<div class="min-w-0 flex-1">
					<p class="text-sm font-medium text-graphite-200">{EDUCATION.institution}</p>
					<p class="text-xs text-graphite-400">{EDUCATION.degree} · {EDUCATION.period}</p>
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>
