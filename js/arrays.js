var arr = [
  1,
  true,
  "xyz",
  null,
  undefined,
  { name: "abcd" },
  ["red", "green", ["black", "white"]],
];

console.log(arr);
console.log(arr[2]);
arr[5].age = 30;
console.log(arr[5].name);

console.log(arr[6][2][0]);

// Object - dot/['key'];
// Array - indexPosition [0],[1]

// typeOf

console.log(typeof "ads#12312"); // string
console.log(typeof Infinity); // number
console.log(typeof true); // boolean
console.log(typeof undefined); //
console.log(typeof null); // object

console.log(typeof []); // object
console.log(typeof {}); // object

var price = "10";
price = price + 10;
console.log(price);
console.log(typeof price);
