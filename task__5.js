function num(x, b) {
  let res = x;

  for (let i = 1; i < b; i++) {
    res *= x;
  }

  return res;
  
}

let x = prompt("задайте число x", '');
let b = prompt("задайте число b", '');


console.log( num(x, b) );

