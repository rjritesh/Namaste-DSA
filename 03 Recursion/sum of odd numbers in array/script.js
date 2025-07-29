let array = [1, 2, 3, 4, 5];

function sum(nums) {
  if (nums === 0) {
    return array[nums];
  }

  if (array[nums] % 2 != 0) {
    return array[nums] + sum(nums - 1);
  } else {
    return sum(nums - 1);
  }
}

console.log(sum(array.length - 1));
