<script lang="ts">
	import type { Snippet } from 'svelte';

	interface GlassCardProps {
		children: Snippet;
		class?: string;
		hoverable?: boolean;
	}

	const {
		children,
		class: additionalClasses = '',
		hoverable = false
	}: GlassCardProps = $props();
</script>

<div
	class="rounded-2xl border border-graphite-600/50 bg-graphite-800/50 p-4 backdrop-blur-sm sm:p-6 {hoverable
		? 'transition-all duration-300 hover:border-pastel-300/30 hover:bg-graphite-700/60'
		: ''} {additionalClasses}"
>
	{@render children()}
</div>
