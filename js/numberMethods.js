let num = "10.12";

// console.log(typeof +num);
// console.log(+num + 10);

// parseInt, parseFloat
console.log(parseInt(num) + 10); // 20.00
console.log(parseFloat(num) + 10);

// Decimal
// 0.00
console.log(+(parseFloat(num) + 10).toFixed(2));
console.log(+(parseFloat(num) + 10).toPrecision(4));

// Math.round(), Math.ceil(), Math.floor(), Math.random();

// 10.4 - 10
// 10.5 - 11

console.log("Math.round", Math.round(10.5));
console.log("Math.ceil", Math.ceil(10.0000001));
console.log("Math.floor", Math.floor(10.9999999999));

console.log("Math.random", Math.ceil(Math.random() * 10) + ".jpg"); // 1 - 10

// throw two dice and sum the value, with MathRandom:
// check with a guess number using conditions/switch:
// if match print some message in log.

// let q1 = prompt("please choose a number b/w 1-12");
// console.log(q1);

// (q1 === randomNumber) - correct | wrong

//string -----------------------------------
let str = "           Test            ";
console.log(str.trim());
//string -----------------------------------
