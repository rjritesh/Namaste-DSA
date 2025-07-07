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
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
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
    toggle = 1;
    for (let j = 0; j < i + 1; j++) {
      row = row + " " + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

console.log("-------------");

{
  let n = 5;
  toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + " " + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
