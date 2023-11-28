export function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

export function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

export function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

export function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

export function generatePassword(passwordLength: number, options: string[]) {
  const typeCount = options.length;
  let currCount = 1;

  const typeArr = options.map((option) => {
    if (option.includes("Uppercase")) return "Upper";
    if (option.includes("Lowercase")) return "Lower";
    if (option.includes("Numbers")) return "Number";
    if (option.includes("Symbols")) return "Symbol";
  });

  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += getConfigType(typeArr[currCount - 1]);
    currCount++;
    if (currCount > typeCount) {
      currCount = 1;
    }
  }

  return generatedPassword;
}

function getConfigType(type: string | undefined) {
  switch (type) {
    case "Upper":
      return getRandomUpper();
    case "Lower":
      return getRandomLower();
    case "Number":
      return getRandomNumber();
    case "Symbol":
      return getRandomSymbol();
    default:
      break;
  }
}

export function calculatePercentScore(
  passwordLength: number,
  options: number
): number {
  if (options <= 0 || passwordLength <= 0) return 0;
  if (passwordLength <= 5) return 1;

  let score = options;

  if (passwordLength >= 12) {
    score += 4;
  } else if (passwordLength >= 10 && passwordLength < 12) {
    score += 3;
  } else if (passwordLength >= 8 && passwordLength < 10) {
    score += 2;
  } else if (passwordLength >= 6 && passwordLength < 8) {
    score += 1;
  }

  return (score / 8) * 100;
}

export function calculateStrength(
  passwordLength: number,
  options: number
): number {
  const percentScore = calculatePercentScore(passwordLength, options);

  if (percentScore === 100) {
    return 4;
  } else if (percentScore >= 50 && percentScore < 100) {
    return 3;
  } else if (percentScore >= 25 && percentScore < 50) {
    return 2;
  } else if (percentScore > 0 && percentScore < 25) {
    return 1;
  }

  return 0;
}
