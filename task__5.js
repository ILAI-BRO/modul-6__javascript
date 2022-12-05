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
  alert(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
  alert( number(x, b) );
}
