
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER - 1);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

//is finite
console.log("\nisFinite");
console.log(isFinite(1)); // true
console.log(isFinite(0)); // true
console.log(isFinite(-1)); // true
console.log(isFinite("Hello")); // false
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(true)); // false
console.log(isFinite([])); // false
console.log(isFinite({})); // false

console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(-1)); // true
console.log(Number.isFinite("Hello")); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(true)); // false
console.log(Number.isFinite([])); // false
console.log(Number.isFinite({})); // false

if (Number.isFinite(1)) {
  console.log("1 is finite");
}
if (Number.isFinite(0)) {
  console.log("0 is finite");
}

//is integer
console.log("\nisInteger");
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-1)); // true
console.log(Number.isInteger(1.5)); // false
console.log(Number.isInteger("Hello")); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger([])); // false
console.log(Number.isInteger({})); // false

//isNaN
console.log("\nisNaN");
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(-1)); // false
console.log(Number.isNaN(1.5)); // false
console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN([])); // false
console.log(Number.isNaN({})); // false

//is safe integer
console.log("\nisSafeInteger");
console.log(Number.isSafeInteger(1)); // true
console.log(Number.isSafeInteger(0)); // true
console.log(Number.isSafeInteger(-1)); // true
console.log(Number.isSafeInteger(1.5)); // false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); // false
console.log(Number.isSafeInteger(Number.POSITIVE_INFINITY)); // false
console.log(Number.isSafeInteger(Number.NEGATIVE_INFINITY)); // false

//parseInt
console.log("\nparseInt");
console.log(parseInt("123")); // 123
console.log(parseInt("123abc")); // 123
console.log(parseInt("abc123")); // NaN
console.log(parseInt("0x123")); // 291
console.log(parseInt("0b101")); // 0
console.log(parseInt("0o123")); // 0
console.log(parseInt("123.45")); // 123
console.log(parseInt("123e2")); // 123
console.log(parseInt("123e-2")); // 123
console.log(parseInt("123e+2")); // 123
console.log(parseInt("123e")); // 123
console.log(parseInt("123eabc")); // 123
console.log(parseInt("123abc456")); // 123

//user input
console.log("\nuser input");
const userInput = "19"
const userNumber = parseInt(userInput);
console.log(userNumber); // 19
const data = userInput + 5;
console.log(data); // 195

console.log(parseInt.userInput); // 
const num1 = "15.5";
console.log(parseInt(num1)); // 15
console.log(parseFloat(num1)); // 15.5

//parseFloat
console.log("\nparseFloat");
console.log(parseFloat("123.135")); // 123
console.log(parseFloat("123.abc")); // 123
console.log(parseFloat("abc123")); // NaN
console.log(parseFloat("0x123")); // 0
console.log(parseFloat("0b101")); // 0
console.log(parseFloat("0o123")); // 0
console.log(parseFloat("123.45")); // 123.45

//to fixed
console.log("\ntoFixed");
const a = 12.3456789;
console.log(a);
console.log(typeof a);
console.log(a.toString());
console.log(a.toFixed(2)); // 12.35
console.log(a.toFixed(4)); // 12.3457
const b =  a.toFixed(4);
console.log(typeof b); // string
console.log(b); // 12.3457
const c = parseFloat(b);
console.log(typeof c); // number
console.log(a.toFixed(1)); 
console.log(a.toFixed(2)); 
console.log(a.toFixed(3));
console.log(a.toFixed(4)); 
console.log(a.toFixed(5));
console.log(a.toFixed(6));
console.log(a.toFixed(7));
console.log(a.toFixed(8));
console.log(a.toFixed(9));
console.log(a.toFixed(10));