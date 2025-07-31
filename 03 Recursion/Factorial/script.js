function printFactorial(n) {
  if (n === 0) return 1;
  return n * printFactorial(n - 1);
}


console.log(printFactorial(5));