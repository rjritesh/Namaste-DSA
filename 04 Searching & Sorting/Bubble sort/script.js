function bubbleSort(nums){
  let n = nums.length;
  for(let i = 0; i < n - 1; i++){
    for(j = 0; j < n - 1 - i; j++){
      if(nums[j] > nums[j + 1]){
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

let arr = [ 5, 2, 4, 1];
console.log(bubbleSort(arr));