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
export {};
