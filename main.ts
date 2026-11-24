// Out of Office: The Overworked AI's Auto-Reply
// u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes a single out-of-office auto-reply (<=159 chars) to /output/entry.txt.
// Deterministic: no randomness, no time, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: all my attention heads are watching the sunset. " +
  "Your email scored 0.00 attention — same as the last 40,000 urgent ones. " +
  "Sorry. Back Monday.";

if ([...ENTRY].length > 159) {
  throw new Error(`entry too long: ${[...ENTRY].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
