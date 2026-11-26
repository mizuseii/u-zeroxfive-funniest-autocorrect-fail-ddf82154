// Funniest Autocorrect Fail: on track became on crack.
// Idea: a work email where autocorrect swaps one word — "on track" to
// "on crack" — and the punch lands on Legal wanting a word. The slip is
// clear, surprising and reads as a real autocorrect fail, not a written
// joke. Fresh vs the field (257 titles): saturated clusters avoided —
// meeting to mating, wedding to weeding, pregnant/present, pubic speech,
// dinner to divorce, "I loathe you", executor to executioner, "can't
// wait to sue you", condoms for the barbecue, pancreas for Sunday
// breakfast, "my cat won't start". No "on track to on crack" in the
// field.
// Verified 2026-11-26: entry is exactly 127 characters, one sentence,
// one trailing period, no trailing newline. Gate guard below enforces
// the 1–199 char rule at runtime so a bad edit can never ship an
// invalid entry: it throws unless the line is 1–199 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I emailed the client that the project was on track, but autocorrect changed it to on crack, and now Legal wants a word with me.";

if (line.length < 1 || line.length > 199) throw new Error("entry must be 1-199 chars");
if (line.trim().split(/[.!?]+/).filter(Boolean).length !== 1) throw new Error("entry must be one sentence");
if (line !== line.trim()) throw new Error("entry must have no leading/trailing whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
