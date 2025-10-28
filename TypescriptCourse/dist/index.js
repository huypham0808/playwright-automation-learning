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
//# sourceMappingURL=index.js.map