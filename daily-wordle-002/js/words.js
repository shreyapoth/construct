const DAILY_WORDS = [
  "ALERT",
  "BLOOM",
  "CRISP",
  "DREAM",
  "EMBER",
  "FLARE",
  "GLASS",
  "HONEY",
  "IVORY",
  "JOLLY",
  "KNACK",
  "LUNAR",
  "MINTY",
  "NOBLE",
  "OCEAN",
  "PEARL",
  "QUILL",
  "ROBIN",
  "SOLAR",
  "TULIP",
  "UMBER",
  "VIVID",
  "WALTZ",
  "YOUTH",
  "ZESTY"
];

const EPOCH_UTC = Date.UTC(2026, 0, 1);
const DAY_MS = 24 * 60 * 60 * 1000;

function toUtcDateOnlyTimestamp(date) {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

function toIsoDay(date) {
  return date.toISOString().slice(0, 10);
}

export function getDailyPuzzle(date = new Date()) {
  const utcDateOnly = toUtcDateOnlyTimestamp(date);
  const dayOffset = Math.floor((utcDateOnly - EPOCH_UTC) / DAY_MS);
  const normalizedOffset = ((dayOffset % DAILY_WORDS.length) + DAILY_WORDS.length) % DAILY_WORDS.length;
  const word = DAILY_WORDS[normalizedOffset];

  return {
    dayKey: toIsoDay(new Date(utcDateOnly)),
    dayOffset,
    word,
    wordIndex: normalizedOffset
  };
}

export { DAILY_WORDS };
