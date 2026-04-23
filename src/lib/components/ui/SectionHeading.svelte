<script lang="ts">
	interface SectionHeadingProps {
		label: string;
		title: string;
		id?: string;
	}

	const { label, title, id }: SectionHeadingProps = $props();
</script>

<div class="mb-8 text-center sm:mb-10 sm:text-left">
	<span
		class="mb-3 inline-block text-xs font-semibold tracking-[0.3em] text-pastel-300 uppercase"
	>
		{label}
	</span>
	<h2 {id} class="text-2xl font-bold text-graphite-50 sm:text-3xl lg:text-4xl">
		{title}
	</h2>
</div>
