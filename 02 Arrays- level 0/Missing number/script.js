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