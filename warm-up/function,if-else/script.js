//Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.

function sum(a,b){
console.log(a + b);
}
sum(12,20)



//Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it

function square(num){
let square = num * num;
return square
}

console.log(square(12));


//Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
function checkEligibility(age){
if(age > 18 && age < 120){
  console.log("You can vote");
}
else if(age < 0){
  console.log("Enter a valid age");
}
else{
  console.log("You can not vote");
}
}
checkEligibility(19)


//Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.


function isEvenOrOdd(num){
  if(num % 2 == 0){
    console.log("Number is even");
  }
  else{
    console.log("Number is odd");
  }
}
isEvenOrOdd(5)

