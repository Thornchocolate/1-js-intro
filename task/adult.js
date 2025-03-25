/*
Reikalinga funckija, kuri gauna vartotojo amziu ir grazina ar jis yra pilnametis ar ne.
amziaus ribos kriterijus: >= 18
*/

let age = 0
function isAdult(age) {
    if (age >= 18) {
        return `You are an adult.`
    } else {
        return `You are not an adult.`
    }
};
console.log(isAdult(18));
console.log(isAdult(17));
console.log(isAdult(25));