function number(x, b) {
  let result = x;

  for (let i = 1; i < b; i++) {
    result *= x;
  }

  return result;
  
}

let x = prompt("задайте число x", '');
let b = prompt("задайте число b", '');

if (b < 1) {
  console.log(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
  console.log( number(x, b) );
}
