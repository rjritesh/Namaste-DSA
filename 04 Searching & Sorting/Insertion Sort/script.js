function sorting(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    let curr = nums[i];
    let prev = i - 1;
    while (prev >= 0 && nums[prev] > curr) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = curr;
  }
  return nums;
}

let arr = [7,4,5,2];
console.log(sorting(arr))
