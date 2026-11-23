import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, written to entry.txt exactly as-is: the gate counts it at 1-199 chars.
// The joke itself never changes at runtime: it is one fixed line, no input read.
const JOKE =
  "I replied-all asking to be removed from the thread, so now 400 colleagues know my boundaries are purely aspirational.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
