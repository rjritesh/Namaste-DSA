//print n to 1

function print(n) {
  if (n < 0) return;

  console.log(n);
  n = n - 1;
  print(n);
}

(print(10));

//print 1 to n

function prints(nums, i) {
 
  if (i > nums) return;

  console.log(i);
  i = i + 1
  prints(nums,i)
}

prints(10,1)
