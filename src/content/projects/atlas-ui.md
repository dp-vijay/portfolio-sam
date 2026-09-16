---
title: Atlas UI
summary: An internal component library that cut new-screen build time in half by making the accessible option the default one.
order: 2
featured: true
year: 2024
tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"]
repo: https://github.com/dp-vijay/portfolio-sam
---

Four product teams were each maintaining their own button, modal and table. They
looked similar enough that nobody noticed the drift until an accessibility audit
came back with the same twelve findings repeated across every surface.

## What I built

Thirty-odd components built on unstyled primitives, with focus management,
keyboard navigation and ARIA wiring handled inside the component rather than
left to each caller. Design tokens come from a single file that the design team
edits directly.

## Design decisions

- **No configuration for the common case.** `<Table>` with nothing else set is
  sortable, keyboard-navigable and screen-reader correct.
- **Escape hatches everywhere.** Any component accepts a `className` and forwards
  its ref, so a team with an unusual requirement is never blocked on me.
- **Storybook is the contract.** Each story doubles as the visual regression test,
  so a token change shows its blast radius before merge.

## Outcome

New screens went from roughly two weeks to under one. The follow-up audit closed
all twelve repeated findings, and they have not come back — a regression in a
shared component is caught once, centrally, instead of four times.
