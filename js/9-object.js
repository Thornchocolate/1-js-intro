
//object - object(similar to: hashmap, dictionary, map) 

const empty = {};
console.log(empty); // {}
const empty2 = new Object();
console.log(empty2); // {}
const empty3 = Object.create(Object);
console.log(empty3); // {}

const person = {
  name: "John",
  age: 30,
  isMarried: true,
};
console.log(person); // { name: 'John', age: 30, city: 'New York' }

//hi, my name is John

console.log(`hi, my name is ${person.name}`); // hi, my name is John
console.log(`hi, my name is ${person["name"]}`); // hi, my name is John
console.log(`my age is ${person.age}`); // my age is 30
console.log(`my age is ${person["age"]}`); // my age is 30
console.log(`i am married: ${person.isMarried}`); // i am married: true
console.log(`i am married: ${person["isMarried"]}`); // i am married: true

//standard notation - standard way to access object properties
console.log(person["name"]); // John
console.log(person["age"]); // 30
console.log(person["isMarried"]); // true

//dot notation
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isMarried); // true

/*
//doesnt work when property name is not a valid identifier
const demo = {
    "colour": "red",
    colour1: "blue",
    5: 6,
    "is married": true,
};

console.log(demo.colour); // red
console.log(demo.colour1); // blue
//console.log(demo.5); // SyntaxError: Unexpected number
console.log(demo[5]); // 6
console.log(demo["5"]); // 6
console.log(demo["is married"]); // true
console.log(demo["is" + " married"]); // true
*/

let pc = {
    brand: "Lenovo",
    model: "Legion",
    year: 2018,
    specs: {
        processor: "Intel i5",
        ram: {
            size: 16,
            type: "DDR4",
        },
        storage:{
            space: 512,
            type: "SSD",
        },
    },
};
    console.log(pc);
    console.log(pc.brand); // Lenovo
    console.log(pc["model"]); // Legion
    console.log(pc.specs.processor); // Intel i5
    console.log(pc.specs["ram"]); // 16GB

    pc.specs.ram.size = 32;
    console.log(pc.specs.ram); 
    console.log(pc.specs.ram.size); // 32GB

console.log(`My pc has ${pc.specs.storage.space}GB of ${pc.specs.storage.type} storage`); // My pc has 512GB of SSD storage
console.log(`My pc has ${pc["specs"]["storage"]["space"]}GB of ${pc["specs"]["storage"]["type"]} storage`); // My pc has 512GB of SSD storage

const student = {
    name: "John",
    age: 20,
    isMarried: false,
    parents:{ 
        
        father: 
            {
            name: "Mike",
            phoneNumbers: [333333333, 4444444444],
            address: 
                {
                city: "New York",
                state: "NY",
                zip: 10001,
                },
            },
        
        mother: 
            {
            name: "Sara",
            phoneNumbers: [555555555, 6666666666],
            address: 
                {
                city: "Los Angeles",
                state: "CA",
                zip: 90001,
                },
            },
    },
    phoneNumbers: [1111111111, 2222222222],
    address: 
    {
        city: "New York",
        state: "NY",
        zip: 10001,
    },
};
console.log(student);
console.log(student.parents[1]); 
console.log(student.parents[0]);
console.log(student.parents.father.name); // Mike
console.log(student.parents.mother.name); // Sara
console.log(student.parents.father.phoneNumbers[0]); // 333333333
console.log(student.parents.father.phoneNumbers[1]); // 4444444444
console.log(student.parents.father.address);
console.log(student.parents.father.phoneNumbers[1]); // New York\



console.clear();

const students = [
    {
        name: "John",
        age: 20,
        isMarried: false,
    },
    {
        name: "Mike",
        age: 25,
        isMarried: true,
    },
    {
        name: "Sara",
        age: 22,
        isMarried: false,
    },
];
console.log(students[1]);
const student1 = ["John", 88, false];
const student2 = ["Mike", 95, true];
const student3 = ["Sara", 85, false];
const stud1 = {
    name: "John",
    age: 88,
    isMarried: false,
}
const stud2 = {
    name: "Mike",
    age: 95,
    isMarried: true,
}
const stud3 = {
    name: "Sara",
    age: 85,
    isMarried: false,
};
console.log(stud1);




