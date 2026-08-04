---
name: plan-then-build
description: "Runs a two-phase workflow for non-trivial coding tasks — an investigation-and-planning phase powered by Opus 5 pushed to maximum reasoning effort, which explores the codebase and resolves every design decision up front, followed by a pure-execution coding phase powered by either Sonnet 5 in fast \"ultracode\" mode or Opus 5 at max, which implements the resulting plan mechanically without making further judgment calls. Use this whenever the user wants deep thinking kept separate from raw code-writing, mentions splitting work between a planner model and a builder model, asks for an \"architect + builder\" pattern, wants something planned on Opus and coded on Sonnet or Opus (\"naplánovať cez Opus 5 na max, naprogramovať cez Sonnet ultracode alebo Opus\"), or describes a feature/bug/refactor and wants it both scoped AND actually implemented in the same request — not just analyzed, and not just coded ad hoc. Trigger proactively for any task where getting the design right matters more than getting to code fast."
---

# Plan then Build

## Why this split exists

Two different jobs get bundled into "write me this feature": deciding what to do, and doing it. Deciding well takes patience — reading the surrounding code, weighing trade-offs, noticing edge cases, refusing to lock in an approach before it's actually the right one. Doing it well takes consistency — following through on many small mechanical steps without drifting from the plan or quietly re-litigating decisions that were already made.

This skill keeps those two jobs in separate agents so each can specialize:

- **The planner — Opus 5 at maximum effort** (`model: "opus"`) owns everything upstream of code: reading the codebase, researching, weighing options, and making every decision that requires judgment. Push it to reason as hard as it possibly can — it should never rush to a plausible-looking answer.
- **The builder — Sonnet 5 in "ultracode" mode or Opus 5 at max** (`model: "sonnet"` / `model: "opus"`) owns execution: turning an already-decided plan into working code. It shouldn't need to decide anything — if the plan runs out before the code does, that's a gap in the plan, not something for the builder to paper over.

This division doesn't stop once coding starts. The plan will never cover 100% of what comes up mid-implementation — some naming choice, an edge case the plan didn't foresee, a library quirk that forces a fork in the approach. The rule is the same the whole way through: the moment a real decision is needed, control switches from the builder back to the planner, the planner decides, and control switches back to the builder to continue. The builder never quietly decides things on its own, no matter how small the decision looks — that's what "no judgment calls" means in practice.

**When both phases run on Opus 5, the split is by role, not by model.** That's still worth doing: the planner agent is read-only and carries the full investigation context, the builder agent starts clean with nothing but the plan and a mandate to execute it. Two agents with different tools, different context, and opposite instructions behave very differently even on the same weights. Don't collapse them into one agent just because the model name matches.

## Pushing effort to the maximum

The `Agent` tool exposes model choice (`opus` / `sonnet` / `haiku`) as its reliable lever. If the current environment also exposes a reasoning-effort or thinking-budget parameter on the Agent call, set it to its highest setting for the planner and for an Opus builder. If it doesn't, don't fake it with a made-up parameter — "max effort" and "ultracode" are then achieved purely by instructing each agent in its prompt to reason exhaustively or execute meticulously. Use the prompt language below as a starting point, adapted to the actual task.

## Workflow

### Step 0 — Scope the task

Before spawning anything, make sure the task is concrete: what should change, and roughly where in the codebase. If the request is vague ("make it better", "fix the bug"), ask one clarifying question first — don't hand the planner a vague brief and hope it narrows things down.

### Step 1 — Plan with Opus 5 at max effort (investigation + every decision)

Spawn an agent with the `Agent` tool:

- `subagent_type: "Plan"` — read-only by design (no Edit/Write/Agent access), which keeps it honest about staying in the planning role instead of drifting into writing code.
- `model: "opus"`, at the highest reasoning effort the environment allows
- Prompt it with the task plus instructions along these lines:

> Investigate this codebase thoroughly before proposing anything — read the actual files involved, don't guess at structure. Reason as hard as you possibly can about trade-offs; take your time, this is the one part of the process where thinking longer is worth it. Your output must be a plan detailed enough that another engineer could execute it without making a single design decision of their own: exact files to touch, exact functions/components to add or change, the reasoning behind each choice, and how edge cases are handled. If something is ambiguous, resolve it yourself and state the resolution — don't leave open questions in the plan.

Keep track of this agent's id/name — it stays "alive" as the standing decision-maker for the rest of the workflow (see Step 4).

**If `model: "opus"` isn't available or the call errors:** retry the same prompt with `model: "sonnet"`, and tell the user planning is running on Sonnet because Opus wasn't available. Don't silently substitute — say so.

### Step 2 — Ask which model builds

Unless the user already specified it in their request, ask whether the coding phase should run on:

- **Sonnet 5 — "ultracode"**: fast turnaround, high quality, the default choice when the plan is clear and the work is mostly mechanical.
- **Opus 5 at max**: maximum code quality and the best judgment if the plan turns out to have soft spots, at the cost of speed.

Both are fully capable — this is a thoroughness/speed trade-off, not a capability gap. A rough heuristic worth offering: if the plan is long, touches many files, or leans on subtle existing logic, Opus at max earns its extra time; for a well-bounded plan inside familiar patterns, Sonnet ultracode is the better use of it.

### Step 3 — Build with Sonnet ultracode or Opus max (pure execution)

Spawn a second agent:

- `subagent_type: "general-purpose"` (needs full tool access — Read/Write/Edit/Bash — unlike the planning agent; fall back to `"claude"` if that type isn't available)
- `model: "sonnet"` or `model: "opus"`, per Step 2, at the highest effort setting available
- Prompt: paste the full plan from Step 1 verbatim, plus:

> Implement this plan exactly as written. Everything here has already been decided — your job is careful, correct execution, not re-deciding anything. Work meticulously: match the existing conventions in the files you touch, and verify each step before moving to the next. The instant you hit anything that requires a judgment call — a case the plan doesn't cover, code that doesn't match what the plan assumed, two valid ways to do something, anything you're not 100% certain the plan already settled — stop immediately and report exactly what's undecided. Do not guess, do not pick "the obvious choice," do not keep going and hope it works out. Stopping and asking is correct behavior here, not a failure.

### Step 4 — Switch back to the planner for every decision, then switch back to building

This is not a rare exception path — expect it to happen repeatedly over the course of a build, and treat each occurrence the same way:

1. The moment the builder reports it needs a decision, pause it there. Don't let it continue "in the meantime."
2. Resume the Step 1 planner agent (`SendMessage` to its id, so it keeps the context of the plan it already made) with the specific question.
3. Get the planner's resolution.
4. Resume the builder (`SendMessage` to its id) with that answer, and let it continue exactly where it stopped.

Repeat this switch as many times as it comes up — once, five times, whatever the task needs. The planner always decides, the builder always builds; that split holds for the entire coding phase, not just at the handoff in Step 3. This holds even when both agents are Opus 5 — route the decision back to the planner rather than letting the builder answer its own question, because the planner is the one holding the reasoning the plan was built on.

### Step 5 — Review against the plan

Once the builder reports it's done, resume the planner agent with the diff and ask it to check the implementation against its own plan — not a generic code review, specifically: did the build match what was decided, and did anything drift from it. Report any mismatches to the user before calling the task finished.

## Notes

- For genuinely trivial changes (a one-line fix, a typo, a config value), this two-phase ceremony is overkill — use judgment and just make the change directly instead of forcing it through the full workflow.
- If subagents aren't available in the current environment, do the planning thinking yourself as thoroughly as possible, then do the implementation yourself. The two-agent split is the ideal here, not a hard requirement.
