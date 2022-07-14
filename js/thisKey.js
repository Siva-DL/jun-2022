// console.log(this);
// this.customName = "xxyyzzzzzzzzzzzzzzzzz";

function demo() {
  console.log(this);
}

// demo();

const demo1 = function () {
  function demo123() {
    console.log(this);
  }
  //   demo123();
};

// demo1();

var arr = [{ name: "xyz" }];

arr.forEach((element) => {
  console.log(this);
});

// Object

const obj = {
  name: "abc",
  age: 20,
  getFullDetails() {
    console.log(this);
  },
};

// obj.getFullDetails();

// Events - this

// Constructors:

function Person(name, age, contact) {
  this.name = name;
  this.age = age;
  this.contact = contact;
  this.getFullName = function () {
    return this.name;
  };
}

function Emp(salary) {
  this.salary = salary;
}

Emp.prototype.getSalary = function () {
  return "the salary for EMP is," + this.salary;
};

let p1 = new Person("somey", 30, 131 - 311 - 111);
let e2 = new Emp(1000);

e2.prototype = new Person("somey", 30, 131 - 311 - 111);

console.log(e2.prototype.name);
console.log(e2.getSalary());

// Call, Apply and Bind
