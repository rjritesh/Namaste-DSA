function print(n){
  if(n === 0) return;

console.log(n);
n = n - 1;
print(n);

}

console.log(print(10));