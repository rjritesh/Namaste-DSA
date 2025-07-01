let n = 4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + " *";
  }
  console.log(row);
}
console.log("---------------------------------------------------------------");

{
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
console.log("---------------------------------------------------------------");

{
  let n = 5;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + " " + (i + 1);
    }
    console.log(row);
  }
}

console.log("---------------------------------------------------------------");

{
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + " " + (j + 1);
    }
    console.log(row);
  }
}
console.log("---------------------------------------------------------------");

{
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (n + 1) - i; j++) {
      row = row + " ";
    }
    console.log(row);
  }
  for(let k = 0; k < n -1; k++){
    console.log("*");
  }
}
