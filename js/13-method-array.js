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

console.clear();

const numbers2 = [1, 2, 3];
console.log(numbers2);

numbers2.push(4);
console.log(numbers2);

const g1 = numbers2.pop();
numbers2.pop();
console.log(numbers2, g1);

numbers2.push(3, 4, 5);
numbers2.unshift(1);
numbers2.unshift(2);
numbers2.unshift(3);
console.log(numbers2);

const g2 = numbers2.shift(5);
console.log(numbers2, g2);

console.clear();
//              0   1   2   3   4
const magic = [11, 22, 33, 44, 55];
console.log(magic.includes(5));//false
console.log(magic.includes(55));//true

console.log(magic.indexOf(5)); // -1
console.log(magic.indexOf(55)); // 4
const texts = ["wakami", "rice", "chicken", "honey"];
//needed ingredients
console.log(`Needed ingredients: ${texts.join(`, `)}`); 


const c1 = [1, 2, 3];
const c2 = [4, 5, 6];
const c3 = c1.concat(c2);
console.log(c1);
console.log(c2);
console.log(c3);

c3.splice(0, 3);
console.log(c3);
console.clear();
const k = [1, 2, 3, 4, 5];
const triple = x => x * 3;
const k3 =k.map(triple);
console.log(k);
console.log(k3);
const k5 = k.map(x => x * 5);
console.log(k5);
const k6 = k.map(x => x );
console.log(k6);

const dict = ["rice", "chicken", "teriyaki", "soy sauce", "honey"];
const dict2 = dict.map(x => x[0].toUpperCase());
console.log(dict);
console.log(dict2);
const dict3 = dict.map(x => x[0].toUpperCase() + x.slice(1));
console.log(dict3);
const dict4 = dict.map(x => x.toUpperCase());
//console.log(dict4);

const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 35 }
];
const names = people.map(person => person.name);
const ages = people.map(person => person.age);
console.log(names + " " + ages);

const people100 = people.map(person => {
    return {
        name: person.name,
        years: 100 - person.age + "years left until 100"
    };
})
console.log(people100);

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(x => x % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numbers3.filter(x => x % 2 !== 0);
console.log(oddNumbers);
const people2 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 21 },
    { name: "Jack", age: 17 }
];
const adults = people2.filter(person => person.age >= 18);
console.log(adults);

const numbers4 = numbers3.filter(x => x > 2 && x < 4);
console.log(numbers4);

const texts2 = ["good", "morning", "world"];
const texts2Updated = texts2.filter(t => t.length > 4);
console.log(texts2Updated);
