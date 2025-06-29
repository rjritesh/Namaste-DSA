// function searchVal(nums) {
//   let arr = [14, 67, 30, 12, 90];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == nums) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(searchVal(67));


// function countNegative(arr){
//   let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       count++;
//     }
//   }
//   return count;
// }

// let array = [12,-9,-4,87,45,-34,-56,9,-566];
// console.log(countNegative(array));




function largestElem(array) {
  let largest = -Infinity;
  for(let i = 0; i < array.length; i++){
    if(array[i] > largest){
      largest = array[i];
    }
  }
  return largest;
}

let arr = [12,-90,67,40,-2];
console.log("the largest element of array is : ", largestElem(arr));