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
