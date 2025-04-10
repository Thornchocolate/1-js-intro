const day = 1;
let dayName = ""; // dayName is declared but not initialized
if (day === 1) {
    dayName = "Monday";
} else if (day === 2) {
    dayName = "Tuesday";
}
else if (day === 3) {
    dayName = "Wednesday";
}
else if (day === 4) {
    dayName = "Thursday";
} else if (day === 5) {
    dayName = "Friday";
} else if (day === 6) {
    dayName = "Saturday";
} else if (day === 7) {
    dayName = "Sunday";
} else {
    dayName = "Invalid day";
}
console.log(dayName); // Output: Monday
// Using switch statement
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Monday
// Using switch statement with fall-through
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dayName = "Weekday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); // Output: Weekday

const stop = "Parko";
switch (stop) {
    case 'Parko': console.log("Parko");
    case 'Geniu': console.log("Geniu");
    case 'Tremtinius': console.log("Tremtinius");
    case 'Rudens': console.log("Rudens");
    case 'Mindaugo tiltas': console.log("Mindaugo tiltas");
        break;
    case 'Vingis': console.log("Vingis");
    case 'Zaliasis tiltas': console.log("Zaliasis tiltas");
    case 'Paupio': console.log("Paupio");
    case 'Neris': console.log("Neris");
        break;
    case 'Siaures': console.log("Siaures");
    case 'Klaipedos': console.log("Klaipedos");
    case 'Kauno': console.log("Kauno");
    case 'Vilniaus': console.log("Vilniaus");
        break;
};






