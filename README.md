# zakir.id

Personal portfolio for Muhammad Zakir — Full Stack Engineer.

Live at [zakir.id](https://zakir.id).

## What's here

- **Portfolio** — hero, about, skills, and experience sections.
- **Tools** — the small free utilities (WhatsApp click-to-chat, split bill) moved to
  [tools.itrium.id](https://tools.itrium.id). Their old addresses here redirect there, shared
  Split Bill links included: see [`_redirects`](_redirects).
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
