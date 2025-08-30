function merge(nums1, nums2, m, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

//Using extra space

function sort(arr1, arr2) {
  let i = 0;
  j = 0;
  let sorted = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    }
    else{
      sorted.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    sorted.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    sorted.push(arr2[j]);
    j++;
  }
  return sorted;
}

let a1 = [ 1,3,5,7];
let a2 = [2,4,8,9];
console.log((sort(a1, a2)));