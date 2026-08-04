---
name: analyze-feature-task
description: >-
  Analyzes a new feature, change, or bug request BEFORE any code is written and
  produces a ticket-ready analysis/planning document — the "why + how" writeup
  that walks through the codebase's existing logic, proposes a concrete
  solution, and breaks down exactly what work is needed in each part of the
  system it touches. Use this whenever the user describes a feature idea, bug,
  or change in plain text and wants it analyzed, scoped, or planned before
  building — "potrebujem analyzovat", "spravit analyzu", "ako by sme to mali
  spravit", "co vsetko je na to potrebne", "napis planning/analyzu pre novu
  feature", "pripravit navrh riesenia", "scope this out", "how should we build
  this", "write up a plan before we start". It never writes or edits
  application code, only the analysis document. Trigger this proactively
  whenever a new feature is being discussed and no analysis exists yet, even if
  the user doesn't say the word "analysis".
allowed-tools: Read, Grep, Glob, Write, Bash
---

# Analyze a feature/task before building it

The most expensive bugs and the messiest code both come from the same place:
building before understanding. This skill is the analysis pass that runs before
anyone touches a keyboard. Given a rough, free-text description of a
feature/change, it grounds itself in the real codebase — not guesses — and
produces a document a developer can paste straight into a ticket: what exists
today, why the change matters, what to build, and exactly what work each
affected part of the system needs.

The output is a planning document, never code. If the user wants the actual
implementation afterwards, that's a separate step — point them at whatever
scaffolding/implementation skill the project uses, or offer to build it.

## Golden rules

- **Read-only exploration.** This skill never edits or writes application
  code — only the analysis document itself. If it's tempting to "just fix this
  small thing" while exploring, resist it; a half-fix mixed into an analysis
  pass leaves the user with neither a clean diff nor a clean document.
- **Ground every claim in real code.** "There's probably already a validation
  layer for this" is a guess. Open the file and check. An analysis built on
  assumptions is worse than no analysis, because it looks authoritative while
  being wrong.
- **Mirror the codebase's own conventions.** Derive the architecture from the
  repo rather than from an assumed stack: read any `CLAUDE.md`, `README`,
  `CONTRIBUTING`, or architecture docs, look at the directory layout, and check
  linter/formatter config. Then reference the closest existing analogous
  feature as the pattern to follow, instead of describing generic
  framework-textbook patterns. "Follow the shape of `<that module>`" is far more
  useful to the implementer than a description of how the framework is usually
  used.
- **Surface unknowns instead of papering over them.** If the requirement is
  ambiguous, or the impact on some other part of the system is unclear, say so
  explicitly under "Open questions" rather than silently picking an
  interpretation and presenting it as settled.

## Step 0 — Get the task description

Take whatever free text the user hands over — a rough sentence, a paragraph, or
a copy-pasted message from a colleague. Don't demand a polished spec. If the
description is genuinely too vague to explore anything concrete (it names no
domain concept, entity, or screen at all), ask one short clarifying question —
otherwise proceed with what's given and flag assumptions in the output rather
than stalling on questions.

Then work out the scope: which parts of the system does this plausibly touch?
Don't assume a fixed set of layers — let the repo tell you. Depending on the
project that might be a server and a client, a single service, a CLI, a library
plus its docs, a data pipeline, infrastructure config, or some combination.
Default to covering everything the change plausibly reaches, and narrow only
when the description or the codebase makes it obviously one-sided (e.g. "add a
scheduled job to recompute X" usually doesn't touch a UI).

## Step 1 — Explore the real application logic

Before proposing anything, find out how the codebase already handles this area:

1. **Find the closest analogous feature.** Grep/glob for domain keywords from
   the task description across the whole repo. Look for existing modules,
   models, endpoints, screens, jobs, or components that touch the same domain,
   even loosely. Nine times out of ten a new feature is a variation on
   something that already exists — find that something.
2. **Read it end-to-end**, not just the filenames. Follow one complete path
   through the layers the repo actually has — from wherever a request or event
   enters, through the business logic, down to persistence or output, and back
   up to whatever surface presents it. Understanding the current shape is what
   makes the "proposed solution" section specific instead of generic.
3. **Check the project's own rules.** Look for `CLAUDE.md`, `README`,
   `CONTRIBUTING`, ADRs, or docs at the repo root and in the relevant
   subprojects. These often constrain the solution — layering rules, where
   business logic is allowed to live, transaction or error-handling
   conventions, reuse expectations, translation/localization requirements,
   testing requirements. A proposal that violates a documented rule wastes the
   implementer's time.
4. **Note what's genuinely missing.** If the feature needs something the repo
   has no pattern for yet — a new external integration, a new permission model,
   a new category of shared component, a new storage mechanism — call it out
   explicitly. That's a much bigger unknown than a feature that's a clean
   variation on existing code, and it should change how the work is estimated.

**If no codebase is actually reachable** (no folder connected, or the searches
turn up no source at all): do not invent plausible-sounding file, module, or
endpoint names and present them as if they were found. Write the analysis
clearly labeled as an **unverified hypothesis** — reason from the task
description and general domain knowledge only, flag every specific as an
assumption, and list "confirm against the real codebase" as the first open
question. A confidently-wrong analysis is more dangerous than an
honestly-incomplete one.

## Step 2 — Write the analysis

Produce a single markdown document using the structure below. Keep each section
tight — a developer should be able to read the whole thing in a couple of
minutes, then reach for the referenced files if they want depth.

```markdown
# [Feature name] — Analysis & Planning

## Summary
One or two sentences: what is being built, in plain language.

## Why
The business/user reason this is needed. What problem it solves or what it
unblocks. If the task description already states this, sharpen it rather than
repeating it verbatim.

## Current logic
What exists today that's relevant. Name the actual modules/components/files
explored in Step 1, and briefly describe how they currently behave. This is
what grounds the rest of the document in reality instead of assumption.

## Proposed solution
The recommended approach, and briefly why — including any alternative
considered and rejected, if one came up. Should read like a decision, not a
menu of options; the developer implementing this shouldn't have to guess which
path was intended.

## What needs to change
A concrete, file-level breakdown of the work, organized by the parts of the
system this actually touches. Name the sections after the repo's own structure
rather than a fixed template — whatever fits the change, e.g. "Server", "Web
client", "Shared types", "Database", "Background jobs", "CLI", "Infra",
"Public API". For each item, say what's new versus what's modified, and
reference the closest existing example as the pattern to follow. Note what can
be reused as-is versus what is genuinely new.

## Impact and migration
Anything that ripples outward: data migrations, breaking API changes, feature
flags, config or environment variables, deployment ordering, backwards
compatibility for existing clients or stored data. Omit this section if the
change is genuinely self-contained.

## Testing
What needs to be verified and at what level, focusing on the cases that would
actually catch a mistake here — not a generic "add unit tests". Follow whatever
testing conventions the repo already has.

## Open questions / risks
Anything ambiguous, any edge case not covered by the task description, and any
part of the system whose behavior under this change isn't fully clear yet. It's
better to list five real open questions than to silently resolve them.

## Acceptance criteria
A short checklist of what "done" looks like, written so it can go straight into
a ticket.
```

Adjust the "What needs to change" subsections to match the actual shape of the
project — drop sections that don't apply, add ones that do. A rigid template
applied to a project it doesn't fit produces empty headings, which read as
sloppy and train the reader to skim past the sections that do matter.

## Step 3 — Deliver it

Write the document to a markdown file and tell the user where it is, so they
can paste it into their tracker of choice. Name the file after the feature
(kebab-case) rather than something generic like `analysis.md`, so several
analyses can coexist.

If a file-delivery tool is available in this environment (e.g. `SendUserFile`),
send the file as well as writing it — the user usually wants to read it
immediately rather than go looking for it.

Then give a short spoken summary — three or four sentences covering the
proposed approach and the biggest open question. Don't re-narrate the whole
document; the point of writing it down is that it doesn't need to be repeated.
