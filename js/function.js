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
})();

console.log(typeof demo);
