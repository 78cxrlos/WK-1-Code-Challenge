// This function checks wheteher the numbers are prime or not
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function filterPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
  }
  
  // Examples of values
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = filterPrimeNumbers(numbers);
  console.log(primeNumbers); 