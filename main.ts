import { mkdirSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast — one line, roasting a smart fridge that
// refuses to open after midnight. The program writes it to
// /output/entry.txt (gate: UTF-8, 1-200 characters, one line).
const ROAST =
  "My fridge locks at midnight like it's guarding state secrets — it's leftover pasta, not the nuclear codes.";

// Self-check against the competition gate: one line, 1-200 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...ROAST].length;
if (chars < 1 || chars > 200 || ROAST.includes("\n") || ROAST.trim().length === 0) {
  throw new Error(`ROAST fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
