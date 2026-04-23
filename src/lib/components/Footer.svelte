<script lang="ts">
	import { SOCIAL_LINKS } from '$lib/constants';
</script>

<footer class="border-t border-graphite-700/40 bg-graphite-950/50">
	<div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
			<!-- Brand + Copyright -->
			<div class="text-center sm:text-left">
				<a
					href="/"
					class="text-lg font-bold tracking-tight text-graphite-50 transition-colors duration-300 hover:text-pastel-300"
					aria-label="Go to homepage"
				>
					zakir<span class="text-pastel-300">.</span>
				</a>
				<p class="mt-1 text-xs text-graphite-400">
					© {new Date().getFullYear()} Muhammad Zakir. All rights reserved.
				</p>
			</div>

			<!-- Social Links -->
			<div class="flex items-center gap-3">
				{#each SOCIAL_LINKS as socialLink}
					<a
						href={socialLink.href}
						target={socialLink.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={socialLink.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
						class="group flex h-9 w-9 items-center justify-center rounded-full border border-graphite-600/50 bg-graphite-800/50 transition-all duration-300 hover:border-pastel-300/30 hover:bg-pastel-300/10"
						aria-label="{socialLink.label}: {socialLink.value}"
					>
						<svg
							class="h-4 w-4 text-graphite-400 transition-colors duration-300 group-hover:text-pastel-300"
							xmlns="http://www.w3.org/2000/svg"
							fill={socialLink.label === 'GitHub' ? 'currentColor' : 'none'}
							viewBox="0 0 24 24"
							stroke={socialLink.label === 'GitHub' ? 'none' : 'currentColor'}
							stroke-width="1.5"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d={socialLink.iconPath}
							/>
						</svg>
					</a>
				{/each}
			</div>
		</div>

		<!-- Built with -->
		<p class="mt-6 text-center text-[11px] text-graphite-500">
			Built with SvelteKit · Deployed on Cloudflare ·
			<a
				href="https://github.com/muhammad-zakir/website"
				target="_blank"
				rel="noopener noreferrer"
				class="text-graphite-400 underline decoration-graphite-600 underline-offset-2 transition-colors duration-200 hover:text-pastel-300"
			>
				Source
			</a>
		</p>
	</div>
</footer>
