/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
// String.prototype.charAt()
// The charAt() method returns the character at a specified index (position) in a string.
// The index of the first character is 0, the second character is 1, and so on.
// The charAt() method returns an empty string if the index is out of range.
let str = "Hello World!";
console.log(`\ncharAt`);
console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o
console.log(str.charAt(5)); // (space)
console.log(str.charAt(6)); // W
console.log(str.charAt(7)); // o
console.log(str.charAt(8)); // r
console.log(str.charAt(9)); // l
console.log(str.charAt(10)); // d   
console.log(str.charAt(-1)); // (empty string)
console.log(str.charAt(-2)); // (empty string)
console.log(str.charAt(-3)); // !

let text = "Hello World!";
console.log(``, text[0]);
console.log(``, text[text.length - 1]);
console.log(``, text.charAt[0]);
console.log(``, text.charAt[1]);
console.log(``, text.charAt[2]);
console.log(``, text.charAt[-1]);
console.log(``, text.charAt[-2]);
console.log(``, text.charAt[-3]);

console.log(`\nincludes`);
console.log("summer".includes("s"));
console.log("summer".includes("u"));
console.log("summer".includes("m"));
console.log("summer".includes("e"));
console.log("summer".includes("r"));
console.log("summer".includes("S"));
console.log("summer".includes("U"));

// startsWith
console.log(`\nstartsWith`);
console.log("summer".startsWith("s"));
console.log("summer".startsWith("u"));

// endsWith
console.log(`\nendsWith`);
console.log("summer".endsWith("s"));
console.log("summer".endsWith("r"));

// indexOf
console.log(`\nindexOf`);
//           012345
console.log("summer".indexOf("s"));
console.log("summer".indexOf("u"));
console.log("summer".indexOf("m"));
console.log("summer".indexOf("e"));
console.log("summer".indexOf("r"));
console.log("summer".indexOf("S"));
console.log("summer".indexOf("U"));
console.log("summer".indexOf("m", 3));
console.log("summer".indexOf("m", 2));
console.log("summer".indexOf("m", 5));
//           012345678
console.log("chocolate".indexOf("o", 0))
console.log("chocolate".indexOf("o",  3));
console.log("chocolate".indexOf("o",  -1));
console.log("chocolate".indexOf("o", -2));

const c = "chocolate";
console.log(c);
console.log(c.indexOf("o", c.indexOf("o") + 1));
console.log(c.indexOf("o", c.indexOf("o", c.indexOf("o") + 1) + 1));

//stringRepeat
console.log(`\nstringRepeat`);
console.log("hello".repeat(3));

//replace
console.log(`\nreplace`);
console.log("hello".replace("h", "H"));
console.log("hello".replace("l", "L"));
console.log("hello".replace("l", "L"));

const Midnight = "Midnight";
console.log(Midnight.replace("i", "-").replace("i", "-").replaceAll("-", "_"));
console.log(Midnight.replaceAll(Midnight, "*".repeat(Midnight.length)));

//slice
console.log(`\nslice`);
console.log("hello".slice());
console.log("hello".slice(-1));
console.log("hello".slice(-2));
console.log("hello".slice(-3));
console.log("hello".slice(-4));
console.log("hello".slice(0));
console.log("hello".slice(1));
console.log("hello".slice(2));
console.log("hello".slice(3));
console.log("hello".slice(4));
console.log("hello".slice(0, 1));
console.log("hello".slice(0, 2));
console.log("hello".slice(0, 3));
console.log("hello".slice(0, 4));
console.log("hello".slice(0, 5));
console.log("hello".slice(0, -1));
console.log("hello".slice(0, -2));
console.log("hello".slice(0, -3));
console.log("hello".slice(0, -4));

//uppercase and lowercase
console.log(`\nuppercase and lowercase`);
console.log("hello".toUpperCase());
console.log("hello".toLowerCase());
console.log("hello".toLocaleUpperCase());
console.log("hello".toLocaleLowerCase());
console.log("hello".toLocaleUpperCase("en-UK"));
console.log("hello".toLocaleUpperCase("lt-LT"));

//trim
console.log(`\ntrim`);
console.log("  Midnight  ".trim());
console.log("  Midnight  ".trimStart());
console.log("  Midnight  ".trimEnd());
console.log("  Midnight  ".trimStart().trimEnd());

//padStart and padEnd
console.log(`\npadStart and padEnd`);
console.log("Midnight".padStart(10));
console.log("Midnight".padEnd(10));
console.log("Midnight".padStart(10, "*"));
console.log("Midnight".padEnd(10, "*"));
console.log("Midnight".padStart(10, "0"));
console.log("Midnight".padEnd(10, "0"));
console.log("Midnight".padStart(10, "0").padEnd(15, "*"));
console.log("Midnight".padEnd(10, "0").padStart(15, "*"));

// split
console.log(`\nsplit`);
console.log("chocolate".split());
console.log("chocolate".split(""));
console.log("chocolate".split("o"));
console.log("chocolate".split("o", 1));
console.log("chocolate".split("o", 2));
console.log("chocolate".split("o", 3));
console.log("chocolate".split("l", 12));
console.log("Good morning everyone".split(" "));

//charCodeAt
console.log(`\ncharCodeAt`);
console.log("a".charCodeAt(0));

//fromCharCode
console.log(`\nfromCharCode`);
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(90));
console.log(String.fromCharCode(122));
console.log(String.fromCharCode(2600));
console.log(String.fromCharCode(26000));
console.log(String.fromCharCode(98425));
