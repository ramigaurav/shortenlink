---
title: shadcn UI Guidelines
description: Use shadcn UI components consistently and avoid custom UI components in this app.
---

# shadcn UI Guidelines

## Core rule

- All UI elements in this app should use shadcn UI components.
- Do not create or use custom UI components unless an existing shadcn component cannot satisfy the requirement.

## Component usage

- Prefer the app's existing `components/ui/` components, such as `Button`, and follow their established patterns.
- Use Tailwind utility classes sparingly and only for layout or small overrides, not as a substitute for shadcn structure.
- Keep UI code accessible, semantic, and consistent with the app’s design system.

## When to extend

- If a required UI pattern is not available, implement a minimal wrapper using existing shadcn primitives.
- Avoid introducing new runtime dependencies for UI styling or components.

## Agent guidance

- Before adding new UI markup, search for an existing shadcn component in `components/ui/`.
- Do not build custom button, card, input, or form components unless there is a strong, documented reason.
- Keep UI changes minimal and aligned with the current app style.
