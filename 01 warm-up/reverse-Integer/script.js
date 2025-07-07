function reverseInteger(x) {
  let xcopy = x;
  let rev = 0;

  x = Math.abs(x);
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  
  if (xcopy <  0 ) {
    return -rev;
  } else {
    return rev;
  }
}

let n = 523;
console.log(reverseInteger(n));
