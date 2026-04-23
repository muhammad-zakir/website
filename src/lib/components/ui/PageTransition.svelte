<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/stores';

	interface PageTransitionProps {
		children: Snippet;
	}

	const { children }: PageTransitionProps = $props();
</script>

{#key $page.url.pathname}
	<div
		in:fade={{ duration: 200, delay: 100 }}
		out:fade={{ duration: 100 }}
	>
		{@render children()}
	</div>
{/key}
