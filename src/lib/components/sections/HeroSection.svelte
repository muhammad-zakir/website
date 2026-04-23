<script lang="ts">
	const technologPills = ['PHP', 'JavaScript / NodeJS', 'Python', 'AWS', 'Docker'];
</script>

<section
	class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8"
	aria-label="Introduction"
>
	<!-- Decorative background orbs -->
	<div
		class="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
		style="background: radial-gradient(circle, var(--color-pastel-300) 0%, transparent 70%);"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full opacity-15 blur-3xl sm:h-72 sm:w-72"
		style="background: radial-gradient(circle, var(--color-pastel-400) 0%, transparent 70%);"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
		<!-- Badge -->
		<div class="animate-fade-in-up">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-graphite-600 bg-graphite-700/60 px-4 py-1.5 text-xs font-medium tracking-wider text-pastel-300 uppercase backdrop-blur-sm sm:text-sm"
			>
				<span class="inline-block h-2 w-2 animate-pulse rounded-full bg-pastel-300" aria-hidden="true"></span>
				Software Engineer
			</div>
		</div>

		<!-- Heading -->
		<h1
			class="animate-fade-in-up text-4xl leading-tight font-extrabold tracking-tight text-graphite-50 delay-100 sm:text-5xl md:text-7xl"
		>
			Hi, I'm <span class="bg-gradient-to-r from-pastel-300 to-pastel-400 bg-clip-text text-transparent">Zakir</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="animate-fade-in-up mt-4 max-w-lg text-base leading-relaxed font-light text-graphite-300 delay-200 sm:mt-6 sm:text-lg md:text-xl"
		>
			A seasoned software engineer with 7+ years of experience building scalable backend systems and full-stack applications.
		</p>

		<!-- Tech Pills -->
		<div class="animate-fade-in-up mt-6 flex flex-wrap justify-center gap-2 delay-300">
			{#each technologPills as technology}
				<span
					class="rounded-full border border-graphite-600/50 bg-graphite-700/40 px-3 py-1 text-xs text-graphite-300 transition-colors duration-300 hover:border-pastel-300/50 hover:text-pastel-200"
				>
					{technology}
				</span>
			{/each}
		</div>

		<!-- CTA -->
		<div class="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-3 delay-400">
			<a
				href="/contact"
				class="group inline-flex items-center gap-2 rounded-full bg-pastel-300 px-6 py-2.5 text-sm font-semibold text-graphite-900 transition-all duration-300 hover:bg-pastel-200 hover:shadow-lg hover:shadow-pastel-300/20"
			>
				Get in touch
				<svg
					class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
			<a
				href="/tools"
				class="inline-flex items-center gap-2 rounded-full border border-graphite-600 bg-graphite-700/40 px-6 py-2.5 text-sm font-medium text-graphite-200 backdrop-blur-sm transition-all duration-300 hover:border-pastel-300/30 hover:text-pastel-300"
			>
				Explore tools
			</a>
		</div>

		<!-- Scroll indicator -->
		<div class="animate-fade-in-up mt-16 flex flex-col items-center gap-2 text-graphite-400 delay-600">
			<span class="text-xs tracking-widest uppercase">Scroll to explore</span>
			<svg
				class="animate-float h-5 w-5 text-pastel-300"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
				aria-hidden="true"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</div>
</section>
