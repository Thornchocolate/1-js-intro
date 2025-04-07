const n1 = 7;
const n2 = 5;

function sum(a, b) {
  return a + b;
}
const sumArrow = (a, b) => a + b;
const sumArrow2 = (a, b) => {
  return a + b;
}

console.log(`sum: ${sum(n1, n2)}`);

function div(a, b) {
  return a / b;
}

function multi(a, b) {a * b};

//arrow function
//jei logikos bloke yra tik 1 salyga
//tai galima nerasyti {return}
const div1 = (a, b) => a / b;
const multi1 = (a, b) => a * b;
const sum1 = (a, b) => a + b;
const minus1 = (a, b) => a - b;
const sqr1 = a => a * a;

const firstLetter = (str) => str[0];
console.log(firstLetter("Good"));
console.log(firstLetter("Morning"));
console.log(firstLetter("World"));

function correctWord(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
const correctName1 = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(correctWord("gOoD"));
console.log(correctName1("morNINg"));
console.log(correctWord("WORLD"));

const reverseText = (text) => text.split("").reverse().join("");
console.log(reverseText("Good"));
console.log(reverseText("Morning"));
console.log(reverseText("World"));






