let array = [1, 2, 3];

function sumOfElement(n) {
  if (n === 0) return array[n];

  return array[n] + sumOfElement(n - 1);
}


console.log(sumOfElement( array.length - 1));
