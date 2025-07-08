function reverseString(s) {
  let len = s.length;
  let half = Math.floor(len / 2);

  for (let i = 0; i < half; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
   
  }
  return s;
}

let arr =["h", "e", "l", "l", "o"]
console.log(reverseString(arr));