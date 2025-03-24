
/*
Array - sarasas, masyvas
*/

const emptyArray = []; // []
console.log(emptyArray);

const fourNumbers = [1, 2, 3, 4]; // [1, 2, 3, 4]
console.log(fourNumbers);
const firstNumber = fourNumbers[0];
console.log(firstNumber);
const secondNumber = fourNumbers[1];
const thirdNumber = fourNumbers[2];
const fourthNumber = fourNumbers[3];
console.log(`first - ${firstNumber}, second - ${secondNumber}, third - ${thirdNumber}, fourth - ${fourthNumber}`);
console.log(fourNumbers.length);
names = ["John", "Jane", "Mark", "Jake"];
console.log(names);
console.log(names.length);
console.log(names[2]);

const totalSum1 = fourNumbers[0] + fourNumbers[1] + fourNumbers[2] + fourNumbers[3];
console.log(totalSum1);

function totalSum2(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};
console.log(totalSum2(fourNumbers));

const luckyNumbers = [3, 7, 9, 13, 15, 21];
console.log(totalSum2(luckyNumbers));

const word = 'academy';
const wordVocabulary = word.split('').sort().join('');

console.log(word);


console.log(wordVocabulary);
let food = [`noodles`, `rice`, `vegetables`, `meat`, `fish`, `soup`];
console.log(food);
let sentence = `Today I will have ${food[1]} with some ${food[2]} for lunch.`;
console.log(sentence);

function foodSum(food) {
    let sum = `in my fridge i have: `;
    for (let i = 0; i < food.length; i++) {
        sum += food[i] + ', ';
    }
    return sum;
};
console.log(foodSum(food));


