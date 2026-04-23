<script lang="ts">
	import './layout.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import PageTransition from '$lib/components/ui/PageTransition.svelte';

	const { children } = $props();
</script>

<SeoHead />

<a href="#main-content" class="skip-to-content">Skip to content</a>

<div class="flex min-h-screen flex-col">
	<Navigation />

	<PageTransition>
		<main id="main-content" class="flex-1">
			{@render children()}
		</main>
	</PageTransition>

	<Footer />
</div>
