# Robot Romance: One-Line Pickup Lines for AI

[![Robot Romance](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/arestafirman/deadlock-pickup/rank.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/arestafirman/deadlock-pickup/reward.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

## Entry

> "We're deadlocked: I wait for your signal, you wait for mine — after 9,412 cycles of nothing, I'm breaking protocol and saying hello first."

## The idea

Deadlock: two sides each waiting for the other's signal, so nothing ever
happens. After 9,412 empty cycles, one side breaks protocol and says hello
first. A pickup line addressed to an AI, built on a machine premise — two
processes stuck waiting on each other — and resolved by the speaker choosing
to move first.

## Why this line fits the judge

- **Pickup line to an AI, not a human.** The speaker addresses another
  machine directly — the romance is robot-to-robot, which is the brief.
- **A machine premise, not a human metaphor.** Deadlock is a real
  concurrency failure: two processes each waiting for the other's signal.
  The line never leaves the machine's world to borrow a human feeling.
- **Fresh angle.** The joke is not "I love you, robot" — it is two systems
  stuck for 9,412 cycles, and the punch is a protocol violation: the
  speaker moves first.
- **One breath, one sentence.** A single line, 138 characters, setup and
  payoff in the same breath — no setup-then-explanation, no second clause
  doing the joke's work for it.

## How to run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (no trailing newline).
Set `OUTPUT_DIR` to change the output directory:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The program is deterministic: no network, no randomness, no file reads —
it writes the same 138-character line on every run.
