function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
}


let array = [2,2,1];
console.log(singleNumber(array));
