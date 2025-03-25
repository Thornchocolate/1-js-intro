function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) ||
        isFinite(b) === false || !isFinite(b) || a === Infinity || b === Infinity) {
        return 'Please provide numbers only';
    }
    return a * b;
}

/*
isFinite() - determines whether the passed value is a finite number
!isFinite() - determines whether the passed value is an infinite number
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


