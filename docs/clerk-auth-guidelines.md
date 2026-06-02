---
title: Clerk Authentication Guidelines
description: Rules for handling Clerk authentication, protected routes, and modal sign-in/sign-up flows.
---

# Clerk Authentication Guidelines

## Core rules

- Use Clerk for all authentication. No other auth method may be used.
- Protect `/dashboard` as a server-side guarded route that requires a logged-in user.
- If an authenticated user requests `/`, redirect them to `/dashboard`.
- Always launch Sign In and Sign Up using Clerk modal flows.

## Route behavior

- `/dashboard` must only be accessible when the user is authenticated.
- `/` should behave as a public landing page for unauthenticated visitors.
- Authenticated visitors should not remain on `/`; they should be redirected to `/dashboard`.

## UI behavior

- Sign In and Sign Up actions must open Clerk modals.
- Do not build separate non-Clerk sign-in or sign-up pages.
- Keep authentication UI consistent with the existing app layout and components.

## Agent guidance

- When adding or changing auth routes, use Clerk helper components and server-side guards.
- Avoid introducing new auth libraries, custom session logic, or client-only redirects where server-side routing can enforce access.
- Keep implementation minimal, idiomatic, and aligned with the existing Next.js App Router conventions.
