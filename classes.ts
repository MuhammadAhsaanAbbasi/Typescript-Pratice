class mylife{
    [s:string]:boolean|((s:string)=>boolean)
    firstName=false
    lastName=true
    check(s:string){
        return this[s] as boolean
    }
    check2(s:string){
        return this[s] as boolean
    }
}

const a=new mylife()
// a.check("firstName")
console.log(a.check("firstName"));
