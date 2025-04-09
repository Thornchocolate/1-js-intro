const marks = [10, 2, 8, 4, 6];

let sum = 0;
for(const n of marks) {
    sum += n;
}
console.log(sum); // 30

const sum2 = marks.reduce((total, n) => total + n, 0);
console.log(sum2); // 30
const sum3 = marks.reduce((total, n) => {
    console.log(`total: ${total}, n: ${n}`);
    return total + n;
}
, 100);
console.log(sum3); // 30

const sum4 = marks.reduce((total, n) => {
    console.log(`total: ${total}, n: ${n}`);
    return total - n;
}   
, sum3);
console.log(sum4); // -30

const names = ['John', 'Jane', 'Jack', "Len", 'Rin'];
let abbreviatedNames = '';
for(const name of names) {
    abbreviatedNames += name[0];
}
console.log(abbreviatedNames); // JJJR
const abbreviatedNames2 = names.reduce((acc, name) => acc + name[0], '');
console.log(abbreviatedNames2); // JJJR 
