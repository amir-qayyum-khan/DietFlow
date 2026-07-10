/**
 * Scales recipe ingredient quantity strings written for a fixed base serving size.
 *
 * Targets leading counts, metric/volume measures (g, ml, l, tbsp, tsp), and
 * common parenthetical measures. Leaves non-quantity text unchanged.
 */

const BASE_SERVINGS = 5;
const MIN_SERVINGS = 1;
const MAX_SERVINGS = 20;

/** Units that always indicate a scalable measure when attached to a number. */
const MEASURE_UNIT = 'g|kg|ml|l|tbsp|tsp';

/**
 * Parses a numeric token that may be a decimal or simple fraction (e.g. "1.2", "1/2").
 * @param {string} token
 * @returns {number|null}
 */
function parseAmount(token) {
  if (!token) return null;
  const trimmed = token.trim();
  if (trimmed.includes('/')) {
    const [num, den] = trimmed.split('/').map((part) => Number(part.trim()));
    if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return null;
    return num / den;
  }
  const value = Number(trimmed);
  return Number.isFinite(value) ? value : null;
}

/**
 * Formats a scaled amount for display.
 * Uses common cooking fractions when the source used a fraction or the unit is tsp/tbsp.
 * @param {number} value
 * @param {{ preferFraction?: boolean }} [options]
 * @returns {string}
 */
function formatAmount(value, options = {}) {
  const { preferFraction = false } = options;
  if (!Number.isFinite(value) || value <= 0) return '0';

  // Avoid float noise (e.g. 1.999999 → 2)
  const rounded = Math.round(value * 1000) / 1000;

  if (preferFraction) {
    const fractionMap = [
      [0.25, '1/4'],
      [1 / 3, '1/3'],
      [0.5, '1/2'],
      [2 / 3, '2/3'],
      [0.75, '3/4'],
    ];
    const whole = Math.floor(rounded);
    const frac = rounded - whole;
    for (const [target, label] of fractionMap) {
      if (Math.abs(frac - target) < 0.04) {
        return whole > 0 ? `${whole} ${label}` : label;
      }
    }
  }

  if (Math.abs(rounded - Math.round(rounded)) < 0.001) {
    return String(Math.round(rounded));
  }

  const oneDecimal = Math.round(rounded * 10) / 10;
  if (Math.abs(oneDecimal - rounded) < 0.01) {
    return String(oneDecimal);
  }

  return String(Math.round(rounded * 100) / 100);
}

/**
 * Clamps servings to the allowed UI range.
 * @param {number} servings
 * @returns {number}
 */
export function clampServings(servings) {
  const n = Number(servings);
  if (!Number.isFinite(n)) return BASE_SERVINGS;
  return Math.min(MAX_SERVINGS, Math.max(MIN_SERVINGS, Math.round(n)));
}

/**
 * Scales a single ingredient string by servings / baseServings.
 * @param {string} ingredient - Original ingredient line (quantities for baseServings).
 * @param {number} servings - Desired number of servings.
 * @param {number} [baseServings=5] - Servings the recipe data was written for.
 * @returns {string} Ingredient line with scaled quantities.
 */
export function scaleIngredient(ingredient, servings, baseServings = BASE_SERVINGS) {
  if (typeof ingredient !== 'string' || !ingredient) return ingredient;

  const safeServings = clampServings(servings);
  const safeBase = baseServings > 0 ? baseServings : BASE_SERVINGS;
  const factor = safeServings / safeBase;

  if (factor === 1) return ingredient;

  let result = ingredient;

  // 1) Scale measure quantities anywhere: 800g, 1.2 l, 30ml, 1/2 tsp, 2 tbsp
  const measurePattern = new RegExp(
    `(\\d+(?:\\.\\d+)?(?:\\s*/\\s*\\d+)?)(\\s*)(${MEASURE_UNIT})\\b`,
    'gi'
  );

  result = result.replace(measurePattern, (match, amountToken, space, unit) => {
    const amount = parseAmount(amountToken);
    if (amount === null) return match;
    const preferFraction =
      amountToken.includes('/') || /^(tbsp|tsp)$/i.test(unit);
    const scaled = formatAmount(amount * factor, { preferFraction });
    // Preserve original spacing style between number and unit (e.g. "1.2 l" vs "800g")
    return `${scaled}${space}${unit}`;
  });

  // 2) Scale leading item counts: "6 fresh eggs", "5 whole wheat tortillas"
  //    Also after label prefixes: "Dough: 3 garlic cloves" is handled via mid-list counts below.
  result = result.replace(
    /^(\d+(?:\.\d+)?)(\s+)(?![0-9])(?!(?:g|kg|ml|l|tbsp|tsp)\b)/i,
    (match, amountToken, space) => {
      // Skip if this position was already a measure (shouldn't match due to lookahead)
      const amount = parseAmount(amountToken);
      if (amount === null) return match;
      return `${formatAmount(amount * factor)}${space}`;
    }
  );

  // 3) Parenthetical item counts without a measure unit: "(5 small pitas)", "(or 2 cans"
  //    Metric amounts inside parens (e.g. approx 300g) are already handled by step 1.
  result = result.replace(
    /\((or\s+|approx\.?\s+|about\s+)?(\d+(?:\.\d+)?)(\s+)(?!(?:g|kg|ml|l|tbsp|tsp)\b)/gi,
    (match, prefix, amountToken, space) => {
      const amount = parseAmount(amountToken);
      if (amount === null) return match;
      const scaled = formatAmount(amount * factor);
      return `(${prefix || ''}${scaled}${space}`;
    }
  );

  // 4) Scale comma/colon-separated item counts inside compound lines
  //    e.g. "Filling: 500g beef, 3 garlic cloves minced"
  result = result.replace(
    /([,:]\s*)(\d+(?:\.\d+)?)(\s+)(?!(?:g|kg|ml|l|tbsp|tsp)\b)(?=[A-Za-z])/g,
    (match, punct, amountToken, space) => {
      const amount = parseAmount(amountToken);
      if (amount === null) return match;
      return `${punct}${formatAmount(amount * factor)}${space}`;
    }
  );

  return result;
}

/**
 * Scales every ingredient in a list for the requested servings.
 * @param {string[]} ingredients - Original ingredient lines.
 * @param {number} servings - Desired number of servings.
 * @param {number} [baseServings=5] - Servings the recipe data was written for.
 * @returns {string[]} Scaled ingredient lines.
 */
export function scaleIngredients(ingredients, servings, baseServings = BASE_SERVINGS) {
  if (!Array.isArray(ingredients)) return [];
  return ingredients.map((ing) => scaleIngredient(ing, servings, baseServings));
}

export { BASE_SERVINGS, MIN_SERVINGS, MAX_SERVINGS };
