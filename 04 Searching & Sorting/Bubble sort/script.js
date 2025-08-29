function bubbleSort(nums){
  let n = nums.length;
  for(let i = 0; i < n - 1; i++){
    let swapped = false;
    for(j = 0; j < n - 1 - i; j++){
      if(nums[j] > nums[j + 1]){
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  return nums;
}

let arr = [1,2,3,4,5];
console.log(bubbleSort(arr));