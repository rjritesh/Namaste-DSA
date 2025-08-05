function maxConsecutiveOnes(nums){
  let count  = 0;
  let maxCount = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
      count ++;
      
    }
    else{
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(count, maxCount);
}

let array = [1,1,1,1,1,0,1,1,1];
console.log(maxConsecutiveOnes(array));


//Another approach


var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]=== 1){
            count++;
            maxCount = Math.max(count, maxCount);
        }
        else{
            count = 0;
        }
    }
    return maxCount
};


