function secondLargest(arr) {
  if (arr.length == 0) {
    return "Array is empty!!";
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let array = [122, 324, 56, 78];
console.log(secondLargest(array)); // Output: 122
