function summ(x) {
    return function(y) {
        return x + y;
    };
}

let func = summ(47);

console.log( summ(40)(2) );
