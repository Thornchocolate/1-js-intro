
//sort method sorts the elements of an array in place and returns the sorted array.
const texts = ["Good", "Morning", "Lithuania", "Hello", "World"];
console.log(texts);
//this is basically as that
texts.sort();// === texts.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
console.log(texts);
texts.sort((a, b) => a.length - b.length);
console.log(texts);
texts.sort((a, b) => b.length - a.length);
console.log(texts);
console.log(texts);

const pseudo = ["d", "b", "ca", "bf", "ba", "cc", "db", "baa", "bac"];
console.log(pseudo);
pseudo.sort();
console.log(pseudo);
pseudo.sort((a, b) => a.length - b.length);
console.log(pseudo);

const numbers = [4, 2, 5, 1, 3];
console.log(numbers);
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

const numbers2 = [10, 2, 8, 8, 1, 12, 23, 4, 6];
//absolute failll
console.log(numbers2);
numbers2.sort();
console.log(numbers2);

//how to sort numbers correctly:
numbers2.sort((a, b) => a - b);
console.log(numbers2);
numbers2.sort((a, b) => b - a);
console.log(numbers2);

//sort objects
const persons = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 },
    { name: "Rin", age: 35 },
    { name: "Len", age: 25 },
    { name: "Luka", age: 25 },
];
console.log(persons);
//sort by age
persons.sort((a, b) => a.age - b.age);
console.log(persons);
//sort by name
persons.sort((a, b) => a.name.length - b.name.length);
console.log(persons);
//sort by name and age
persons.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age;
    }
    return a.name.length - b.name.length;
});
console.log(persons);
//sort by age and name
persons.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.length - b.name.length;
    }
    return a.age - b.age;
});
console.log(persons);

persons.sort((a, b) => { a.name > b.name ? 1 : a.name === b.name ? 0 : -1; });
console.log(persons);

console.clear();


