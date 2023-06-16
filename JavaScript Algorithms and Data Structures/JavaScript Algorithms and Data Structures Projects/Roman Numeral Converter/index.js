function convertToRoman(decimal) {
  const decimalValues = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];
  const romanNumerals = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];

  let roman = '';
  for (let i = 0; i < decimalValues.length; i++) {
    while (decimal >= decimalValues[i]) {
      roman += romanNumerals[i];
      decimal -= decimalValues[i];
    }
  }

  return roman;
}
console.log(convertToRoman(36));