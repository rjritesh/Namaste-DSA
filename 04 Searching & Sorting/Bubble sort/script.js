function bubbleSort (nums){
  let n = nums.length;
  for(let i = 0; i < n ; i++){
    let swapped = false;
    for(let j = 0; j < n; j++){
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

let arr = [ 13, 46, 24, 52, 20,9];
console.log(bubbleSort(arr));