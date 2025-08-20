// function reverseString(s) {
//   let len = s.length;
//   let half = Math.floor(len / 2);

//   for (let i = 0; i < half; i++) {
//     let temp = s[i];
//     s[i] = s[len - 1 - i];
//     s[len - 1 - i] = temp;

//   }
//   return s;
// }

// let arr =["h", "e", "l", "l", "o"]
// console.log(reverseString(arr));

// Using while loop

function reverse(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
  return s;
}
let arr = ["h", "e", "l", "l", "o"];
console.log(reverse(arr));
