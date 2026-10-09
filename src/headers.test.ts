import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// Cloudflare adds its Web Analytics script to pages it may change. `no-transform` makes it leave
// them alone, which also stops it compressing them: a deliberate trade, so keep both in mind.
describe('_headers', () => {
	const everyPage = readFileSync('_headers', 'utf8')
		.split(/\n(?=\S)/)
		.find((block) => block.startsWith('/*'));

	it('keeps Cloudflare from changing pages, so it cannot add its analytics', () => {
		expect(everyPage).toBeDefined();
		expect(everyPage).toMatch(/^\s+Cache-Control:.*\bno-transform\b/m);
	});

	it('still asks browsers to check for a newer page every time', () => {
		expect(everyPage).toMatch(/^\s+Cache-Control:.*\bmust-revalidate\b/m);
	});
});
