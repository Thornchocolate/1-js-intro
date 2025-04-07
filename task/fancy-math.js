/*function fancyMath(a, sign, b) {
    switch (sign) {
        case "+":
        return a + b;
        case "-":
        return a - b;
        case "*":
        return a * b;
        case "/":
        return a / b;
        case "%":
        return a % b;
        case "**":
        return a ** b;
        default:
        return "Invalid operator";
    }
};*/

function fancyMath(a, sign, b) {
    const func = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b, 
    }
    const funcToUse = func[sign];
    if (funcToUse) {
        return funcToUse(a, b);
    } else {
        return "Invalid operator";
    }
}


console.log(fancyMath(5, "+", 3)); // 8
console.log(fancyMath(5, "-", 3)); // 2
console.log(fancyMath(5, "*", 3)); // 15
console.log(fancyMath(5, "/", 3)); // 1.6666666666666667
console.log(fancyMath(5, "%", 3)); // 2
console.log(fancyMath(5, "**", 3)); // 125
console.log(fancyMath(5, "invalid", 3)); // Invalid operator