// const array1=["Ahsaan","Hijab","Fajar","Rawa"]
// const result=array1.filter((value)=>value.length==6).map((value)=>{
//     console.log(value);
//     return value}
// )

// console.log(result);

// interface todos{
//     text:string,
//     id?:number,
//     compeleted:boolean,
// }

// let todo:todos[]=[{text:"Hijab Rabail",id:Math.floor(Math.random()*999999),compeleted:false}]

// todo.push({text:"Ahsaan Abbasi",id:Math.floor(Math.random()*999999),compeleted:true})

// let arr=todo.map((Element)=>{
//     console.log(Element)
//     return Element
// })
// console.log(arr);

// let arr1=todo.splice(1,1)
// console.log(arr1)

// const displaySingleTodo = async(todo:todos)=>{
//     console.log(todo.text)
//     // console.log(todo.compeleted ? 'Completed':'Not Completed')
// }
// const myTodo: todos = {
//     text: "Hijab Rabail Khan",
//     compeleted: false,
// };

// displaySingleTodo(myTodo);
// // displaySingleTodo(todo[])

// interface Person{
//     name:string,
//     age:number,
// address:string,
// }

// let Person:Person={
//     name:"Hijab Rabail Khan",
//     age:19,
//     address:"Thermal Powerstation Colony, Jamshoro, Hyderabad."
// }

// type Point={
//     x:number,
//     y:number
// }

// const point:Point={
//     x:9,
//     y:7
// }

// interface car{
//     makeby:string,
//     model:string,
//     year:number
// }

// function carInfo(car:car) {
//     console.log(car)
// }
// console.log(carInfo({makeby:"Toyota",model:"Yaris",year:2023}))

// type employees={
//     name:string,
//     age:number
// }

// type Company={
//     t_name:string,
//     address:string,
// }

// type intersaction=employees&Company
// const inter:intersaction={
//     name:"Mbe Inc",
//     address:"Toheed Commercial",
//     t_name:"Mbe Inc",
//     age:90,
// }

// console.log(inter);

// interface Shape{
//     name:string
// }

// const myobj:{shape:any}={
//     shape:{
//         name:"Circle",
//     }
// }
// const shapeObj:Shape=myobj.shape
// console.log(shapeObj.name);

// const enum Direction{
//     up,
//     down,
//     left,
//     right,
// }

// function getDirection(direction:Direction):void{
//     switch(direction){
//         case Direction.up:
//             console.log("The Direction is up");
//             break
//             case Direction.down:
//             console.log("The Direction is Down");
//             break
//             case Direction.left:
//             console.log("The Direction is left");
//             break
//             case Direction.right:
//             console.log("The Direction is right");
//             break
//     }
// }
// const selectDirection=Direction.left
// getDirection(selectDirection);


// enum Color{
//     red,
//     blue,
//     green,
// }

// function getColorDirection(color:Color):string{
//     switch(color){
//         case Color.blue:
//         return "The Color is blue"
//         case Color.green:
//         return "The Color is green"
//         case Color.red:
//         return "The Color is red"
//         default:
//             return "unknown Color"
//     }

// }
// const selectColor=Color.green
// console.log(getColorDirection(selectColor));


// let num=[1,2,3,4,5,6,7,8,9,10]

// let filternum=num.filter((val)=>val%2==0)
// // console.log(filternum);

// let mapnum=filternum.map((val)=>val*val)

// // console.log(mapnum);

// let reducenum=mapnum.reduce((prev,curr)=>prev + curr,0)
// console.log(reducenum);

// // Annoymus Function

// const sum=(...num2:number[])=>{
//     let reducenum=num2.reduce((prev,curr)=>prev + curr,0)
//     console.log(reducenum);
// }
// sum(3,9,5)



// const printMessage=(printMessage:string="Hello! World",repeatCount=1)=>{
//         console.log(`${printMessage},message is print ${repeatCount} time`);
// }

// printMessage()

// console.log("Hijab Rabail Khan");

// const sleep= async ()=>{
//     return new Promise((res)=>{
//         let val = "Second"
//         // let num = await val 
//         console.log(val)
//         setTimeout(res,2000)
//     })
// }

// const getStarted = async ()=>{
//     let rainbowtitle="Rainbow Title"
//     await sleep()
//     console.log(rainbowtitle);
    
// }

// await getStarted()

// console.log("Third");


// let order = ()=>{
//     return new Promise((res,rej)=>{
//         let isBurnt=false;
//         setTimeout(()=>{
//             if(isBurnt){
//                 rej("Something Went Wrong")
//             }
//             else{
//                 res("Your Pizza is ready")
//             }
//         },2000)
//     })
// }

// let getorder=async()=>{
//     try{
//         const value=await order()
//         console.log(value);
//     }
//     catch(err){
//             console.log(err);
//     }
// }

// getorder()

// // callback function

// type OperationCallBack=(a:number,b:number)=>number

// function calculate(a:number,b:number,operation:OperationCallBack):number{
//     return operation(a,b)
// }

// const add:OperationCallBack=(a:number,b:number)=>a+b
// const sub:OperationCallBack=(a:number,b:number)=>a-b
// const multi:OperationCallBack=(a:number,b:number)=>a*b

// let addresult=calculate(7,4,add)
// let subresult=calculate(7,4,sub)
// let multiresult=calculate(7,4,multi)

// console.log(addresult);
// console.log(subresult);
// console.log(multiresult);

// function greeter(fn:(message:string)=>void){
//         fn("Hiab Rabail Khan")
// }

// function returnback(message:string){
//     console.log(`Message: ${message}`);
    
// }
// greeter(returnback)

// function greet(name:string,Jamshoro:string):string;
// function greet(name:number,age:number):number;
// function greet(name:boolean,age:boolean):boolean;
// function greet(name:any,age:any):any{
//     return name+age
//     }

// // let result1= greet("Hijabie","Rabail Khan");
// let result2= greet(33, "hijab");
// // console.log(result1);
// console.log(result2);


// function greet(person: string): string; // Overload 1: Accepts a string and returns a string
// function greet(person: string, age: number): string; // Overload 2: Accepts a string and a number, returns a string
// function greet(person: string, age?: number): string {
//   if (age === undefined) {
//     return `Hello, ${person}!`;
//   } else {
//     return `Hello, ${person}! You are ${age} years old.`;
//   }
// }

// // const result1 = greet("Alice"); // Calls overload 1
// const result2 = greet("Bob", 30); // Calls overload 2

// function combine(a: string, b: string): string; // Overload for string concatenation
// function combine<T>(a: T[], b: T[]): T[]; // Overload for array merging
// function combine(a: string | any[], b: string | any[]): string | any[] {
//     if (typeof a === "string" && typeof b === "string") {
//     return a + b; // Concatenate two strings
//     } else if (Array.isArray(a) && Array.isArray(b)) {
//     return a.concat(b); // Merge two arrays
//     } else {
//     throw new Error("Invalid arguments");
//     }
// }

// // Example usages
// const result1 = combine("Hello, ", "world!"); // Calls the string overload
// console.log(result1); // Output: "Hello, world!"

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result2 = combine(arr1, arr2); // Calls the array overload
// console.log(result2); // Output: [1, 2, 3, 4, 5, 6]



// function combine(a:string,b:string):string;
// function combine<T>(a:T[],b:T[]):T[];
// function combine(a:string|any[],b:string|any[]):string|any[]{
//     if(typeof a === "string"&& typeof b === "string"){
//         return a+b
//     }else if(Array.isArray(a)&&Array.isArray(b)){
//         return a.concat(b)
//     }else {
//         throw new Error("invalid output")
//     }
// }

// const result1=combine("Hijab","Rabail")
// console.log(result1);


// let arr1=[1,2,3,4,5]
// let arr2=[5,6,7,8,9]
// let result2=combine(arr1,arr2)
// console.log(result2);


// type OperationCallBack=(a:number,b:number)=>number;

// function calculate(a:number,b:number,operation:OperationCallBack):number{
//     return operation(a,b)
// }

// let add:OperationCallBack=(a:number,b:number)=>a+b
// let sub:OperationCallBack=(a:number,b:number)=>a-b
// let multi:OperationCallBack=(a:number,b:number)=>a*b

// const addresult=calculate(4,5,add)
// const subresult=calculate(4,5,sub)
// const multiresult=calculate(4,5,multi)

// console.log(addresult);
// console.log(subresult);
// console.log(multiresult);

// function displayFunction(callback:()=>void,display:number):void{
//     setTimeout(callback,display)
// }

// function Example1(){
//     console.log("Callback Function 1")
// }
// function Example2(){
//     console.log("Callback Function 2")
// }

// console.log("start");
// displayFunction(Example1,1000)
// displayFunction(Example2,2000)
// console.log("end");

// import * as fs from './pratice.js';

// function readFile(filePath: string, callback: (content: string | null, error: Error | null) => void): void {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       callback(null, err); // Pass null for content and the error to the callback
//     } else {
//       callback(data, null); // Pass data as content and null for the error
//     }
//   });
// }

// // Example usage:
// readFile('sample.txt', (content, error) => {
//   if (error) {
//     console.error('Error reading file:', error);
//   } else {
//     console.log('File content:', content);
//     // You can process the file content here
//   }
// });


// const dosomething=(callback:any)=>{
//     console.log("Do Something First");
//     callback()
// }

// const dosomething2 = ()=>{
//     console.log("CallBack Called");
// }

// dosomething(dosomething2)

// const loginUser = (email:string,pass:number,cb:any)=>{
//     setTimeout(()=>{
//         cb(email)
//     },2000)
// }

// const videoUser=(email:any,videoscb:any)=>{
//     setTimeout(()=>{
//             videoscb(["video1","Videos2","videos3"])
//     },2000)
// }
// loginUser("",1234,(email:any)=>{console.log(email),videoUser(email,(videos:any)=>{
// console.log(videos);
// })
// })
// // console.log(userEmail);

// const promiseFunc= (myMarks:any)=>{
//     return new Promise((resolve,reject)=>{
//         if(myMarks>=80){
//             resolve("Passed!")
//         }else{
//             reject("Failed!!")
//         }
//     })
// }
// promiseFunc(89).then((isPassed)=>{
//     console.log(isPassed);
    
// }).catch((err)=>{
//         console.log(err);
// })

// const loginUser = (email:string,pass:string)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(email==="hijabie@gmail.com"&&pass==="hijabrk"){
//             resolve("You're Login")
//         }else{
//             reject("Incorrect Password or Email")
//         }
//     },2000)
// })
    
// }
// const videoUser=(email:any)=>{
//     return new Promise((resolve,reject)=>{setTimeout(()=>{
//         if(email){
//             resolve(["Video1","Video2","Video3"])
//         }else{
//             reject("Please Provide Email")
//         }
// },2000)
// })
// }
// loginUser("hijabie@gmail.com","hijabrk").then((value)=>{
//     console.log(value);
//     return videoUser(value)

// }).then((video)=>{
//     console.log(video);
// })
// .catch((err)=>{
//     console.log(err);
// })

// // loginUser("",1234,(email:any)=>{console.log(email),videoUser(email,(videos:any)=>{
// // console.log(videos);

// const userDetails= async()=>{
//     try{
//         const EmailUser = await loginUser("hijabie@gmail.com","hiabrk")
//         console.log(EmailUser);
//         const userVideo=await videoUser(EmailUser)
//         console.log(userVideo);
//     }catch(err){
//         console.log(err);
//     }
// }

// userDetails()

// function transformArray<T, U>(arr:T[],CallBack:(element:T)=>U):U[]{
//     const transformArray:U[]=[]
//     for(const element of arr){
//         transformArray.push(CallBack(element))
//     }
//     return transformArray
// }

// const OriginalArray:string[]=["Hijab","Ahsaan","Rawa","Mujeeb","Fajar","Salahudin"]
// function doubleValue(val:any){
//         return val
//     }

// const TransformArray:string[]=transformArray(OriginalArray,doubleValue)
// console.log(TransformArray);


// const loginUser=(email:any,pass:any,cb:any)=>{
//         setTimeout(()=>{
//             return cb(email)
//         },2000)
// }

// const usereVideos=(email:any,callback:any)=>{
//     setTimeout(()=>{
//         callback(["Hijab","Ahsaan","Rawa","Mujeeb","Fajar","Salahudin"])
//     },2000)
// }
// loginUser("hijabie@gamil.com","hijabrk",(email:any,)=>{
//     console.log(email),    
//     usereVideos(email,(videos:any)=>{
//         console.log(videos);
//     })
// })

// loginUser("hijabie@gamil.com","hijabrk",(email:any,)=>{
//     console.log(email),    
//     usereVideos(email,(videos:any)=>{
//         console.log(videos);
//     })
// })

// loginUser("hijabie@gmail.com","hijabrk")
// .then((value)=>{
//     console.log(value);
//     return userVideos(value)
// }).then((videos)=>{
//     console.log(videos);
// }).catch((err)=>{
//     console.log(err);
// })

// const userDetails=async()=>{
//     try{
//         const userEmail=await loginUser("hijabie@gmail.com","hijabrk")
//         console.log(userEmail);
//         const videoUser=await userVideos(userEmail)
//         console.log(videoUser);
//     }catch(err){
//         console.log(err);
        
//     }
// }

// userDetails()

// async function performAsync():Promise <void> {
//     try{
//         console.log("Starts of Operation");
        
//         const result1=await asynfunction1()
//         console.log(`Operation 1 result ${result1}`);
        
//         const result2 = await asyncfunction2()
//         console.log(`Operation 2 result ${result2}`);
        
//         const result3 = await asyncfuntion3()
//         console.log(`Operation 3 resullt ${result3}`);
        
//         console.log("End of Operation");
        
//     }catch(err){
//         console.log(err);
//     }
// }

// async function asynfunction1():Promise <string> {
//     return "Operation 1 Sucess"
// }
// async function asyncfunction2():Promise <string> {
//     return ("Operation 2 Failed!!")
    
// }
// async function asyncfuntion3():Promise <string> {
//     throw new Error ("Operation 3 Sucess")
// }

// performAsync()

// async function withTimeout<T>(
//     asyncFunc: () => Promise<T>,
//     timeoutMilliseconds: number
//   ): Promise<T> {
//     return Promise.race([
//       asyncFunc(),
//       new Promise<T>((_, reject) => {
//         setTimeout(() => {
//           reject(new Error('Timeout reached'));
//         }, timeoutMilliseconds);
//       }),
//     ]);
//   }

//   // Example usage:
//   async function exampleAsyncFunction() {
//     // Simulate a long-running task
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     return 'Task completed successfully';
//   }

//   async function main() {
//     try {
//       const result = await withTimeout(exampleAsyncFunction, 2000);
//       console.log('Result:', result);
//     } catch (err:any) {
//       console.error('Error:', err.message);
//     }
//   }
//   main();

// async function q3

// async function withTimeout<T>(
//     asyncFunc:()=> Promise<T>,
//     timeoutMilliseconds:number
// ):Promise<T> {
//     return Promise.race([
//         asyncFunc(),
//         new Promise<T>((_,reject)=>{
//             setTimeout(()=>{
//                 reject(new Error('Timeout Reached'))
//             },timeoutMilliseconds)
//         }),
//     ])
// }

// async function exampleAsyncFunction() {
//     await new Promise((resolve)=>setTimeout(resolve,20000))
//     return "Todo Completed Sucessfully!!"
// }

// async function main() {
//     try{
//         const option=await withTimeout(exampleAsyncFunction,1500)
//         console.log(option);
        
//     }catch(err:any){
//         console.log(err.message);
//     }
// }
// main()


// function greett(name:string,ishappy:boolean):string{
//     return ishappy? `Hello! ${name} Abbasi` : `Hello ${name} Rabail`
// }

// console.log(greett("Hijab",false))

// class person{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
// }

// let person= new good()
// person.name="Alexx"
// console.log(person.name);


// class Student extends person{
//     // name:string="huzaifa"
//     rollNo:number=22
//     constructor(name:string,rollNo:number){
//         // this.name=name
//         super(name)
//         this.rollNo=rollNo
//     }
// }

// class Teacher extends person{
//     // name:string;
//     salary:number
//     constructor(name:string,salary:number){
//         super(name)
//         this.salary=salary
//     }
// }

// let teacher = new Teacher("Hijab",100000)
// let student = new Student("Ahsaan",1)

// console.log(teacher.name,teacher.salary);
// console.log(student.name,student.rollNo);

// let heros: string[] | undefined = ["SpiderMan", "Black Panther", "Black Adam"];
// let marvels: string[] = ["Iron Man", "Spider Man", "Captain America"];

// if (heros !== undefined) {
//   marvels.push(...heros);
// }

// console.log(marvels);


// var heros:(string | string[])[] = ["fantum,", "Saktiman,", "Barbil"];
// var dc_heros: string[] = ["Spiderman,", "superman,", "Ironman,"];
// heros.push(dc_heros);
// console.log(heros);


// class point{
//     x=10
//     y=10
//     scale(n:number):void{
//         this.x *= n
//         this.y *= n
//     }
// }

// console.log(new point());
// let add= new point()
// add.scale(5)

// console.log(add.x,add.y);

// class C{
//     private _length=0
//     public get length()  {
//         return this._length
//     }
    
//     set length(value) {
//         this._length = value
//     }
    
// }
// let abc = new C()
// console.log(abc);
// abc.length=10
// console.log(abc);
// let fName:string="tahira Jabeen"
// console.log(fName);

// type student={
//     name:string,
//     age:number
// }

// let Student1:student={
//     name:"Hijabie",
//     age:20
// }

// console.log(Student1);


// // class Person {
// //     name:string;
// //     id:number;
// // }

// class C{
//     private _length=0
//     get length(){
//         return this._length
//     }
//     set length(value){
//         if(value>35){
//             this._length=value
//         }
//     }
// }

// let c1= new C()
// c1.length=9*5-5
// console.log(c1.length);


// interface Iperson{
//     name:string
// }
// interface Iperson2{
//     age:number
// }

// class person {
//     name:string
//     age:number
//     static serialNo: number = 0
//     constructor (name:string,age:number){
//         this.age=age
//         this.name=name
//         person.serialNo +=1
//     }
// }

// let person1 = new person("Hijabie",18)
// console.log(person.serialNo);
// let person2 = new person("Hijabie",18)
// console.log(person.serialNo);
// let person3 = new person("Hijabie",18)
// console.log(person.serialNo);

// let f = (string:any) => (string); // Function f that takes a string and returns it

// f = (x) => '(' + x + ')'; // Reassigning f to a function that wraps the input string in ''

// let h = []; // Create an empty array

// h.push(f); // Push the function f into the array h

// console.log(h[0]('h')); // Call the first function in the array with 'h' as an argument and log the result
// console.log(h[0]('hijab rabail khan')); // Call the first function in the array with 'h' as an argument and log the result

// // const a =5
// // a++
// // console.log(a);

// if(true){
//     let a=4
//     console.log(a);
// }
// else{
//     let a="string"
//     console.log(a);
// }

// // interface Animal {
// //     name:string
// // }
// // interface cat extends Animal{meow();}
// // function isCat(a:Animal){
// //     return true
// // }
// // var x:Animal
// // if(isCat(x)){
// //     x.meow()
// // }

// // type callbackwithString = (string)=>void
// // function usingcallback(f:callbackwithString){
// //     f("This is a string")
// // }


// // let mytype={name:"zia",id:1}
// // mytype={id:2,name:"Tom"}
// // mytype={id:3,name:"Tom",gender:false}


// // console.log(mytype);
// // interface Animal {name: string; }
// // interface Cat extends Animal { meow(); }

// // function isCat(a: Animal): a is Cat {
// //   return a.name === 'kitty';
// // }

// // var x: Animal;

// // if(isCat(x)) {
// //   x.meow(); // OK, x is Cat in this block
// // }

// class Animal{
//     title:string;
//     constructor(title:string){
//         this.title=title
//     }
//     eat(){
//         console.log(`The ${this.title} is very cute`);
//     }
// }

// class Human{
//     title:string;
//     age:number
//     constructor(title:string,age:number){
//         this.title=title
//         this.age=age
//     }
//     eat(){
//         console.log(`The ${this.title} is very cute`);
//     }
// }

// class robot{
//     title:string;
//     constructor(title:string){
//         this.title=title
//     }
// }

// let a =new Animal("Dog")
// let e= new Human("Hijabie",20)
// let r:robot=new robot("r2-d2")


// a = new Human("Hijabie",20)

// e=new Animal("Dog")

// class Human {
    
//     name: string;
    
//     constructor(name: string){
//         this.name = name;
//     }
// }

// class Animal {
//     name: string;
//     age: number;
    
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     eat(quantity: number){
//         console.log(this.name + " is a Human and is eating");
//     }
// }


// let h:Human = {name:"Hijabie"}
// let d ={name:"Fajar",age:25}
// let h1:Human =d
// // console.log(h1);

// let ishuman:boolean = h instanceof Human
// console.log(ishuman);


// let a2:Animal={name:"Dog",age:10,eat:function(){
//     console.log(`the ${a2.name} is very cute`)
// }}

// a2.eat(4)


// class BigAnimal {
//     private name:string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends BigAnimal {
// 	constructor() { super("Rhino"); }
// }

// class Employee {
//     private name:string;
//     constructor(theName: string) { this.name = theName; }	
// }

// var animal = new BigAnimal("Elephant");
// var rhino = new Rhino();
// var employee = new Employee("Bob");

// console.log(rhino);

class A
{
    constructor()
    {
        this.MyvirtualMethod();
    }

    protected MyvirtualMethod(): void
    {
        console.log("A")
    }
}

class B extends A
{
    private testString: string = "B";

    public MyvirtualMethod(): void
    {
        console.log(this.testString); // This becomes undefined
    }
}

let obj = new B();
obj.MyvirtualMethod()

abstract class Base {
    foo(): number { return this.bar(); }
    abstract bar() : number;
}

class E extends Base { // okay -- implements abstract method
    bar() { return 1; }
}

var obj1 = new E();//Error, cannnot create a instance of a Abstract class

console.log(obj1.foo());


abstract class shape{
    abstract area():number
}

class Circle extends shape{
    constructor(private radius:number){
        super()
    }
    area(): number {
        return this.radius
    }
}

let circle = new Circle(45)
console.log(circle);


class rectangle extends shape{
    constructor(private height:number,private width:number){
        super()
    }
    area(): number {
        return this.height,this.width
    }
}

let Rectangle=new rectangle(4,9)
console.log(Rectangle);
// Create an abstract class BankAccount with properties like accountNumber and balance, and abstract methods deposit() and withdraw(). Then, create concrete classes SavingsAccount and CheckingAccount that extend BankAccount and provide implementations for deposit and withdrawal methods.

abstract class BankAccount{
    accountNumber:string;
    balance:number;
    constructor(accountNumber:string,balance:number){
        this.accountNumber=accountNumber
        this.balance=balance
    }
    abstract methodDeposit(amount:number):void
    abstract withDraw(amount:number):void
    getaccountinfo():string{
        return `Account Number: ${this.accountNumber}, Balance: $${this.balance.toFixed(2)}`;
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountNumber:string,balance:number){
        super(accountNumber,balance)
    }
    methodDeposit(amount:number): void {
        this.balance += amount
    }
    withDraw(amount:number): void {
        if(this.balance<=amount){
            this.balance -= amount
        }else{
            console.log("Insufficient Balance");
        }
}
}
class CheckingAccount extends BankAccount{
    constructor(accountNumber:string,balance:number){
        super(accountNumber,balance)
        
    }
    methodDeposit(amount:number): void {
        this.balance += amount
    }
    withDraw(amount:number): void {
        if(this.balance<=amount){
            this.balance -= amount
        }else{
            console.log("Insufficient Balance");
        }
}
}

let Checking = new CheckingAccount("shchde",1000)
let saving = new SavingsAccount("chdhekje",1500)
Checking.methodDeposit(500)
Checking.withDraw(200)
saving.withDraw(500)
saving.methodDeposit(100)
console.log(saving,saving.getaccountinfo());
console.log(Checking,Checking.getaccountinfo());

// Create an abstract class Employee with properties like name and salary, and an abstract method calculateSalary(). Then, create concrete classes HourlyEmployee and SalariedEmployee that extend Employee and provide implementations for calculateSalary().

abstract class Employee{
        protected name:string;
        protected salary:number

        constructor(name:string){
            this.name=name
            this.salary=0
        }

        abstract calculatedSalary():void

        getDetails():string{
            return `Name: ${this.name}, Salary: $${this.salary.toFixed(2)}`
        }
}

class HourlyEmployee extends Employee{
    constructor(name:string,private hourlyworked:number,private hourlyrate:number){
        super(name)
    }
    calculatedSalary(): void {
        this.salary = this.hourlyrate * this.hourlyworked
    }
}
class SalariedEmployee extends Employee{
    constructor(name:string,private monthlypaid:number,){
        super(name)
    }
    calculatedSalary(): void {
        this.salary = this.monthlypaid
    }
}

let hourly=new HourlyEmployee("Ahsaan Abbasi",90,40)
let monthly = new SalariedEmployee("Mujeeb",3000)

hourly.calculatedSalary()
monthly.calculatedSalary()

console.log(hourly.getDetails());
console.log(monthly.getDetails());

// Create an abstract class Animal with properties like name and age, and an abstract method makeSound(). Then, create concrete classes for different animals (e.g., Dog, Cat, Bird) that extend Animal and provide implementations for makeSound()

// abstract class Animal{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     abstract makeSound():void
//     getinfo():string{
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }

// class Dog extends Animal {
//     constructor(name:string,age:number) {
//         super(name,age)
//     }
//     makeSound(): void {
//         console.log(`This ${this.name} Barks: Woof! Woof!`)
//     }
// }
// class Bird extends Animal {
//     constructor(name:string,age:number) {
//         super(name,age)
//     }
//     makeSound(): void {
//         console.log(`This ${this.name} Wripping: Chou! Chou!`)
//     }
// }
// class cat extends Animal {
//     constructor(name:string,age:number) {
//         super(name,age)
//     }
//     makeSound(): void {
//         console.log(`This ${this.name} Barks: Meow! Meow!`)
//     }
// }

// let citti=new cat("Mano",4)
// let brave=new Dog("german",5)
// let pigeon=new Bird("gulabo",2)

// citti.makeSound()
// brave.makeSound()
// pigeon.makeSound()

// console.log(citti.getinfo());
// console.log(brave.getinfo());
// console.log(pigeon.getinfo());

// Create an abstract class Vehicle with properties like make, model, and year, and an abstract method start(). Then, create concrete classes for different types of vehicles (e.g., Car, Motorcycle, Truck) that extend Vehicle and provide implementations for start().

abstract class vehicles{
    make:string
    model:number|string
    year:number
    constructor(make:string,model:number|string,year:number){
        this.make=make
        this.model=model
        this.year=year
    }
    abstract start():void
    getinfo():string{
        return `Make: ${this.make}, Model: ${this.model}, Year${this.year}`;
    }
}

class Car extends vehicles{
    constructor(make:string,model:number|string,year:number){
        super(make,model,year)
    }
    start(): void {
        console.log(`Starting the ${this.year} ${this.make} ${this.model} car.`)
    }
}
class bike extends vehicles{
    constructor(make:string,model:number|string,year:number){
        super(make,model,year)
    }
    start(): void {
        console.log(`Starting the ${this.year} ${this.make} ${this.model} bike.`)
    }
}
class Truck extends vehicles{
    constructor(make:string,model:number|string,year:number){
        super(make,model,year)
    }
    start(): void {
        console.log(`Starting the ${this.year} ${this.make} ${this.model} truck.`)
    }
}

let car= new Car("Hundayi","Sonata",2023)
let Bike= new bike("Harley-Davidson", "Sportster", 2021)
let truck= new Truck("Ford", "F-150", 2023)

car.start()
Bike.start()
truck.start()

console.log(car.getinfo());
console.log(Bike.getinfo());
console.log(truck.getinfo());

class Human {
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

class Animal {
    private name: Human;
    
    constructor(Human:Human){
        this.name = Human
    }
    
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}

class Robot {
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
}




let h: Human = new Human("Tom");

console.table(h,)
// let a: Animal = new Animal("Goat");
// let r: Robot = new Robot("R2-D2");

// let r0: Robot = new Animal("Donkey");//now because of pivate variable this is not possible

// let h2 = h;
// h = a;//both have same properties and methods therefore are compatible but because of private variable not same type
// h.eat();
// let a2 = a;

// let r2 = r;
// r = a;//Animal has a name, Robot also has a name, but now it is an Error
// a = r2;//Error, Robot does not have eat method


let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray);

// text.length
console.log(text.length);

const array1 = [2,5,6,67];
const array2 = [2,3,4,5];

let resullt=array1.concat(array2)
console.log(resullt);

// array1.forEach(element => console.log(element));

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// plants.pop()
// // expected output: "tomato"

// console.log(plants);
// const array4 = [1, 2, 3];

// array4.unshift(4,5);

// console.log(array4);
// // expected output: Array [2, 3]

// // console.log(firstElement);

// const warriors = ["Artemisia", "Boudica",];

// let stringOrArrayOfNumbers: string | number[]=[]
// stringOrArrayOfNumbers.push()

// // Type is an array of elements that are each either a number or a string
// let arrayOfStringOrNumbers: (string | number)[]=[]
// arrayOfStringOrNumbers.push("Hijabie",55)


// Type: (songs: string[]) => number
// function singSongs(songs: string[]) {
// for (const song of songs) {
// console.log(`${song}`);
// }
// // return songs.length;
// }

// let valo = singSongs(["Apna Bana le","Teri Metti"])

// console.log(valo);

// const songs = ["Juice", "Shake It Off", "What's Up"];
// function runOnSongs(getSongAt: (index: number) => string) {
// for (let i = 0; i < songs.length; i += 1) {
// console.log(getSongAt(i));
// }
// }
// function getSongAt(index: number) {
// return `${songs[index]}`;
// }
// runOnSongs(getSongAt); // Ok
// function logSong(song: number) {
// return `${song}`;
// }
// runOnSongs(logSong);

let array=[3,18,24,8,30]
// let result=array.map((value)=>{
//     return value*3
// }).forEach((value)=>{
//     console.log(value);
//     // return value
// })

// console.log(result);
let a1=array.join('')
console.log(a1);

const rightorfalse = array.every((cuurentvalue)=>cuurentvalue<8)
console.log(rightorfalse);

const name=["Hijabie","AhsaanAbbasi","Rawa","Mujeeb","Fajar","Hijabie"]
let result=name.filter((val)=>val.length>6)
console.log(result);

let index=name.indexOf('Hijabie',3)
console.log(index)

name.reverse()
// name.join("")
console.log(`Reverse: ${name.join(" ")}`);

let initialValue=0
const sumWithInitial=array.reduce((previousValue:number,currentValue:number)=>
                previousValue+currentValue,initialValue
)
console.log(sumWithInitial);

let indexval=2
console.log(`Using an index of ${indexval} the item returned is ${array.at(indexval)}`)

indexval=-2
console.log(`Using an index of ${indexval} the item returned is ${array.at(indexval)}`)

const found = array.find((element )=> element<10)
console.log(found);

let some=array.some((value)=>value%2==0)
console.log(some);

let arrayString:string|number[]=[]
arrayString.push()
// let arre:any = []

let myLove={id:555,name:"Hijabie"}

// myLove={id:56,name:"Humna"}
// myLove={id:66,name_name:"Humna"}
// myLove={id:55,name:"Humna",age:22}

let myLove2={id:786, name:"Hijabie",age:20}
myLove=myLove2

console.log(myLove);

type PoemWithpages={
    name:string,
    pages:number
}

type PoemwithRhymes={
    name:string,
    rhymes:boolean
}

type Poem = PoemWithpages|PoemwithRhymes

const poem:Poem=Math.random()>0.5
? {name:"The Hijabie",pages:29}
:{name:"The Abbasi",rhymes:true}

poem.name

if("pages" in poem){
    poem.pages
}else{
    poem.rhymes
}

type Person={
    name:string,
    pages:number
}

type person2={
    name:string,
    rhymes:boolean
}

type Candidate = Person&person2

const candidate:Candidate={
    name:"Hijabie",
    pages:20,
    rhymes:true
}
for(const fresh in candidate){
    console.log(fresh)
}

function singAllsongs(singer:string,...songs:string[]){
    for(const song of songs){
        console.log(`${song} by ${singer}`)
    }
}
singAllsongs("Hijabie","I love you","Apna Bana le")


function singsong(songs:string[],count=0):number{
    return songs.length?singsong(songs.slice(1),count+1):count
}
let sing = singsong(["Hijabie",],8)
console.log(sing);

type inputOutput=(songs:string[],count?:number)=>number

// Declare a function that matches the inputOutput function type
const myFunction: inputOutput= (songs:any, count:any) => {
    // Your implementation here
    // For example, you can calculate a result based on songs and count
    return songs.length + (count || 0);
  };
  
  // Use the declared function
  const result3 = myFunction(['Song 1', 'Song 2', 'Song 3'], 10);
  console.log(result3); // This will output 13
  
  // You can also call the function without the count parameter
  const resultWithoutCount = myFunction(['Song 1', 'Song 2', 'Song 3']);
  console.log(resultWithoutCount); // This will output 3

    const Person1=["Hijabie","Ahsaan","Rawa","Mujeeb"]
    function CurrentPerson(getperson:(index:number)=>string){
            for(let i=0; i<Person1.length; i++){
                console.log(Person1[i])
            }
    }
    function getPerson(index:number){
        return `${index}`
    }
    
    function logperson(song:number){
        return `${song}`
    }
    CurrentPerson(getPerson)
    CurrentPerson(logperson)

    let stringreturnNumber: ()=> string|undefined
    
    // maybereturnString("Hijabie")

    let singer:(song:string)=>string
    singer=function(song){
        return `Singing: ${song.toUpperCase()}`
    }

    const Person=["Hijabie","Ahsaan","Rawa","Mujeeb"]
    Person.forEach((song,index)=>{
        console.log(`${song} is at index ${index}`);
    })

    type StringtoNumber = (input:string)=>number

    let stringtonumber:StringtoNumber
    stringtonumber = (input)=>input.length
    // stringtonumber("Hijabie")
    // stringtonumber = (input)=>input.toUpperCase() //Error

    type NumbertoString=(input:number)=>string

    function userinput(numbertostring:NumbertoString){
                console.log(`The String is ${numbertostring(1234)}`);
    }

    userinput((input)=> ` ${input} Horray!`)
    // userinput((input)=> input*3)//Error
    
    // function logSong(song:string | undefined):void{
    //     if(!song){
    //         return
    //     }
    //     console.log(song);
    //     return true
    // }

    let songlogger:(song:string)=>void
    songlogger=(song)=>{
        console.log(song);
    }
    songlogger("HIjabie")

    function returnvoid(){
        return
    }

    let lazyValue:string|undefined
    // lazyValue=returnvoid() //Error 


function CreatDate(timeStamp:number):Date
function CreatDate(month:number,day:number,year:number):Date
function CreatDate(monthorStampTime:number,day?:number,year?:number){
    return day===undefined || year == undefined
    ? new Date(monthorStampTime)
    :new Date(year,monthorStampTime,day)
}

// console.log(CreatDate(33444200));
// console.log(CreatDate(12,23,2024));
let value = CreatDate(10,17,2023)
console.log(value);


// type StaffAccount=[number,string,string,string?]

// const staff:StaffAccount[]=[
//     [0,"Hijabie","hijabie@gmail.com"],
//     [1,"Ahsaan","mahsaanabbasi@gmail.com"],
//     [2,"Rawa","rivkhan@gmail.com","Software Enginner"]
// ]
// // type StaffAccount = [number, string, string, string?];

// // const staff: StaffAccount[] = [
// //     [0, "Adankwo", "adankwo.e@"],
// //     [1, "Kanokwan", "kanokwan.s@"],
// //     [2, "Aneurin", "aneurin.s@", "Supervisor"],
// // ];

// type PayStubs=[StaffAccount,...number[]]

// const payStubs:PayStubs[]=[
//     [staff[0],250],
//     [staff[1],250,260],
//     [staff[0],300,300,300],
// ]
// // type PayStubs = [StaffAccount, ...number[]];

// // const payStubs: PayStubs[] = [
// //     [staff[0], 250],
// //     [staff[1], 250, 260],
// //     [staff[0], 300, 300, 300],
// // ];
// const FirstMonthPay=payStubs[0][1]+payStubs[1][1]+payStubs[2][1]
// const SecondMonthPay=payStubs[1][2]+payStubs[2][2]
// const ThirdMonthPay=payStubs[2][2]
// console.log(ThirdMonthPay);

// // const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
// // const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
// // const monthThreePayments = payStubs[2][2];

// // // declare function Calculatepayfee(id:number,...arg:[...number[]]):number

// // // Calculatepayfee(staff[0][0],payStubs[0][1])
// // // Calculatepayfee(staff[2][0],payStubs[1][1],payStubs[2][1])

// declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

// calculatePayForEmployee(staff[0][0], ...payStubs[0].slice(1));
// calculatePayForEmployee(staff[1][0], ...payStubs[1].slice(1, 3));
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































