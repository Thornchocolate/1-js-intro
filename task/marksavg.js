
function marksAverage(marks) {
    if (!Array.isArray(marks)) {
        return 'Please provide an array';
    }
    if (marks.length === 0) {
        return 'Please provide at least one mark';
    }
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        if (typeof marks[i] !== 'number' || !isFinite(marks[i]) || 10 < marks[i] < 0) {
             i++}; 
             sum += marks[i];
    }
             return sum / marks.length;
    };


console.log(marksAverage([5, 7, NaN, 10, 2]));
console.log(marksAverage([1, 2, 3, 4, 5]));
console.log(marksAverage([1, 2, 3, 4, 5, 6, 7, 'eight', 9, 10]));
console.log(marksAverage([]));
console.log(marksAverage(1, 2, 3, 4, 5));
console.log(marksAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(marksAverage([7, 8, 9, 10]));
console.log(marksAverage([7, 8, 7, 8]));
console.log(marksAverage([7, 8, 9, 10]));

