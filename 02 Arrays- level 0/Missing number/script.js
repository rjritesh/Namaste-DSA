function missingNumber(nums){
  let n = nums.length;
  let totalSum = n * ( n + 1) / 2;
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum = sum + nums[i];
  }

  return totalSum - sum;
}

let array = [3,0,1,2,5,4];
console.log(missingNumber(array));