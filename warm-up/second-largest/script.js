// WAP to find the second largest element of an array--
// Approach--- You should have to maintain two variable - 1. secondLargest 2. largest and keeep on updating 
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if(arr[i] > secondLargest && arr[i] != largest){
      secondLargest = arr[i];
    }
  }
return secondLargest;
}

let array = [30, 34, 100, 20];
console.log("The 2nd largest element is : ", secondLargest(array));
