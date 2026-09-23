# zakir.id

Personal portfolio and tools site for Muhammad Zakir — Software Engineer.

Live at [zakir.id](https://zakir.id).

## What's here

- **Portfolio** — hero, about, skills, and experience sections.
- **Tools** ([`/tools`](https://zakir.id/tools)) — small free utilities:
  - **WhatsApp Click-to-Chat generator** — builds a `wa.me` link from a country code and phone number.
  - **Split Bill Calculator** — splits items, tax, and service charge across a group, with shareable state encoded in the URL.
- **Contact** — links to email, LinkedIn, and GitHub.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) via `wrangler` and `@sveltejs/adapter-cloudflare`
- [Vitest](https://vitest.dev/) for unit/component tests, [Playwright](https://playwright.dev/) for e2e tests
- [pnpm](https://pnpm.io/) as the package manager

## Developing

Install dependencies, then start the dev server:

```sh
pnpm install
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

```sh
pnpm build
```

Preview the production build locally with Wrangler:

```sh
pnpm preview
```

## Testing

```sh
pnpm test:unit    # unit/component tests (Vitest)
pnpm test:e2e     # end-to-end tests (Playwright)
pnpm test         # both
```

## Linting & formatting

```sh
pnpm lint    # prettier --check + eslint
pnpm format  # prettier --write
```

## Deployment

```sh
pnpm deploy
```

Builds the app and deploys it to Cloudflare Workers with `wrangler deploy`.
