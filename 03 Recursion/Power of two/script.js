function isPowerOfTwo(n) {
  if (n === 1) return true;
  else if (n % 2 != 0 || n < 1) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(4));

//Non recursive approach

function isPow(n) {
  if (n <= 1) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1
}

console.log(isPow(4))
