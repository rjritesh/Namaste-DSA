function BinarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

let arr = [-1, 0, 3, 5, 9, 12];
console.log(BinarySearch(arr, 9));
