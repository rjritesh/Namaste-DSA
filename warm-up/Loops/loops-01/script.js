//Write a program to print all even numbers from an array.

function printEvenNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      console.log( array[i]);
    }
  }
}

let arr= [12,45,67,89,90,100];
printEvenNum(arr)
