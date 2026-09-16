---
title: Ledger Sync
summary: A reconciliation service that matches payment-provider settlements against internal ledger entries and flags the gaps.
order: 1
featured: true
year: 2025
tech: ["TypeScript", "PostgreSQL", "Node.js", "Docker"]
repo: https://github.com/dp-vijay/portfolio-sam
---

Finance was reconciling three payment providers by hand every Monday, in a
spreadsheet that had grown to 40 columns. It took most of a day and still missed
things.

## What I built

A service that pulls settlement files from each provider, normalises them into a
single shape, and matches them against ledger entries using a tiered strategy:
exact reference match first, then amount-and-date windows, then fuzzy matching
that a human confirms.

Anything unmatched lands in a review queue with both candidate records shown
side by side, so the finance team makes a judgement call instead of running a
search.

## Design decisions

- **Matching rules live in the database, not the code.** Providers change their
  file formats without much notice; a rule change should be a config update, not
  a deploy.
- **Every match records why it matched.** When a number is questioned six months
  later, the audit trail answers it without re-running anything.
- **Idempotent ingestion.** Files get re-sent constantly. Re-importing the same
  settlement is a no-op rather than a duplicate.

## Outcome

Monday reconciliation dropped from roughly six hours to about twenty minutes of
reviewing the exception queue. The first run also surfaced £11k of fees that had
been silently absorbed for two quarters.
