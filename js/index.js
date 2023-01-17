import strictEquals from "./functions/strictEquals.js";

console.log(
  [
    "| valueA  | valueB | RESULT |                   |",
    "| ------- | ------ | -------------------------- |",
    `| 1       | 1      | ${strictEquals(1, 1)}   |                   |`,
    `| NaN     | NaN    | ${strictEquals(NaN, NaN)}   | // Rule Exception |`,
    `| 0       | -0     | ${strictEquals(0, -0)}  | // Rule Exception |`,
    `| -0      | 0      | ${strictEquals(-0, 0)}  | // Rule Exception |`,
    `| 1       | "1"    | ${strictEquals(1, "1")}  |                   |`,
    `| true    | false  | ${strictEquals(true, false)}  |                   |`,
    `| false   | false  | ${strictEquals(
      false,
      false
    )}   |                   |`,
    `| "Water" | "oil"  | ${strictEquals(
      "Water",
      "oil"
    )}  |                   |`,
  ].join("\n")
);
