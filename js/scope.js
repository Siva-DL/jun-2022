// Hoisting
// var --> not constant,
// let, const - Block Scope  and Const - fixed, let - not Fixed
var a, b, c, d;
var abc = "10"; // Global Scope

const user = "admin";
let password = "admin";

var demo = function () {
  const user = "admin1";
  password = "1234";
  var def = 20; // local Scope
  a = 20;
  //   console.log(abc + def);
  console.log(user, password);
  return def;
};

{
  const user = 123;
}

console.log(demo());
console.log(a);

const retVal = function () {
  //   console.log("12312312312");
  var abcde = 1000;
  var gef = "new Value";
  //   console.log(abcde);
  return {
    abcde,
  };
};

console.log(retVal().abcde);
console.log(retVal().gef);
// console.log(abcde);
