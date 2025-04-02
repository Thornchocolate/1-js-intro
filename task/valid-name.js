//funkcija kuri gavusi zodi is jo padaro korektiska varda
function validName(name) {
    if (name.length === "") {
        return "Name cant be empty";
    }
    if (name.length > 20) {
        return "Name is too long";
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " ") {
            return "Name cant contain spaces";
        }
        if (/^[0-9*#+]+$/.test(name[i])) {
            return "Name cant contain numbers";
        }
    } 
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
};

console.log(validName("joHnnY"));
console.log(validName("hANNAh"));
console.log(validName("naomi"));
console.log(validName("naomi123"));
