//Problem Statement:
// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

// Requirements:
// Handles both positive and negative integers.
// Return falsefor negative numbers (not Palindromes).

function isPallindrome(num) {
  let reverse = 0;
  let numCopy = num;
  while (num > 0) {
    if(num < 0){
      return false;
    }
    let remainder = Math.floor(num % 10);
    reverse = (reverse * 10) + remainder;
    num = Math.floor(num / 10);
  }
return reverse === numCopy
}

let n = 121;
console.log(isPallindrome(n));
