console.log(Math.PI);

console.log(Math.E);

console.log(Math.sqrt(16)); // Square root of 16

console.log(Math.abs(-10)); // Absolute value of -10

console.log(Math.pow(2, 3)); // 2 raised to the power of 3

console.log(Math.round(4.5)); // Round to nearest integer

console.log(Math.floor(4.9)); // Round down to nearest integer

console.log(Math.ceil(4.1)); // Round up to nearest integer

console.log(Math.random()); // Random number between 0 and 1

console.log(Math.random() * 100); // Random number between 0 and 100

//absolute value
console.log(`\nabsolute value`);
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

//square root
console.log(`\nsquare root`);
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(-1)); // NaN
console.log(Math.sqrt(0)); // 0

//cube root
console.log(`\ncube root`);
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(-27)); // -3

//exponential
console.log(`\nexponential`);
console.log(Math.exp(2)); // e^2
console.log(Math.exp(0)); // e^0
console.log(Math.exp(-1)); // e^-1

//ceil
console.log(`\nceil`);
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(4.8)); // 5

//floor
console.log(`\nfloor`);
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.8)); // 4

//round
console.log(`\nround`);
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.8)); // 5

//max
console.log(`\nmax`);
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(-1, -2, -3)); // -1

//min
console.log(`\nmin`);
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(-1, -2, -3)); // -3

//trunc
console.log(`\ntrunc`);
console.log(Math.trunc(4.2)); // 4
console.log(Math.trunc(4.8)); // 4

//hypotenuse
console.log(`\nhypotenuse`);
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(5, 12)); // 13

//power
console.log(`\npower`);
console.log(Math.pow(2, 0)); // 1
console.log(Math.pow(2, 1)); // 2
console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(2, 4)); // 16
let a;

//sign
if (Math.sign(a)) {
    console.log(`\nsign`);
    console.log(Math.sign(-5)); // -1
    console.log(Math.sign(0)); // 0
    console.log(Math.sign(5)); // 1
    } else {
    console.log(`\nno sign`);
    };
//random
let number = Math.random() * 101;
console.log(`\nrandom`);
console.log(Math.random()); // Random number between 0 and 1 [0, 1)
console.log(Math.random() * 10); // Random number between 0 and 10 [0, 10)
console.log(Math.round(number)); // Random number between 0 and 100 [0, 100)]

let count3 = 0, count7 = 0;
for (let i = 0; i < 10; i++) {
     if (Math.random() < 0.5) {
        count3++;
    } else {
        count7++;
    }
};
console.log(`count3: ${count3}`);
console.log(`count7: ${count7}`);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`\nrandomNumber`);
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));

console.log(`\nrandomNumber 10 times`);
const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 5000000; i++) {
   const index = randomNumber(0, 9);
    counts[index]++;
};
console.log(counts);
const counts2 = [0, 0];
for (let i = 0; i < 5000000; i++) {
    const index = randomNumber(0, 1);
    counts2[index]++;
}
console.log(counts2);

