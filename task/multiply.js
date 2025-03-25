
//shortest solution i can think of:
function multiply(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return `Wrong input a: '${a}', please provide a number`;
    }
    if (typeof b !== 'number' || !isFinite(b)) {
        return `Wrong input b: '${b}', please provide a number`;
    }
    return `${a} * ${b} = ` + a * b;
};

/*
isFinite() - determines whether the passed value is a finite number
!isFinite() - determines whether the passed value is an infinite number
! means NOT
*/


console.log(multiply(2, 3));
console.log(multiply(5, 7));
console.log(multiply(8, 10));
console.log(multiply(5, 0));
console.log(multiply(0, 5));
console.log(multiply(-7, -8));
console.log(multiply(-7, 8));
console.log(multiply(7, -8));
console.log(multiply(0, 0));
console.log(multiply(0, -7));
console.log(multiply(-7, 0));
console.log(multiply(5, 1.5));
console.log(multiply(1.5, 5.1345463214646131313215656513213216561313132165));
console.log(multiply('5', 2));
console.log(multiply(5, 'bye'));
console.log(multiply('5', '2'));
console.log(multiply(1.5, Infinity));
console.log(multiply(Infinity, 1.5));
console.log(multiply(Infinity, Infinity));
console.log(multiply(NaN, 5));
console.log(multiply(5, NaN));
console.log(multiply(NaN, NaN));
console.log(multiply('5', NaN));
console.log(multiply(NaN, '5'));
console.log(multiply('5', Infinity));
console.log(multiply(Infinity, '5'));

console.log(Infinity * 0);
console.log(Infinity / 0);

