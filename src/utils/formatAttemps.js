export const listWordles = (attemptedWordles) =>
  attemptedWordles
    .filter((attemptedWordles) => attemptedWordles !== undefined)
    .map((attemptedWordles) =>
      attemptedWordles.map((wordle) => wordle.key).join('')
    );
