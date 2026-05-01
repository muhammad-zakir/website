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

export interface Tool {
	title: string;
	description: string;
	href: string;
	icon: string;
}

export interface BillPerson {
	id: string;
	name: string;
}

export interface BillItem {
	id: string;
	name: string;
	price: number;
	assignedPersonIds: string[];
}

export interface BillState {
	people: BillPerson[];
	items: BillItem[];
	taxPercentage: number;
	servicePercentage: number;
	currencyCode?: string;
}
