// var (function-scoped)
var x = 10;
if (true) {
    var x = 20;
    console.log(x); // This will output 20
}
console.log(x); // This will output 20
// The variable x is function-scoped, so the change inside the if block affects the outer x.

// let (block-scoped)
let y = 10;
if (true) {
    let y = 20;
    console.log(y); // This will output 20
}
console.log(y); // This will output 10
// The variable y is block-scoped, so the change inside the if block does not affect the outer y.

// const (block-scoped and cannot be reassigned)
const z = 10;
// z = 20; // This will throw an error because z is a constant and cannot be reassigned
console.log(z); // This will output 10

// const with objects(can modify properties but cannot reassign the object)
const obj = { key: 10 };
obj.key = 20; // This is allowed
console.log(obj.key); // This will output 20
// obj = { key: 30 }; // This will throw an error because we cannot reassign the object itself
