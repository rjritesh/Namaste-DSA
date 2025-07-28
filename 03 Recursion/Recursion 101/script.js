//print n to 1
function print(n) {
  if (n < 0) return;

  console.log(n);
  n = n - 1;
  print(n);
}
(print(10));




//print 1 to n
let i = 10
function prints(nums) {
 
  if ( nums > i) return;

  console.log(nums);
  nums = nums + 1
  prints(nums)
}

prints(1)
