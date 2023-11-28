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
