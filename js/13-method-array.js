const list = [];
console.log(list);
//push() method adds one or more elements to the end of an array and returns the new length of the array.
list.push(10);
console.log(list);
list.push(20);
console.log(list);
list.push(30, 40);
console.log(list);

const numbers = [10, 2, 3, 4, 5];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    doubleNumbers.push(number * 2);
}
console.log(doubleNumbers);


const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];
const n3 = [3, 33, 333, 3333, 33333];

const n12 = []; 

for (let i = 0; i < n1.length; i++) {
    const number = n1[i];
    n12.push(n1[i]);
}
for (let i = 0; i < n2.length; i++) {
    const number = n2[i];
    n12.push(n2[i]);
}
for (let i = 0; i < n3.length; i++) {
    const number = n3[i];
    n12.push(n3[i]);
}
console.log(n12);

