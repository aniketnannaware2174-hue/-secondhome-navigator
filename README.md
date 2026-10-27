# SecondHome Navigator

A local-first MVP for preliminary planning of sustainable second homes in Western Maharashtra. The app brings project setup, preliminary site prompts, conceptual design exploration, an editable cost estimator, checklists, a dashboard, and a print-ready report into one browser-based planning space.

> All assessment outputs, design concepts and financial calculations are preliminary. Nothing verifies ownership, legal title, zoning, buildability, permissions, soil or flood conditions, market rates, contractor scope, rental occupancy, yield, ROI or income. Consult relevant local authorities and qualified professionals.

## Run locally

Requirements: Node.js 20+ and npm.

```sh
npm install
npm run dev
```

Open the local address printed by Vite. Production build and preview:

```sh
npm run build
npm run preview
```

Automated unit tests:

```sh
npm test
```

Optional Playwright browser tests (install browser binaries once with `npx playwright install`):

```sh
npm run test:e2e
```

## Features

- Project setup and editing with Zod validation, plot-area unit conversions, distinct land and built-up area, and local persistence.
- Preliminary rule-based plot guidance with explicit verification boundaries.
- Six filterable illustrative design concepts and project selection.
- Cost estimator with editable assumptions, live breakdown chart, target comparison, validation, save/reset and print actions.
- Locally saved development roadmap with notes and rental-readiness checklist.
- Current project dashboard and browser-print/PDF project summary.
- Testing & Quality area with a verification matrix, validation plan, blank feedback template and proposed Scrum plan.
- Optional fictional sample project.

## Architecture

- `src/App.tsx`: application views, navigation and reusable view components.
- `src/domain.ts`: project, concept and checklist domain data/types.
- `src/logic.ts`: area conversion, estimate calculations, validation, checklist progress and versioned localStorage operations.
- `src/logic.test.ts`: focused unit tests for the core calculations and storage behavior.
- `src/styles.css`: responsive styling and print rules.
- Vite + React + TypeScript; Tailwind CSS is configured alongside custom component styles. Recharts visualizes the cost breakdown; React Hook Form and Zod validate project setup.

Project data is stored in this browser under `secondhome-navigator:v1`. No user project information is transmitted to an external service. Clearing browser storage removes the saved project. There is no account, cloud sync, encryption, or multi-project library in this MVP.

## Cost assumptions and limitations

The formula is:

- Base construction = built-up area × assumed base rate.
- Subtotal = base + site development + utilities + professional fees + other allowances.
- Contingency = subtotal × contingency percentage ÷ 100.
- Indicative total = subtotal + contingency.

Default numbers are illustrative only, not verified market rates. The total excludes anything the user does not enter. It is not a contractor quotation or guarantee.

Area conversions use 1 acre = 43,560 sq ft and 1 acre = 40 guntha; 1 sq m ≈ 10.7639104167 sq ft. Plot-area conversions never represent permissible built-up area.

## Verification and validation

Run `npm test` for actual calculation, conversion, input-rule, checklist-progress and persistence tests. The Testing & Quality view documents cases that require manual UI/browser validation; those are not reported as passed by the automated suite. User validation has not been conducted. Use its sample tasks and blank feedback template with target landowners before claiming product-market fit or usability findings.

## Proposed Scrum development plan

This is a suggested plan, not a record of ceremonies that have occurred.

| Sprint | Goal and selected backlog | Demonstrable increment |
| --- | --- | --- |
| Sprint 1 | Foundation, responsive navigation and project setup (PB-01, PB-02) | Create/edit a project that survives refresh locally |
| Sprint 2 | Plot assessment and design explorer (PB-03, PB-04) | Save preliminary prompts and select concepts |
| Sprint 3 | Cost estimator and calculations (PB-05) | Edit assumptions, review correct total and breakdown |
| Sprint 4 | Roadmap, rental checklist, reports and testing (PB-06–PB-09) | Track readiness, print a report and run verification tests |

- **Sprint Planning:** agree a sprint goal, choose backlog items and plan the work.
- **Daily Scrum:** inspect progress toward the goal and adapt the next day's plan.
- **Sprint Review:** demonstrate the increment and gather stakeholder feedback.
- **Sprint Retrospective:** identify improvements to the team's process and quality.

Suggested product backlog: PB-01 project setup/navigation; PB-02 project creation/local persistence; PB-03 plot assessment; PB-04 design explorer; PB-05 cost estimator; PB-06 development roadmap; PB-07 rental checklist; PB-08 dashboard/report; PB-09 verification and usability improvements.

## Next validation steps

Test the six usability tasks in the Testing & Quality view with landowners and prospective second-home buyers in Western Maharashtra. In particular validate the problem hypothesis, comprehension of plot-vs-built-up area, clarity of estimate exclusions, helpfulness of the sequence, and whether users can explain what is and is not professionally verified.
