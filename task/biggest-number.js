function biggestNumber(list) {
  if (!Array.isArray(list)) {
    return "Input is not an array";
    };
  if (!list.length) {
    return "Array is empty";
    };
    
    let biggest = -Infinity;
       
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {continue};
//      if (!isFinite(list[i])) {continue};
        if (list[i] > biggest) {biggest = list[i]};
    }
    return biggest;
}
console.log(biggestNumber([1, 2, 3, 4, 5]));
console.log(biggestNumber([10, 20, 30, 40, 50]));

console.log(biggestNumber([1]) + ' --> ' + 1);
console.log(biggestNumber([1, 2]) + ' --> ' + 2);
console.log(biggestNumber([1, 2, 3]) + ' --> ' + 3);
console.log(biggestNumber([1, 2, 3, 4]) + ' --> ' + 4);
console.log(biggestNumber([1, 2, 5, 4, 3]) + ' --> ' + 5);
console.log(biggestNumber([-1, -2, -3, -4, -5]) + ' --> ' + -1);
console.log(biggestNumber([-5, -4, -3, -2, -1]) + ' --> ' + -1);
console.log(biggestNumber([1, 2, 3, 'a', 6, 5]) + ' --> ' + 6);
console.log(biggestNumber([1, 2, 3, 'a', 'b', 'c']) + ' --> ' + 3);
console.log(biggestNumber(['a', 2, 3, 4, 5]) + ' --> ' + 5);
console.log(biggestNumber([1, 2, 3, 4, 5, -Infinity]) + ' --> ' + 5);
console.log(biggestNumber([1, 2, 3, 4, 5, Infinity]) + ' --> ' + 5);