function print (n){
  if(n === 1) return 1;

  return n * print(n - 1)

}

console.log(print(5));