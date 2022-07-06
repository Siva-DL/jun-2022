demo();
demo();
demo();

function demo() {
  console.log(10 + 10);
}

// invoking/calling a functions
// demo();

var demo1 = function () {
  console.log(20 + 20);
};

demo1();

// Arrow
var ArrowDemo = () => {
  console.log(20 + 20);
};

ArrowDemo();

// IIFE/ Self Invoking - Encapsulation

(function () {
  console.log("12312312312");
  var a = 10;
})();

console.log(typeof demo);

// ---------------------------------
// Pure Function;
function userName(name) {
  // console.log(name);
  return name;
}

var _name = "xyz";

console.log(userName("xyz") + " 123");
userName("abc");
userName("def");

// first Class Function:
console.log(add(10, 10));
console.log(mul(2));

function add(a, b) {
  return a + b;
}

function mul(a) {
  return add(1, 10) * a;
}

// constructor functions:
// Revist: on this
function User(name, age) {
  this.name = name;
  this.age = age;
}

var u1 = new User("x", 1);

console.log(u1);
