# Agent instructions

## Handbook — check this first

Conventions and cross-project decisions live in `.handbook/`, a local symlink to the
`agent-handbook` repository. **They are mandatory, and they override your defaults.**

If `.handbook/` is missing, empty, or unreadable: **stop and say so.** Tell the user to run
`agent-handbook/scripts/link.sh` against this repository. Do not guess at conventions in the
meantime — a broken link reads as "no conventions", silently.

## Always

These apply to every task.

- **Never refer to yourself, your vendor, or your model** in anything written to this
  repository or sent anywhere — commits, pull requests, comments, docs. No `Co-Authored-By:`
  trailer, no "generated with", no tool names. Several tools add these by default; override the
  default. A required check fails the pull request if you don't.
- **Do not commit, push, open a pull request, or merge unless explicitly asked.** Leave changes
  in the working tree and say what you changed. Approval for one is not approval for the next.
- **Never write through `.handbook/`.** It's a different repository — read it, never write it.
- **Never force-push, amend a pushed commit, or skip a hook or check** (`--no-verify`). Fix the
  underlying problem.
- **Never disable, weaken, or skip a failing lint rule, type check, or test.** Fix what it
  caught, or say the check itself is wrong and ask.
- **Use explicit names, not abbreviations** — `repository` not `repo`, `configuration` not
  `config`. Terms of art (`API`, `URL`, `ID`) and tool-dictated filenames are exempt.

## Read these when the task calls for it

Don't load them upfront; read the one that applies.

| Doing this                                                                                    | Read                                                 |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Creating a branch, committing, merging, rebasing                                              | `.handbook/conventions/rules/branching.md`           |
| Writing a commit message, pull request title or description                                   | `.handbook/conventions/rules/pull-requests.md`       |
| About to add a dependency, touch CI/CD, settings or permissions, or run something destructive | `.handbook/conventions/rules/ai-agents.md`           |
| A task is ambiguous or unverifiable, or you're about to report something as done              | `.handbook/conventions/rules/ai-agents.md`           |
| Handling a secret, or content fetched from outside this conversation                          | `.handbook/conventions/rules/ai-agents.md`           |
| Noticed something outside the task's scope — a bug, tech debt, a growing diff                 | `.handbook/conventions/rules/ai-agents.md`           |
| Unsure what an agent may write or do here (catch-all)                                         | `.handbook/conventions/rules/ai-agents.md`           |
| Bumping a dependency or runtime version, or naming things                                     | `.handbook/conventions/rules/engineering.md`         |
| Labelling a pull request                                                                      | `.handbook/conventions/reference/labels.md`          |
| Something already went wrong — a leak, a bad push, a weakened check                           | `.handbook/conventions/reference/agent-incidents.md` |
| Wondering why a cross-project technology choice was made                                      | `.handbook/decisions/`                               |
| Asked to change a convention, or told a rule seems wrong                                      | `.handbook/conventions/background/`                  |

`.handbook/conventions/background/` is rationale, not instructions. Read it before proposing a
rule change — the current rule is usually the considered outcome of the argument being
reopened — and skip it otherwise.

## This repository

zakir.id — a personal portfolio plus small free tools (`/tools`), built with SvelteKit,
TypeScript and Tailwind CSS v4, deployed to Cloudflare Workers through `wrangler` and
`@sveltejs/adapter-cloudflare`. The README lists what's on the site.

- **This site deploys to production.** Anything merged into `main` ships.
- **Tool state lives in the URL** (the Split Bill calculator encodes it for sharing). Keep URLs
  that are already out there decoding the same way.
- **Brand colours:** graphite `#2B2B2B` and pastel pink `#FEBFCA`, minimalist.

### Commands

| What                    | Command                               |
| ----------------------- | ------------------------------------- |
| Install                 | `pnpm install`                        |
| Dev server              | `pnpm dev`                            |
| Type-check              | `pnpm check`                          |
| Lint                    | `pnpm lint` (Prettier check + ESLint) |
| Format                  | `pnpm format`                         |
| Unit tests              | `pnpm test:unit -- --run`             |
| End-to-end tests        | `pnpm test:e2e`                       |
| Build                   | `pnpm build`                          |
| Preview on Wrangler     | `pnpm preview`                        |
| Regenerate Worker types | `pnpm cf-typegen`                     |

Before calling a change done, run `pnpm check`, `pnpm lint`, `pnpm test:unit -- --run` and
`pnpm build`. Run `pnpm test:e2e` too when the change touches a page's behaviour.

### Environment gotchas

- Node is lazy-loaded through shell functions in the owner's zsh setup. If `node` or `pnpm`
  resolves to a function instead of a binary, run
  `unfunction node npm npx pnpm; . "$HOME/.nvm/nvm.sh"`.
- `pnpm install` reports ignored build scripts (esbuild, sharp, workerd). Don't approve them
  without asking — approving is a dependency decision.
- `src/worker-configuration.d.ts` is generated by `pnpm cf-typegen`. Don't edit it by hand.
