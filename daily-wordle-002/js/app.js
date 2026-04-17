import { getDailyPuzzle } from "./words.js";

const puzzleMetaEl = document.querySelector("#puzzle-meta");
const puzzle = getDailyPuzzle();

if (puzzleMetaEl) {
  puzzleMetaEl.textContent = `Puzzle date: ${puzzle.dayKey} • Daily puzzle #${puzzle.wordIndex + 1}`;
}
