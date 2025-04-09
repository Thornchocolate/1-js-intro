const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Using for...in loop to iterate over the properties of the object
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York
// Using for...in loop to iterate over an array
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index + ": " + colors[index]);
}
// Output:
// 0: red  
// 1: green
// 2: blue
// Using for...in loop to iterate over a string
const str = "Hello";
for (let index in str) {
  console.log(index + ": " + str[index]);
}

