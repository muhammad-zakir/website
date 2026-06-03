import type { SocialLink, SkillCategory, Experience, Education, Tool } from './types';

/* ─── Site Metadata ─── */
export const SITE_NAME = 'Zakir';
export const SITE_TITLE = 'Zakir — Software Engineer';
export const SITE_DESCRIPTION =
	'Personal portfolio and tools by Muhammad Zakir — Software Engineer with 7+ years of experience building scalable backend systems and full-stack applications.';
export const SITE_URL = 'https://zakir.id';
export const SITE_AUTHOR = 'Muhammad Zakir';

/* ─── Social Links ─── */
export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: 'Email',
		value: 'hi@zakir.id',
		href: 'mailto:hi@zakir.id',
		iconPath:
			'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
	},
	{
		label: 'LinkedIn',
		value: 'muhammadzakir39',
		href: 'https://www.linkedin.com/in/muhammadzakir39',
		iconPath:
			'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z'
	},
	{
		label: 'GitHub',
		value: 'muhammad-zakir',
		href: 'https://github.com/muhammad-zakir',
		iconPath:
			'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
	},
	{
		label: 'Website',
		value: 'zakir.id',
		href: 'https://zakir.id',
		iconPath:
			'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
	}
];

/* ─── Skills ─── */
export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: 'Backend',
		icon: '⚙',
		skills: [
			'PHP (CakePHP, CodeIgniter, Laravel, Lumen)',
			'Node.js (Adonis, Express, Fastify, NestJS)',
			'Python (Celery, Flask)',
			'Elixir (Phoenix)'
		]
	},
	{
		title: 'Frontend',
		icon: '◆',
		skills: [
			'HTML',
			'CSS (Bootstrap, Bulma, Tailwind)',
			'JavaScript / TypeScript',
			'jQuery',
			'React (Next.js)',
			'Svelte (SvelteKit)',
			'Vue'
		]
	},
	{
		title: 'Infrastructure & DevOps',
		icon: '☁',
		skills: [
			'AWS (App Runner, CloudFront, EC2, IAM, Lambda, RDS, S3, WAF)',
			'Cloudflare (Workers, Pages)',
			'Docker',
			'GitHub Actions',
			'Linux',
			'CI/CD'
		]
	}
];

/* ─── Experience Timeline ─── */
export const EXPERIENCES: Experience[] = [
	{
		period: 'Jun 2025 – Mar 2026',
		role: 'Senior Software Engineer',
		company: 'Silentmode Sdn. Bhd.',
		location: 'Selangor, MY (Remote)',
		description:
			'Increased unit test coverage for a large legacy codebase. Optimized code style standardization and conducted peer reviews for every team member.',
		technologies: ['PHP', 'Laravel', 'NodeJS', 'NestJS', 'Vue', 'Bootstrap']
	},
	{
		period: 'Oct 2024 – May 2025',
		role: 'Senior Software Engineer',
		company: 'PT. Namea Semesta Teknologi',
		location: 'Jakarta, ID (Remote)',
		description:
			'Developed infrastructure design templates for new projects covering application instances, database servers, WAF, CDN, and CI/CD. Optimized legacy infrastructure for cost efficiency and improved API response times.',
		technologies: ['PHP', 'Laravel', 'NodeJS', 'Fastify', 'NestJS']
	},
	{
		period: 'Jul 2023 – Oct 2024',
		role: 'Software Engineer',
		company: 'SEVEN Retail Group',
		location: 'Jakarta, ID (Hybrid)',
		description:
			'Designed end-to-end architecture encompassing backend, frontend, and infrastructure using AWS. Developed project boilerplates and managed a small team until an official tech lead was recruited.',
		technologies: ['NodeJS', 'Fastify', 'Svelte', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'GitHub Actions']
	},
	{
		period: 'Oct 2021 – Jun 2023',
		role: 'Backend Developer',
		company: 'TabSquare',
		location: 'Jakarta, ID (Remote for SG)',
		description:
			'Integrated third-party POS aggregator APIs from scratch to production. Optimized microservices message handling by replacing unnecessary broker storage with a single Redis key with better failover.',
		technologies: ['PHP', 'CakePHP', 'Laravel', 'Lumen', 'NodeJS', 'NestJS', 'Svelte', 'Redis', 'RabbitMQ']
	},
	{
		period: 'Nov 2020 – Oct 2021',
		role: 'Software Engineer',
		company: 'EngX (EngX1 Pte. Ltd.)',
		location: 'Singapore, SG (Remote)',
		description:
			'Led architectural and infrastructural designs for The Gym Pod (fully automated private gyms). Optimized the main backend codebase with clearer design patterns and automated deployment via GitHub Actions.',
		technologies: ['Laravel', 'Lumen', 'Tailwind CSS', 'Svelte', 'Vue']
	},
	{
		period: 'Jun 2020 – Oct 2020',
		role: 'Software Engineer',
		company: 'Sinbad',
		location: 'Jakarta, ID (Hybrid)',
		description:
			"Built the foundation of the company's customer loyalty program as a brand new microservice. Optimized legacy codebase while keeping bugs at bay.",
		technologies: ['Adonis (V5)', 'FeathersJS']
	},
	{
		period: 'Aug 2019 – Apr 2020',
		role: 'Software Engineer',
		company: 'Ralali',
		location: 'Jakarta, ID',
		description:
			"Worked on the company's CMS and revamped an internal reporting feature to support background handling, enhancing stability and performance. Applied code standardization across the team.",
		technologies: ['PHP', 'Laravel', 'Lumen', 'Vue', 'Bulma', 'jQuery', 'MySQL', 'PostgreSQL']
	},
	{
		period: 'Oct 2018 – Jul 2019',
		role: 'Junior Developer',
		company: 'Berrybenka',
		location: 'Jakarta, ID',
		description:
			"Worked on the company's e-commerce site and CMS. Revamped background tasks from cron to RabbitMQ and Celery. Optimized frontend performance for CMS.",
		technologies: ['PHP', 'Laravel', 'CodeIgniter', 'JavaScript', 'Python']
	}
];

/* ─── Education ─── */
export const EDUCATION: Education = {
	institution: 'Gunadarma University',
	degree: 'B.S. Information Systems',
	period: '2014 – 2018',
	description:
		'Laboratory Assistant at Information Technology Laboratory from the 3rd term until graduation. Started web development with Python and Flask.'
};

/* ─── Tools ─── */
export const TOOLS: Tool[] = [
	{
		title: 'WhatsApp Click-to-Chat',
		description:
			'Generate a WhatsApp click-to-chat link from any phone number. Auto-strips non-numeric characters and formats to international format.',
		href: '/tools/whatsapp-click-to-chat',
		icon: '💬'
	},
	{
		title: 'Split Bill Calculator',
		description:
			'Split a bill among friends with per-item tagging, tax, and service charge. Save and share via URL.',
		href: '/tools/split-bill',
		icon: '🧾'
	}
];

/* ─── Navigation ─── */
export const NAVIGATION_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Contact', href: '/contact' }
] as const;

export const TOOLS_NAVIGATION_LINKS = TOOLS.map((tool) => ({
	label: tool.title,
	href: tool.href
}));
