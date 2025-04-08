const marks = [10, 2 , 8, 4, 6]
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum);



let sum2 = 0;
for (const mark of marks) {
    sum2 += mark;
}
console.log(sum2);
const nameSizes = [];
let names = ["John", "Jane", "Jack", "Johnny"];
for (const name of names) {
    const details = {
        name: name,
        firstLetter: name[0],
        lastLetter: name[name.length - 1],
        size: name.length
    };
    nameSizes.push(details);

}
console.log(nameSizes);
