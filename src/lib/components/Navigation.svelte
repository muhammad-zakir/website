<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { NAVIGATION_LINKS, TOOLS_URL } from '#lib/constants.js';

	let isMobileMenuOpen = $state(false);
	let previousScrollY = $state(0);
	let isNavigationVisible = $state(true);
	let hasScrolled = $state(false);

	const currentPathname = $derived(page.url.pathname);

	function isActiveRoute(href: string): boolean {
		if (href === '/') return currentPathname === '/';
		return currentPathname.startsWith(href);
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	$effect(() => {
		function handleScroll() {
			const currentScrollY = window.scrollY;
			hasScrolled = currentScrollY > 20;

			if (currentScrollY > previousScrollY && currentScrollY > 100) {
				isNavigationVisible = false;
			} else {
				isNavigationVisible = true;
			}

			previousScrollY = currentScrollY;
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$effect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-transform duration-300 {isNavigationVisible
		? 'translate-y-0'
		: '-translate-y-full'}"
>
	<nav
		class="border-b backdrop-blur-md transition-all duration-300 {hasScrolled
			? 'border-graphite-700/60 bg-graphite-900/80'
			: 'border-transparent bg-transparent'}"
		aria-label="Main navigation"
	>
		<div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<!-- Brand -->
			<a
				href={resolve('/')}
				class="group flex items-center gap-0.5 text-lg font-bold tracking-tight text-graphite-50 transition-colors duration-300 hover:text-pastel-300"
				aria-label="Go to homepage"
			>
				zakir<span class="text-pastel-300 transition-transform duration-300 group-hover:scale-125"
					>.</span
				>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-1 md:flex">
				{#each NAVIGATION_LINKS as link (link.href)}
					<a
						href={resolve(link.href)}
						class="rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 {isActiveRoute(
							link.href
						)
							? 'text-pastel-300'
							: 'text-graphite-300 hover:text-graphite-50'}"
						aria-current={isActiveRoute(link.href) ? 'page' : undefined}
					>
						{link.label}
					</a>
				{/each}

				<a
					href={TOOLS_URL}
					rel="external"
					class="rounded-lg px-3 py-2 text-sm font-medium text-graphite-300 transition-colors duration-200 hover:text-graphite-50"
				>
					Tools
				</a>
			</div>

			<!-- Mobile Hamburger -->
			<button
				class="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-graphite-700/50 md:hidden"
				onclick={toggleMobileMenu}
				aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMobileMenuOpen}
			>
				<div class="flex h-5 w-5 flex-col items-center justify-center gap-1">
					<span
						class="block h-0.5 w-5 rounded-full bg-graphite-100 transition-all duration-300 {isMobileMenuOpen
							? 'translate-y-[3px] rotate-45'
							: ''}"
					></span>
					<span
						class="block h-0.5 w-5 rounded-full bg-graphite-100 transition-all duration-300 {isMobileMenuOpen
							? '-translate-y-[3px] -rotate-45'
							: ''}"
					></span>
				</div>
			</button>
		</div>
	</nav>
</header>

<!-- Mobile Menu Overlay -->
{#if isMobileMenuOpen}
	<button
		class="fixed inset-0 z-40 bg-graphite-950/60 backdrop-blur-sm md:hidden"
		onclick={closeMobileMenu}
		aria-label="Close navigation menu"
		style="animation: fadeIn 0.2s ease-out both;"
	></button>
{/if}

<!-- Mobile Drawer -->
<div
	class="fixed top-0 right-0 z-50 flex h-dvh w-72 flex-col border-l border-graphite-700/50 bg-graphite-900/95 backdrop-blur-md transition-transform duration-300 md:hidden {isMobileMenuOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
	role="dialog"
	aria-modal="true"
	aria-label="Navigation menu"
>
	<!-- Close button inside drawer -->
	<div class="flex justify-end px-4 pt-4">
		<button
			class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-graphite-700/50"
			onclick={closeMobileMenu}
			aria-label="Close navigation menu"
		>
			<div class="flex h-5 w-5 flex-col items-center justify-center gap-1">
				<span class="block h-0.5 w-5 translate-y-[3px] rotate-45 rounded-full bg-graphite-100"
				></span>
				<span class="block h-0.5 w-5 -translate-y-[3px] -rotate-45 rounded-full bg-graphite-100"
				></span>
			</div>
		</button>
	</div>

	<div class="flex flex-col gap-1 px-4 pt-4 pb-6">
		{#each NAVIGATION_LINKS as link (link.href)}
			<a
				href={resolve(link.href)}
				class="rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 {isActiveRoute(
					link.href
				)
					? 'bg-pastel-300/10 text-pastel-300'
					: 'text-graphite-300 hover:bg-graphite-700/50 hover:text-graphite-50'}"
				aria-current={isActiveRoute(link.href) ? 'page' : undefined}
				onclick={closeMobileMenu}
			>
				{link.label}
			</a>
		{/each}

		<a
			href={TOOLS_URL}
			rel="external"
			class="rounded-lg px-4 py-3 text-base font-medium text-graphite-300 transition-colors duration-200 hover:bg-graphite-700/50 hover:text-graphite-50"
			onclick={closeMobileMenu}
		>
			Tools
		</a>
	</div>
</div>
