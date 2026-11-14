// ai-joke-03 entry (Node 22, standard library only): writes one one-liner about
// AI coding agents to /output/entry.txt. No trailing newline: the judge reads
// exactly the bytes written. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The joke is a fixed string, so both runs of the program write identical bytes.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const JOKE =
  "My AI agent reviews my code now. Its only comment: 'I would have written this differently.' It wrote it.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
