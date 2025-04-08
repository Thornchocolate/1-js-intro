const marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < 10; i++) {
    let sum = 0;
    sum += marks[i];
    console.log(marks[i]);
    console.log(sum);
}

console.clear();

let sum2 = 0;
let i2 = 0;
while (i2 < 10) {
    sum2 += marks[i2];
    console.log(marks[i2]);
    i2++;
}
console.log(sum2);

console.clear();

let count = 0;
let sum3 = 0;
while (sum3 < 1000000) {
    sum3 += count++;
}
console.log(count);
console.log(sum3);
    