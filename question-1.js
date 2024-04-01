// This function takes in a string and swaps the cases of the letters
function caseSwap(str) {
  let result = "";
  for (let base = 0; base < str.length; base++) {
    const sentense = str[base];
    if (
      // This if statement checks the case of the sentense and swaps it
      sentense === sentense.toUpperCase()
    ) {
      result += sentense.toLowerCase();
    } else {
      result += sentense.toUpperCase();
    }
  }
  return result;
}

// Example of sentense:
const input = "The Quick Brown Fox";
const output = caseSwap(input);
console.log(output);
