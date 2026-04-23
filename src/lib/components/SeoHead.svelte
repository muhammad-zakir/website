<script lang="ts">
	import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '$lib/constants';

	interface SeoHeadProps {
		title?: string;
		description?: string;
		canonicalUrl?: string;
		ogType?: string;
	}

	const {
		title = SITE_NAME,
		description = SITE_DESCRIPTION,
		canonicalUrl = SITE_URL,
		ogType = 'website'
	}: SeoHeadProps = $props();

	const fullTitle = title === SITE_NAME ? `${SITE_NAME} — Software Engineer` : `${title} — ${SITE_NAME}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Muhammad Zakir" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={SITE_NAME} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Muhammad Zakir',
		url: SITE_URL,
		email: 'hi@zakir.id',
		jobTitle: 'Software Engineer',
		sameAs: [
			'https://www.linkedin.com/in/muhammadzakir39',
			'https://github.com/muhammad-zakir'
		]
	})}</script>`}
</svelte:head>
