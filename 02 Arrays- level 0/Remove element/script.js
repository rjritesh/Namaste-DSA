//Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElem (arr, val){
  let x = 0;
  for(let i = 0; i < arr.length; i ++){
    if(arr[i] != val){
      arr[x] = arr[i];
      x = x+1;
    }
  }
  return x;
}

let arrray = [3,2,2,3]
console.log(removeElem(arrray,3));