<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ScrollRevealProps {
		children: Snippet;
		threshold?: number;
		delay?: number;
		class?: string;
	}

	const {
		children,
		threshold = 0.1,
		delay = 0,
		class: additionalClasses = ''
	}: ScrollRevealProps = $props();

	let elementReference: HTMLDivElement | undefined = $state();
	let isVisible = $state(false);

	$effect(() => {
		if (!elementReference) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold }
		);

		observer.observe(elementReference);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={elementReference}
	class={additionalClasses}
	style="opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 24}px); transition: opacity 0.7s ease-out {delay}ms, transform 0.7s ease-out {delay}ms;"
>
	{@render children()}
</div>
