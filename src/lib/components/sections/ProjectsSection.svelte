<script lang="ts">
	import { PROJECTS } from '#lib/constants.js';
	import ScrollReveal from '#lib/components/ui/ScrollReveal.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
</script>

<section class="bg-graphite-950/30 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading label="Side Projects" title="Itrium" id="projects-heading" />
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<p
				class="mb-6 text-center text-sm leading-relaxed text-graphite-300 sm:text-left sm:text-base"
			>
				Free, open-source applications that respect your privacy, made under
				<a
					href="https://itrium.id"
					target="_blank"
					rel="external noopener noreferrer"
					class="font-medium text-pastel-300 underline-offset-4 hover:underline">Itrium</a
				>.
			</p>
		</ScrollReveal>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each PROJECTS as project, projectIndex (project.title)}
				<ScrollReveal delay={projectIndex * 80 + 150}>
					<a
						href={project.href}
						target="_blank"
						rel="external noopener noreferrer"
						class="group flex h-full flex-col rounded-2xl border border-graphite-600/50 bg-graphite-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-pastel-300/30 hover:bg-graphite-700/60 sm:p-5"
					>
						<h3
							class="text-sm font-semibold text-graphite-100 transition-colors duration-300 group-hover:text-pastel-300 sm:text-base"
						>
							{project.title}
						</h3>
						<p class="mt-2 flex-1 text-xs leading-relaxed text-graphite-300 sm:text-sm">
							{project.description}
						</p>
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each project.technologies as technology (technology)}
								<span
									class="rounded-full bg-pastel-300/10 px-2.5 py-0.5 text-[11px] font-medium text-pastel-300"
								>
									{technology}
								</span>
							{/each}
						</div>
					</a>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
