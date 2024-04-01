// This function generates the array of numbers between the two given in the examples
function generateArray(first, last) {
  let result = [];
  let start = first;
  while (start <= last) {
    result.push(start);
    start++;
  }
  return result;
}

// Examples of values
console.log(generateArray(2, 9));
console.log(generateArray(-2, 9));
