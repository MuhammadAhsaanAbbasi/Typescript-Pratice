// let names: [string,number,"Abbasi"] = ["Ahsaan",45,"Abbasi"]

// let arr:number[] = []
// arr.push(55)
// arr.push(555)

// start(56,67)
// function start(num1:number,num2:number){
//     console.log(num1+num2)
// }
// // let sum = (num1:number,num2:number): number => num1 % 3

// // console.log(sum(5,6))

// // console.log(console.log([console.log(console.log(console.log("Hijab Rabail Khan")
// // )
// // )
// // ]));


// // let sum = (num1:number, num2 ?:number): string => num1 % 2 ===0 ? "Even":"ODD"
// // console.log(sum(6,3))


// function greeter(fn:(message:number)=> void, gender:string) {
//     if(gender==="Male"){
//         fn(9)
//     }else{
//         fn(56)
//     }
// }

// function abc(message:number) {
//     console.log("Message ==> ", message);

// }

// greeter(abc,"FeMale")

// var tuple: [number, string,any] = [1, "bob",45];
// var secondElement = tuple[2];
// console.log(secondElement)

// const failingResponse: (string | number)[] = ["Not Found", 404,"HijabRabail",55];
// console.log(failingResponse);

// const passingResponse: [string, number] = ["{}", 200];
// if (passingResponse[0] === "{}") {
//     const localInfo = JSON.parse(passingResponse[0]);
//     console.log(localInfo);
//     }

//   // This means TypeScript will provide the correct types at
//   // the right index, and even raise an error if you try to
//   // access an object at an un-declared index.

//     passingResponse[0];

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];

// console.log(monthThreePayments)
declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(2, 45, 65, payStubs[0][1])
calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
// type StaffAccount = [number, string, string, string?]

// const staff: StaffAccount[] = [
//     [0, "Hijab", "hijabie@gmail.com", "Finance Director"],
//     [1, "Fajar", "fajarrabai@gmail.com",],
//     [2, "Rawa", "rivkhan@gmail.com", "Software Engineer"]
// ]

// type PayStubs = [StaffAccount, ...number[]]

// const payStubs: PayStubs[] = [
//     [staff[0], 250],
//     [staff[1], 250, 260],
//     [staff[0], 300, 300, 300]
// ]

// const oneMonthPayment = payStubs[0][1] + payStubs[1][1] + payStubs[2][1]
// const twoMonthPayment = payStubs[1][2] + payStubs[2][2]
// const threeMonthPayment = payStubs[2][2]

// declare function calculatePayForEmployee(id: number, ...arg: [...number[]]): number

// calculatePayForEmployee(staff[0][0], payStubs[0][1])

// let myAdd: (x:number,y:number)=> number =function(a:number,b:number):number {
//     return a+b
// } 
// myAdd(7,8)

// let myAdd1= function(fn:(x:number,y:number)=> void){
//     fn(4,5)
// }

// function callback(x:number,y:number){
//     console.log (x+y)
//     return callback
// }
var buildNameFun: (firstName: string, ...restOfName: string[]) => string =
    function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
        return firstName + " " + restOfName.join(" ");;
    }

var employeeName = buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName)

function add(arg1: string, arg2: number): string;
function add(arg1: number, arg2: number): number;
function add(arg1: boolean, arg2: boolean): boolean;

function add(arg1: any, arg2: any): any {
    return arg1 + arg2
}

console.log(add("Hijab", 5))



function myAdd2(firstName: string, LastName: string = "Rabail Khan") {
    console.log(firstName + " " + LastName)
}

myAdd2("Hijab")

function myCallBack(text: number) {
    console.log("inside myCallback " + text);
}

function callingFunction(initialText: number, callback: (text: number) => void) {
    callback(initialText);
}

callingFunction(99, myCallBack);

let parentFunction=(cb:any)=>{
    
    console.log("Function Parameter called!");
    cb()
}

let callBackfunction=()=>{
    console.log("calback functioncalled");
    
}

parentFunction(callBackfunction)
