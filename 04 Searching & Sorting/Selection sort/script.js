function sort(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (i != min) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
}

let arr = [14,5,1];
console.log(sort(arr))