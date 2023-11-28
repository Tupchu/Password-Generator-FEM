import {
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
  generatePassword,
  calculatePercentScore,
  calculateStrength,
} from "./helpers";

test("should return a random lower case character", () => {
  const character = getRandomLower();
  expect(character).toEqual(character.toLowerCase());
});

test("should return a random upper case character", () => {
  const character = getRandomUpper();
  expect(character).toEqual(character.toUpperCase());
});

test("should return a random number between 1 and 10", () => {
  expect(getRandomNumber()).toBeLessThanOrEqual(10);
});

test("should return a random symbol", () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  expect(symbols).toContain(getRandomSymbol());
});

test("should return a generated password", () => {
  const generatedPassword = generatePassword(4, [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
  ]);

  expect(generatedPassword[0]).toEqual(generatedPassword[0].toUpperCase());
  expect(generatedPassword[1]).toEqual(generatedPassword[1].toLowerCase());
  expect(Number(generatedPassword[2])).toBeLessThanOrEqual(10);
  expect(generatedPassword[3]).toEqual(generatedPassword[3].toUpperCase());
});

describe("calculate percent score", () => {
  it("should return 0 if passwordlength or options equal 0", () => {
    expect(calculatePercentScore(0, 1)).toBe(0);
    expect(calculatePercentScore(1, 0)).toBe(0);
  });

  it("should return 1 if passwordlength is less than or equal to 5", () => {
    expect(calculatePercentScore(5, 4)).toBe(1);
    expect(calculatePercentScore(4, 3)).toBe(1);
    expect(calculatePercentScore(3, 2)).toBe(1);
    expect(calculatePercentScore(2, 1)).toBe(1);
    expect(calculatePercentScore(1, 4)).toBe(1);
  });

  it("should return the correct percentage", () => {
    expect(calculatePercentScore(12, 4)).toBe(100);
    expect(calculatePercentScore(12, 1)).toBe(62.5);

    // test scores where passwordlength is between 10 and 12
    expect(calculatePercentScore(10, 4)).toBe(87.5);
    expect(calculatePercentScore(10, 1)).toBe(50);
    expect(calculatePercentScore(11, 4)).toBe(87.5);
    expect(calculatePercentScore(11, 1)).toBe(50);

    // test scores where passwordlength is between 8 and 10
    expect(calculatePercentScore(8, 4)).toBe(75);
    expect(calculatePercentScore(8, 1)).toBe(37.5);
    expect(calculatePercentScore(9, 4)).toBe(75);
    expect(calculatePercentScore(9, 1)).toBe(37.5);

    // test scores where passwordlength is between 6 and 8
    expect(calculatePercentScore(6, 4)).toBe(62.5);
    expect(calculatePercentScore(6, 1)).toBe(25);
    expect(calculatePercentScore(7, 4)).toBe(62.5);
    expect(calculatePercentScore(7, 1)).toBe(25);

    expect(calculatePercentScore(-1, 1)).toBe(0);
    expect(calculatePercentScore(1, -1)).toBe(0);
  });
});

describe("calculate strength", () => {
  it("should return the correct strength level", () => {
    expect(calculateStrength(12, 4)).toBe(4);
    expect(calculateStrength(12, 3)).toBe(3);
    expect(calculateStrength(12, 2)).toBe(3);
    expect(calculateStrength(12, 1)).toBe(3);
    expect(calculateStrength(12, 0)).toBe(0);

    expect(calculateStrength(10, 4)).toBe(3);
    expect(calculateStrength(10, 1)).toBe(3);

    expect(calculateStrength(8, 4)).toBe(3);
    expect(calculateStrength(8, 1)).toBe(2);

    expect(calculateStrength(6, 4)).toBe(3);
    expect(calculateStrength(6, 1)).toBe(2);

    expect(calculateStrength(5, 4)).toBe(1);

    expect(calculateStrength(-12, 0)).toBe(0);
    expect(calculateStrength(20, -4)).toBe(0);
  });
});
