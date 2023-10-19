class mylife {
    firstName = false;
    lastName = true;
    check(s) {
        return this[s];
    }
    check2(s) {
        return this[s];
    }
}
const a = new mylife();
// a.check("firstName")
console.log(a.check("firstName"));
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
const abc = new C();
abc.length;
abc.length = 20;
console.log(abc.length);
export {};
