
function linearSearch(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i;
    }
    else{
      return -1;
    }
  }
}


let array = [2,4,6,8];
console.log(linearSearch(array, 12));