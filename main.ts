import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan forecaster voice: numbers and wind speed first, then the cloud stalking Mrs. Aldous since 1987.
const entry = "Widdershins: 12 degrees, winds from the north at 40 miles an hour, and one cloud that has been following Mrs. Aldous since 1987.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
