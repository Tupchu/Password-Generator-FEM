import {
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
  generatePassword,
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
