export interface SocialLink {
	label: string;
	value: string;
	href: string;
	iconPath: string;
}

export interface SkillCategory {
	title: string;
	icon: string;
	skills: string[];
}

export interface Experience {
	period: string;
	role: string;
	company: string;
	location: string;
	description?: string;
	highlights?: string[];
	technologies?: string[];
}

export interface Education {
	institution: string;
	degree: string;
	period: string;
	description?: string;
}

export interface Project {
	title: string;
	description: string;
	href: string;
	technologies: string[];
}
