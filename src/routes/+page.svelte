<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import SkillsSection from '$lib/components/sections/SkillsSection.svelte';
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
</script>

<SeoHead
	title="Zakir"
	description="Personal portfolio by Muhammad Zakir — Software Engineer with 7+ years of experience building scalable backend systems and full-stack applications."
	canonicalUrl="https://zakir.id"
/>

<HeroSection />

<!-- Decorative divider -->
<div class="mx-auto h-px max-w-3xl" style="background: linear-gradient(90deg, transparent, var(--color-pastel-300), transparent);" aria-hidden="true"></div>

<AboutSection />
<SkillsSection />
<ExperienceSection />
