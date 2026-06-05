This repository uses `AGENTS.md` as the top-level manifest for LLM-driven agent behavior.

## Primary guidance

- Read this file first.
- Keep code changes minimal, idiomatic, and aligned with the existing Next.js + TypeScript + Tailwind stack.

## Project focus

- Next.js App Router project.
- TypeScript with strict checking.
- Tailwind CSS, shadcn-style UI components, and Clerk authentication.
- Drizzle ORM for database access.

## Project context

- This is a Next.js 16.2 app using the App Router.
- The repo is TypeScript-first with strict type checking enabled.
- Styling is Tailwind CSS via shadcn-style components and `cn` utility.
- Authentication is integrated with Clerk and data access uses Drizzle ORM.
- The main source folders are `app/`, `components/`, `lib/`, `db/`, and `public/`.

## Code style and architecture

- Default to server components; only mark a component with `"use client"` if it needs local state, effects (useEffect), event handlers, or browser-only APIs. Document the reason in the component file header.
- Use `const` and `let`; do not use `var`.
- Keep exports consistent with the surrounding file style.
- Use the `@/` alias for root-relative imports when appropriate.
- Keep UI components reusable, accessible, and semantic.
- Use the `cn()` helper from `lib/utils.ts` for Tailwind `className` composition.

## TypeScript and linting

- Keep code typesafe and avoid `any` except for explicit edge-case handling.
- Respect `tsconfig.json` settings and existing type patterns.
- Run `npm run lint` after edits if possible.
- Do not bypass lint rules with inline disables unless there is a strong, documented reason.

## Styling and UI

- Use Tailwind utility classes in JSX.
- Follow existing component patterns in `components/ui/`, especially `Button`.
- Avoid creating raw global CSS rules unless required for a new feature.

## Database and backend

- If modifying data access, preserve the Drizzle ORM patterns and existing schema design.
- Avoid introducing new raw SQL or alternative database layers.
- Keep business logic in clearly separated files and avoid moving logic into page components.

## File and docs conventions

- Only change files required to implement the request.
- Keep documentation clear and concise.
- Do not add or modify files outside the intended scope without explicit user approval.

## Verification

- Prefer small incremental changes and verify against existing repo behavior.
- When possible, validate with TypeScript and ESLint.
- If the user asks for feature work, favor correctness and readability over clever shortcuts.

## Behavior expectations for LLMs

- Be conservative: do not rewrite the entire app for a small fix.
- Explain assumptions only when needed and keep the implementation direct.
- When uncertain, choose the safer solution and describe any remaining unknowns.
