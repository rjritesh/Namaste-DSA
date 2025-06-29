// Program: Search for a number in an array and print its index if found. If the number is not found, print -1
function searchVal(nums) {
  let arr = [14, 67, 30, 12, 90];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == nums) {
      return i;
    }
  }
  return -1;
}
console.log(searchVal(9));

//Write a function that returns the number of negative numbers in an array.

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let array = [12, -9, -4, 87, 45, -34, -56, 9, -566];
console.log(countNegative(array));

//Write a function that returns the largest number in an array.

function largestElem(array) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

let arr = [12, -90, 67, 40, -2];
console.log("the largest element of array is : ", largestElem(arr));

//Write a function that returns the smallest number in an array.

function smallestElem(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let myArr = [12, -90, 67, 40, -2];
console.log("the smallest element of array is : ", smallestElem(myArr));