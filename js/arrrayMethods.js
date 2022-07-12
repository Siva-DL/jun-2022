let arr = [];
let arr1 = new Array();

arr[0] = 1;
arr[1] = 2;
arr[3] = 2;
arr[100] = 2;

console.log(arr);

for (let val in arr) {
  if (arr[val] !== null) {
    console.log(arr[val]);
  }
}

// push, unshift - [-1,0,1,2,3,]
// pop, shift - remove values

arr1.push("123");
arr1.push("133");
arr1.push("143");
arr1.push("153");

arr1.unshift("023");
arr1.unshift("-123");

console.log(arr1);

// console.log(arr1.pop());
// console.log(arr1.pop());

// console.log(arr1.shift());
// console.log(arr1.shift());

// delete arr1[2]; // empty
// splice(start, length);

arr1.splice(2, 1, "newVal");

console.log(arr1);

// Indexof, lastIndexOf, includes

console.log(arr1.indexOf("123")); // -1 | +ve
console.log(arr1.lastIndexOf("123")); // -1 | +ve
console.log(arr1.includes("133")); // true | false

if (arr1.indexOf("123") === -1) {
  arr1.push("123");
}

let firstName;

console.log(arr1);

// slice:
let slicedVal = arr1.slice(2, 3);
console.log(slicedVal);
console.log(arr1);

// split, join | string vs array

let str = "loremipsum";
let str1 = "t-e-s-t";

console.log(str.split(""));
console.log(str1.split("-"));
console.log(str1.split("-").join(""));

// concat

let resArr = arr1.concat(arr);

console.log(resArr);
