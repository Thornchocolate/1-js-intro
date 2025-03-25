
// type of operator => returns the type of the variable
// typeof variable
// typeof value
// typeof expression
// typeof function
// typeof object
// typeof array
// typeof null
// typeof undefined
// typeof NaN

// typeof 5 => 'number'
// typeof '5' => 'string'
// typeof true => 'boolean'
// typeof null => 'object'
// typeof undefined => 'undefined'
// typeof NaN => 'number'
// typeof Infinity => 'number'
// typeof function(){} => 'function'

console.log(typeof 5);
console.log(typeof '5');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof []);
console.log(typeof {});
console.log(typeof [1, 2, 3]);
console.log(typeof function () { });
console.log(typeof sum);

if (null === null) {
    console.log('Null');
}

const c = [];
if (Array.isArray(c)) {
    console.log('Array');
};

const d = 5;
if (Array.isArray(d)) {
    console.log('Array');
} else {
    console.log('Not an array');
};

