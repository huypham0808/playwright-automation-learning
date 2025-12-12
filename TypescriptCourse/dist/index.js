"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myAge = 25;
console.log(`My age is: ${myAge}`);
let firtsName = "Huy";
let lastName = "Pham";
/*
Array in typescript
*/
let myArray = ['Huy', 'Ngan', "Dau do"];
let arrNumber = [25, 28, 24];
let fruits = ["Apple", "Pear", "Bananas"];
const f = fruits[2];
arrNumber.push(7);
console.log(arrNumber);
/*
Object literals
*/
let myObject = {
    firstName: "Huy",
    age: 25,
};
myObject.firstName = "Ngan Lee 2";
myObject.age = 28;
console.log(myObject.firstName);
/**
 * Function trong Typescript
 * tham số phải chỉ ra kiểu dữ liệu
 */
function addTwoNumber(number1, number2) {
    return number1 + number2;
}
;
console.log(`Add two number 1 and 2: ${addTwoNumber(1, 2)}`);
/**Cách khai báo hàm kiểu Arrow function */
const multipleTwoNumbers = (a, b) => {
    return a * b;
};
console.log(`Multiple two number 1 and 2: ${multipleTwoNumbers(2, 2)}`);
const addAllNumbers = (item) => {
    return item.reduce((a, c) => a + c, 0);
};
console.log(`Add all numbers: ${addAllNumbers([2, 2, 3, 4])}`);
/**Kieu du lieu any */
let variable1;
variable1 = 20;
variable1 = 'String';
let array1 = [1, 2, 'Huy', true];
const addTogether = (value) => {
    return value + value;
};
console.log(addTogether(2));
console.log(addTogether("Hello"));
/**Kieu du lieu Tuple
 * const addAllNumbers = (item: number[]): number => {
    return item.reduce((a, c) => a + c, 0)
}
*/
let hsla;
hsla = [200, '100%', '50%', 1];
console.log(hsla);
const useCoordinate = () => {
    const lat = 100;
    const long = 50;
    return [lat, long];
};
console.log(useCoordinate()); //return ve 1 array [100, 50]
//Distructuring technique
const [lat, long] = useCoordinate();
console.log(lat, long);
/**Dat ten cho kieu du lieu trong Tuple */
let user;
user = ['Marry', 10];
let getUserName = user[0];
let getUserAge = user[1];
console.log(`User name is ${getUserName} and age is ${getUserAge}`);
const authorOne = { id: 1, name: "Huy", avatar: "./img/avatar.png" };
const authorTwo = { id: 2, name: "Huy2" };
let idGet = authorTwo.id;
console.log("Id get is: ", idGet);
//Define 2 function dựa vào interface
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
let resultAdd = sub(1, 2);
console.log(resultAdd);
function getColorRandom() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const getColorOne = getColorRandom();
console.log("Color 1: ", getColorOne);
const userOne = { name: "Huy Pham", score: 90 };
function formatUser(user) {
    console.log(`${userOne.name} has ${userOne.score} score`);
}
;
formatUser(userOne);
//# sourceMappingURL=index.js.map