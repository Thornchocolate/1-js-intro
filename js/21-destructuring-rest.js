const a1 =[1, 11, 111];
const a2 = [2, 22, 222];
const a3 = [3, 33, 333];
const a4 = [4, 44, 444];

//[1, 11, 111. 2, 22, 222, 3, 33, 333, 4, 44, 44S4]
const a12 = a1.concat(a2, a3, a4);
console.log(a12);

const b12 = [...a1, ...a2, ...a3, ...a4];
console.log(b12);

const b13 = [...a1, ...a2];
console.log(b13);
const b14 = [...a4, ...a2, ...a3];
console.log(b14);
const b15 = [...a3, ...a3, ...a3];
console.log(b15);

// 7, 4, 44, 444, 881
const c1 = [7, 4, 44, 444, 88];
console.log(c1);

console.clear();
const o1 = {name: 'Rin'};
const o2 = {age: 22};
const o3 = {isStudent: true};

const o12= {...o1, ...o2};
console.log(o12);
const o13= {...o1, ...o2, ...o3};
console.log(o13);
const o14= {...o1};
console.log(o14);
const p1 = {a: 1};
const p2 = {b: 2};
const p3 = {c: 3, a: 7};

const p12 = {...p1, ...p2};
console.log(p12);

console.log("---------------------");

const p123 = {...p1, ...p2, ...p3};
console.log(p123);
const p312 = {...p3, ...p1, ...p2};
console.log(p312);
const p4 = {d: 4, ...p3};
console.log(p4);