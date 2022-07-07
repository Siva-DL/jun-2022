let a = 10; // = assign

console.log(typeof a);
console.log(typeof "10");

console.log(a == "10"); // true | == compare
console.log(a === "10"); // false | === compare | typeof values

let abc = 10;
// increment
console.log(abc++); // 10
console.log(abc++); // 11
console.log(abc++); // 12

// decrement
console.log(abc--); // 13
console.log(abc--); // 12
console.log(abc--); // 11

// +=, -=, /=, *=

let def = 10;
// def = def + 10;
def += 30; // 40
def -= 30; // - 10
def *= 30; // * 300
def /= 30; // - 10
console.log("result of def is: ", def);

// && (AND), || (OR)

console.log(1 === 1 && 2 === 2); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// ------------------------------------
console.log("---------------------------------");
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log("---------------------------------");

console.log(!!true);

// Concatination:

console.log(10 + 10); // 20
console.log(10 + "10"); // 1010
let mr = "Mr";
let userName = "Modi";
// console.log(mr + ". " + userName);
console.log(`hello ${mr}. ${userName}`); // better
