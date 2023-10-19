// function greet(firstName: string, age: number) {
//     console.log(`Hello ${firstName}, Your Age is ${age}`)
// }
// greet("Abbasi", 18);
// // greet();
// // greet();,
// function calc(kg: number){
//     let result= kg/7;
//     console.log(`${result} KG`)
//     return Math.round(result);
// }
// let calculatermeal = calc(180);
// console.log(calculatermeal)
// //calc(150);
// if(calculatermeal>15){
//     console.log("pack in 2 Shoppers")
// }else{
//     console.log("Pack in 1 Shoppers")
// }
// function isEvenorOdd(num:number){
//     if(num%2==0){
//         console.log("The Value is Even")
//     }else{
//         console.log("The value is odd")
//     }
//     return num;
// }
// let num=isEvenorOdd(5);
// if(num/4%0){
//     console.log("The Value is Even")
// }else{
//     console.log("The value is odd")
// }
// let i = 0;
// i++
// i--
// i++
// i-+
// console.log(i)
// let fruits=['Apple','Banana','Orange','Mango']
// for(let i=0; i<fruits.length; i++){
//     let fruit = fruits[i]
//     console.log(fruit)
// }
let vegetable = ['Potato', 'Tomoato', 'Carrot', 'Pees'];
for (let i = 0; i < vegetable.length; i++) {
    let vege = vegetable[i];
    console.log(vege);
}
// for (let i=0; i<3; i++){
//     console.log("Inner")
//     for (let j=0; j<2; j++){
//         console.log("Outer")
//     }
// }
// const nameWithWhitespace: string = "\t\n   John Doe   \t\n";
// console.log("Name with whitespace:");
// console.log(nameWithWhitespace);
// const strippedName: string = nameWithWhitespace.trim();
// console.log("\nName after stripping whitespace:");
// console.log(strippedName);
let studentCard = true;
let cnic = true;
let passport = true;
let age1 = 17;
if (age1 > 18 && studentCard && cnic && passport) {
    console.log("You are Allowed");
}
else {
    console.log("you are not allowed");
}
export {};
