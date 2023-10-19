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

class C{
    private _length=0
    get length(){
        return this._length
    }
    set length(value){
        this._length=value
    }
}

const abc=new C()
abc.length

abc.length=20
console.log(abc.length);
abc.length=50
console.log(abc.length);
