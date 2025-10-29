let myAge: number = 25;
console.log(`My age is: ${myAge}`);

let firtsName: string = "Huy";
let lastName: string = "Pham";

/*
Array in typescript
*/

let myArray: string[] = ['Huy', 'Ngan', "Dau do"];
let arrNumber: number[] = [25, 28, 24];

let fruits = ["Apple", "Pear", "Bananas"];

const f = fruits[2];

arrNumber.push(7);
console.log(arrNumber)

/*
Object literals
*/

let myObject : {firstName: string, age: number} = {
    firstName: "Huy",
    age: 25,
}

myObject.firstName = "Ngan Lee 2";
myObject.age = 28;

console.log(myObject.firstName);


/**
 * Function trong Typescript
 * tham số phải chỉ ra kiểu dữ liệu
 */
function addTwoNumber (number1: number, number2: number): number{
    return number1 + number2
};

console.log(`Add two number 1 and 2: ${addTwoNumber(1,2)}`);

/**Cách khai báo hàm kiểu Arrow function */
const multipleTwoNumbers = (a: number, b: number): number => {
    return a * b;
}
console.log(`Multiple two number 1 and 2: ${multipleTwoNumbers(2,2)}`);

const addAllNumbers = (item: number[]): number => {
    return item.reduce((a, c) => a + c, 0)
}

console.log(`Add all numbers: ${addAllNumbers([2,2, 3,4])}`);


/**Kieu du lieu any */
let variable1: any;

variable1 = 20;
variable1 = 'String';

let array1: any[] = [1, 2, 'Huy', true];

const addTogether = (value: any): any => {
    return value + value
};

console.log(addTogether(2));
console.log(addTogether("Hello"));


/**Kieu du lieu Tuple 
 * const addAllNumbers = (item: number[]): number => {
    return item.reduce((a, c) => a + c, 0)
}
*/

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1]

console.log(hsla);

const useCoordinate =():[number, number] => {
    const lat = 100;
    const long = 50;
    return [lat, long]
};
console.log(useCoordinate()); //return ve 1 array [100, 50]
//Distructuring technique
const [lat, long] = useCoordinate();
console.log(lat, long);

/**Dat ten cho kieu du lieu trong Tuple */

let user: [name: string, age: number];

user = ['Marry', 10];
let getUserName = user[0];
let getUserAge = user[1];
console.log(`User name is ${getUserName} and age is ${getUserAge}`);
