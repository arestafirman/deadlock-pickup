import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "We're deadlocked: I wait for your signal, you wait for mine — after 9,412 cycles of nothing, I'm breaking protocol and saying hello first.";

if (LEAD.length < 1 || LEAD.length > 200) {
  throw new Error(
    `Entry length must be 1-200 characters, got ${LEAD.length}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LEAD, "utf8");
