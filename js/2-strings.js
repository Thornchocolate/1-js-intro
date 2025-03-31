//string - a sequence of characters

console.log('Hello');
console.log('nice to meet you');
console.log('Hello' + ' nice to meet you'); 
 
//string concatenation
console.log('Hello' + ' nice to meet you');
console.log('Hello' + ' ' + 'nice to meet you');
console.log('Hello ' + 'nice to meet you');
let space = ' ';
console.log('Hello' + space + 'nice to meet you');

//to use a single quote inside a string, use double quotes to define the string
console.log("It's a beautiful day");

//to use a double quote inside a string, use single quotes to define the string
console.log('She said: "It\'s a beautiful day"');

//to use both single and double quotes inside a string, use backticks to define the string
console.log(`She said: "It's a beautiful day"`);

//a \ is an escape character, it is used to escape the next character
/*
console.log('It\'s a beautiful day');
console.log("She said: \"It's a beautiful day\"");
console.log(`She said: "It's a beautiful day"`);
*/
//to use a backtick inside a string, use backslashes to escape it
//to use a backslash, use another one before it
console.log(`Hello world\\Hi`);

//for multiline strings, use backticks
console.log(`This is a
multiline
string`);
//safer option is to use \n\r\
console.log('This is a\n\r\
multiline\n\r\
string');

//for string length, .length is used
console.log('Hello'.length);
console.log('Hello world'.length);

//to access a character in a string, use [] and the index of the character
let greeting = 'Hello';
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[3]);
console.log(greeting[4]);

//fun toy to play with:

function stringSorter(string) {
    return string.split('').sort().join('');
}
console.log(stringSorter('academy'));
console.log(stringSorter('javascript'));
