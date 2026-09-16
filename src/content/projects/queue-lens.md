---
title: Queue Lens
summary: A small observability tool that makes background-job backlogs visible before they turn into a customer-facing incident.
order: 3
featured: true
year: 2024
tech: ["Python", "FastAPI", "Redis", "Preact"]
repo: https://github.com/dp-vijay/portfolio-sam
---

We found out about job queue backups from customers. The dashboards tracked
throughput, which stays healthy right up until the moment it does not.

## What I built

A sampler that records queue depth and job age every few seconds, and a single
page that plots both. The useful signal turned out to be the age of the oldest
waiting job — throughput looks fine while a poison message quietly blocks a
partition.

## Design decisions

- **Oldest-job-age as the primary metric.** It rises the moment work stops
  draining, which is minutes to hours before throughput reflects it.
- **Fixed retention, no storage growth.** Samples roll into one-minute buckets
  after an hour and are dropped after a week. The whole thing fits in Redis.
- **One page, no login.** It runs on the internal network. Anything more would
  have meant it never shipped.

## Outcome

Three incidents caught before customers noticed in the first month. The alert is
a single threshold on oldest-job-age, which has held without tuning since.
