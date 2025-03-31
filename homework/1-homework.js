//kintamuju inicijiavimas
//1.a
let aNum = 1;
console.log(aNum);
let bNum = 2;
console.log(bNum);
let cNum = 3;
console.log(cNum);
//2.a
let aStr = 'Morning';
console.log(aStr);
let bStr = 'Afternoon';
console.log(bStr);
let cStr = 'Evening';
console.log(cStr);
//3.a
let aNumList = [1, 2, 3, 4, 5];
console.log(aNumList);
let bNumList = [6, 7, 8, 9, 10];
console.log(bNumList);
let cNumList = [11, 12, 13, 14, 15];
console.log(cNumList);
//4.a
let aStrList = ['Morning', 'Noon', 'Afternoon', 'Evening', 'Night'];
console.log(aStrList);
let bStrList = ['Monday', 'Tuesday', 'Wednesday, Thursday, Friday'];
console.log(bStrList);
let cStrList = ['January', 'February', 'March', 'April', 'May'];
console.log(cStrList);

//veiksmai su kintamaisiais
//1.a
let sum = aNum + bNum + cNum;
console.log(sum);
//2.a
let sumStr = aStr + ' ' + bStr + ' ' + cStr;
console.log(sumStr);
//3.a
console.log(aNumList[0] - aNumList[1] + aNumList[2] - aNumList[3] + aNumList[4]);
console.log(bNumList[0] - bNumList[1] + bNumList[2] - bNumList[3] + bNumList[4]);
console.log(cNumList[0] - cNumList[1] + cNumList[2] - cNumList[3] + cNumList[4]);
//4.a
let spaceWithComma = ", ";
console.log(aStrList[0] + spaceWithComma + aStrList[1] + spaceWithComma + aStrList[2] + spaceWithComma + aStrList[3] + spaceWithComma + aStrList[4]);
console.log(bStrList[0] + spaceWithComma + bStrList[1] + spaceWithComma + bStrList[2] + spaceWithComma + bStrList[3] + spaceWithComma + bStrList[4]);
console.log(cStrList[0] + spaceWithComma + cStrList[1] + spaceWithComma + cStrList[2] + spaceWithComma + cStrList[3] + spaceWithComma + cStrList[4]);

//kintamuju palyginimas
//1.zero
if (aNum > bNum) {
    console.log('Tomato');
    } else  {
        console.log ('Try again next time');
    };
//or
console.log(aNum > bNum ? 'Tomato' : 'Try again next time');
//1.a
if (aNum > bNum > cNum || aNum > cNum > bNum) {
    console.log(`${aNum} is greater than ${bNum} and ${cNum}`);
    } else if (bNum > aNum > cNum || bNum > cNum > aNum) {
        console.log(`${bNum} is greater than ${aNum} and ${cNum}`); 
    } else {
        console.log(`${cNum} is greater than ${aNum} and ${bNum}`);
    };

//1.b

if (aNum < bNum < cNum || aNum < cNum < bNum) {
    console.log(`${aNum} is lesser than ${bNum} and ${cNum}`);
    } else if (bNum < aNum < cNum || bNum < cNum < aNum) {
        console.log(`${bNum} is lesser than ${aNum} and ${cNum}`); 
    } else {
        console.log(`${cNum} is lesser than ${aNum} and ${bNum}`);
    };
//1.c
if (aNum === bNum && bNum === cNum) {
    console.log('All numbers are equal');
    } else if (aNum === bNum || bNum === cNum || aNum === cNum) {
        console.log('Two numbers are equal');
    } else {
        console.log('All numbers are different');
    };
//1.d
if (aNum !== bNum && bNum !== cNum && aNum !== cNum) {
    console.log('All numbers are different');
    } else if (aNum !== bNum || bNum !== cNum || aNum !== cNum) {
        console.log('Two numbers are different');
    } else {
        console.log('All numbers are equal');
    };
//1.e
console.log(aNum > bNum ? `${aNum} is greater than ${bNum}` : `${bNum} is greater than ${aNum}`);
console.log(aNum > cNum ? `${aNum} is greater than ${cNum}` : `${cNum} is greater than ${aNum}`);
console.log(bNum > cNum ? `${bNum} is greater than ${cNum}` : `${cNum} is greater than ${bNum}`);
//1.f
console.log(aNum < bNum ? `${aNum} is lesser than ${bNum}` : `${bNum} is lesser than ${aNum}`);
console.log(aNum < cNum ? `${aNum} is lesser than ${cNum}` : `${cNum} is lesser than ${aNum}`);
console.log(bNum < cNum ? `${bNum} is lesser than ${cNum}` : `${cNum} is lesser than ${bNum}`);


