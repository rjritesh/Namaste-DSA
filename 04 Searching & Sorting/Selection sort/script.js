function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }
  return nums;
}

let arr = [ 64,25, 12, 22, 11]
console.log(selectionSort(arr));
