// let  trafficLight: boolean|"Red"|"Green"|"Yellow" =false;
// trafficLight="Red"

// trafficLight=false

// trafficLight="Green"

// trafficLight=false

// trafficLight="Yellow"

// console.log(trafficLight)

// function renderValue(value: string|number){
//     let age = renderValue
//     console.log(age)
//     if(typeof value==="string"){
//         value.toUpperCase()
//     }
//     else{
//         value.toFixed(3)
//     }
//     return age
// }
// renderValue(20)

// interface ItTeacher{
//     name: string
//     salary: any
// }

// let teacher:ItTeacher={
//     name:"Hamzah",
//     salary:10000
// }

// console.log(teacher)

// let myname={id:1,name:"Tom"}
// myname;

// myname={id:2,name:"Abbasi"}

// var myname2={id:2,name:"Ahsaan",age:4}

// myname=myname2


// interface Deal1{
//     food:string,
//     drink:string,
// }

// interface Deal2{
//     food:string,
//     drink:string,
// }

// let hamzahTray:Deal1={
//     food:"Biryani",
//     drink:"Pepsi",
// }

// let okasahTray:Deal2={
//     food:"Biryani",
//     drink:"Pepsi",
// }

// /*let hamzah: Deal1 =hamzahTray

// interface Tube {
//     diameter:number,
//     length:number,
// }

// let tube:Tube={
//     diameter:29,
//     length:50
// }*/

// // ball=tube

// //userinput
// let user1={name:"Zia",id:1}
// let user2={name:"Hammad",id:2,age:25}

// user1=user2

// // console.log(user1.age)


// type Author={
//     firstName:string;
//     lastName:string
// }

// type Book={
//     name:string;
//     author:Author;
// }

// let book:Book={
//     name:"Javascript",
//     author:{
//         firstName:"Ahsaan",
//         lastName:"Abbasi"
//     }
// }

// console.log(book.author)

// // interface Student{
// //     teacherID
// // }

// let k:any=10
// k="Abbasi"
// k=[1,2,3]
// k=Boolean
// k={name:"okasha"}

// let m:boolean=k


// type custom=string & number

// let yourName:unknown="zia"
// console.log((yourName as string).length)

// function error(message: string): never {
//     throw new Error(message);
//     }

//     let myname3:unknown="zia"
//     console.log((myname3 as string).length)

//     interface Manager {
//         name: string,
//         subordiates?: number
//     }
    
//     let storeManager: Manager = {
//         name: "Bilal"
//     }


//     const enum Color{Red, Green, Blue}
//     var c:Color=Color.Green

//     const enum Color1 {Red = 1, Green=5, Blue};
// var colorName= Color1["Blue"];
// console.log(colorName);

// type Todos={
//     text:string,
//     id:number,
//     completed:true
// }

// let fruits=["Apple","Mango","Orange"]
// let result = fruits.filter(item => item.length>5)
//     console.log(result.length)

    type okasahTray = {
        name:string,
        age:number,
        class:string
    }

    const okasha:okasahTray={
        name: "Okasha",
        age: 18,
        class:"Six"
    }  

    console.log(okasha);
    

interface subject {
    name:string,
    age:number,
    class?:string
}

const sub:subject={
    name:"Hamzah",
    age:22,
    class:"Metaverse"
}

console.log(sub)