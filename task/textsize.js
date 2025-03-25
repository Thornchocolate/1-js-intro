/* 
reikaalinga funkcija kuri gauna teksta. kuri grazina rezultata, priklausomai nuo teksto ilgio
jei tuscias - empty
jei maziau nei 10, short text from n symbols
jei maziau nei 20, average text from n symbols
jei 20 ar daugiau, long text from n symbols
*/

function textSize(text) {
    if (text.length == 0) {
        return "empty";
    } else if (0 <= text.length && text.length < 20) {
        return `short text from ${text.length} symbols`;
    } else if (20 <= text.length && text.length < 40) {
        return `average text from ${text.length} symbols`;
    } else {
        return `long text from ${text.length} symbols`;
    }
};

console.log(textSize(''));
console.log(textSize('Memento mori'));
console.log(textSize(`The rabbit is white.`))
console.log(textSize('A white rabbit is running in the forest'));
console.log(textSize('This morning I woke up, looked through the window and saw a white rabbit hopping around the backyard'));