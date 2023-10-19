// let fName="abbasi world is most";
// let lowercase = fName.toLowerCase();
// let uppercase = fName.toUpperCase();
// let titlecase = fName.replace(/\w\S*/g, (work) => work.charAt(0).toUpperCase() + work.substr(1).toLowerCase());
// // (/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
// console.log(`LowerCase: ${lowercase}`);
// console.log(`UpperCase: ${uppercase}`);
// console.log(`TitleCase: ${titlecase}`);
// let Name="Abbasi";
// let lowercase= Name.toLowerCase();
// let uppercase= Name.toUpperCase();
// let titlecase= Name.replace(/\w\S*g/, (word)=> word.charAt(0).toUpperCase()+ word.substr(1).toLowerCase());
// console.log(`LowerCase: ${lowercase}`)
// console.log(`UpperCase: ${uppercase}`)
// console.log(`LowerCase: ${titlecase}`)
// let Name="abbasi";
// let titlecase=Name.replace(/\w\S*g/, (word)=> word.charAt(0).toUpperCase()+word.substr(1).toLowerCase())
// let fName=`Hello! ${titlecase}`
// console.log(fName)
// let price=4000;
// let tax=400;
// let bill= price+tax;
// console.log(bill)
// Variable Q1
let age = 18;
console.log(age);
// Variable Q2
let fName = "Muhammad Ahsaan";
let lName = "Abbasi";
let fullName = `${fName} ${lName}`;
console.log(fullName);
// Variable Q3
const Pi = 3.14159; // It's Valur will not be changed.
console.log(Pi);
// String Method Q1
let message = "message";
console.log(message.length);
// String Method Q2
let h1 = "hello";
console.log(h1.toUpperCase());
// // String Method Q3
// let sym1:Symbol
//Conditional Statement Q1
function num(age) {
    let result = age;
    return result;
}
let ages = num(18);
if (ages < 18) {
    console.log("You Are Minor");
}
else {
    console.log("You are Adult");
}
//Conditional Statement Q2
function num2(value) {
    return value;
}
let value2 = num2(-5);
if (value2 > 0) {
    console.log("Number is Positive");
}
else if (value2 < 0) {
    console.log("Number is Negative");
}
else {
    console.log("Number is Zero");
}
//Conditional Statement Q3
function pass(code) {
    if (code.length < 8) {
        console.log("incorrect password");
    }
    const constLetter = /[a-zA-Z]/.test(code);
    const constNumber = /\d/.test(code);
    return constLetter && constNumber;
}
let Password1 = ("Hijabrke");
console.log(pass(Password1));
//Operators Q1
function num3(x, y) {
    return 1 + (x + y) / 2;
}
let a = 4;
let b = 5;
console.log(num3(a, b));
console.log(num3(b, a));
//Operators Q2
function isEvenorOdd(value3) {
    return value3;
}
let num4 = isEvenorOdd(15);
if (num4 % 2 == 0) {
    console.log("Value is Even");
}
else {
    console.log("Odd");
}
//Operators Q3
function rectangle(width, height) {
    return width * height;
}
let width = 50;
let height = 30;
console.log(rectangle(width, height));
// function Q1
// function square(n1:number, n2:number){
//     return n1**n2;
// }
// let n1=15;
// let n2=2;
// console.log(square(n1,n2));
//function q2
function Prime(num5) {
    return num5;
}
let value4 = Prime(13);
if (value4 % 2 != 0) {
    console.log("Prime Number");
}
else {
    console.log("Non-prime Number");
}
//function q3
function AveragePlus(x, y) {
    return 1 + (x + y) / 2;
}
let h = 10;
let g = 8;
let f = 6;
console.log("Average of Sum", AveragePlus(h, g));
console.log("Average of Sum", AveragePlus(h, f));
console.log("Average of Sum", AveragePlus(g, f));
// funtion q4
function Factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    else {
        return n * Factorial(n - 1);
    }
}
let number = 6;
console.log(Factorial(number));
// function q5
function Values(d, e) {
    if (d > e) {
        return d;
    }
    else if (d < e) {
        return e;
    }
}
let d = 8;
let e = 7;
console.log(Values(d, e));
//Loop Q1
// let i=0;
// for (let i=0; i<21;i+=3){
//     console.log(i)
// }
//Loop Q2
let j = 1;
for (let j = 1; j <= 10; j++) {
    console.log(j);
}
//Loop Q3
// let sum=0;
// let i=1;
// for(let i=1; i<100; i+=2){
//     sum+= (i+1)
// }
// console.log("Sum of all even Number " + sum )
//Loop Q4
for (let b of "Hijab Rabail Khan") {
    console.log(b);
}
let object = {
    Hijab: 95,
    Alizay: 80,
    Ahsaan: 85,
    Zyab: 70
};
for (let key in object) {
    console.log("The result of " + key + " are " + object[key]);
}
//Loop Q6
let n = 6;
let i = 10;
do {
    console.log(i);
    i++;
} while (i < n);
// Fibonacci Series
const numb = 2;
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 0; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n1 = nextTerm;
}
// Array
let color = ['red', 'green', 'blue', 'black'];
for (let colur of color) {
    console.log(colur);
}
//Array Q2
let fruit = ["Apple", "Banana", "Mango"];
// fruit[3]="Graphes"
let fr = fruit.push("Graphes");
console.log(fruit);
//Array Q3
function CalculatedSum(Numbers) {
    let sum = 1;
    for (let nums of Numbers) {
        sum *= nums;
    }
    return sum;
}
let arraynum = [1, 2, 3, 4, 5];
console.log(CalculatedSum(arraynum));
//Array Q4
function additionSum(Numbs) {
    let sum = 0;
    for (let numb of Numbs) {
        sum += numb;
    }
    return sum;
}
let arraysum = [5, 6, 7, 8, 9];
console.log(additionSum(arraysum));
//Array Q5
let arrayName = ['Hamzah', 'Bilal', 'Okasah', 'Imran'];
arrayName.push("Zia Khan");
let search = "Zia Khan";
let indexof = arrayName.indexOf(search);
if (indexof !== -1) {
    console.log("Value is in Data");
}
else {
    console.log("Value Doesn't Exist");
}
console.log(arrayName);
//Array Q6
function mergeArray(array1, array2) {
    let mArray = [...array1, ...array2];
    let nArray = Array.from(new Set(mArray));
    return nArray;
}
let Arr1 = [1, 2, 3, 5, 7,];
let Arr2 = [3, 4, 6, 7, 8, 9];
let comArray = mergeArray(Arr1, Arr2);
comArray.sort();
console.log(comArray);
//Array Method Q1
let array3 = [45, 21, 23, 47];
let newarray = array3.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
});
console.log(newarray);
//Array Method Q2
let array4 = [45, 21, 30, 23, 40];
let newarray2 = array4.filter((a) => {
    return a % 10 == 0;
});
console.log(newarray2);
//Array Method Q3
let array5 = [3, 4, 5, 7, 9, 8, 6];
let newarray3 = array5.reduce((h2, h3) => {
    return h2 + h3;
});
console.log(newarray3);
//Array Method Q4
let array6 = ['Hijab', 'Alizay', 'Muqqadas', 'Zyab', 'Ahsaan'];
let Z = array6.join("_");
console.log(`${Z}`);
//Array Q6
let Variable = ['Hamzah', 'Bilal', 'Ahsaan', 'Hijab'];
Variable.sort();
console.log(Variable);
//function
function make_shirt(size = "Large", message = "I Love Typescript") {
    console.log(`I want to buy a ${size}-size shirt and print a ${message} on t-shirt`);
}
make_shirt();
make_shirt("Medium", "Hello World");
make_shirt("small", "I like typecript");
let firstName;
firstName = "hijabie";
firstName.toUpperCase();
firstName = 9;
let CrushName = "Hijab";
if (typeof CrushName === "string") {
    CrushName.toUpperCase();
}
else {
    CrushName;
}
console.log(CrushName);
const myLife = "Hijab Rabail Khan";
let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist; // Type: string
}
else {
    biologist; // Type: false | string
}
export {};
