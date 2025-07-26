function sum (nums){
  if(nums === 0) return 0;

  return nums + sum(nums - 1)
}
 console.log(sum(5));