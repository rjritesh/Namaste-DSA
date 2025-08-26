// function missingNumber(nums){
//   let n = nums.length;
//   let totalSum = n * ( n + 1) / 2;
//   let sum = 0;
//   for(let i = 0; i < n; i++){
//     sum = sum + nums[i]
//   }

//   return totalSum - sum;
// }

// let array = [3,0,1,2,5,4];
// console.log(missingNumber(array));

function missingNumber (nums){
  nums.sort((a,b)=> a- b);
  for(let i = 0; i < nums.length; i++){
    if(nums[i] != i){
      return i;
    }
  }
  return nums.length
}
let arr = [3, 0, 1]
console.log(missingNumber(arr))