// let names: [string,number,"Abbasi"] = ["Ahsaan",45,"Abbasi"]
const staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
calculatePayForEmployee(2, 45, 65, payStubs[0][1]);
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
var buildNameFun = function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
    ;
};
var employeeName = buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add("Hijab", 5));
function myAdd2(firstName, LastName = "Rabail Khan") {
    console.log(firstName + " " + LastName);
}
myAdd2("Hijab");
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction(99, myCallBack);
let parentFunction = (cb) => {
    console.log("Function Parameter called!");
    cb();
};
let callBackfunction = () => {
    console.log("calback functioncalled");
};
parentFunction(callBackfunction);
export {};
