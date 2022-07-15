// function personDetails() {
//   return this.name + "-" + this.contact + " " + this.salary;
// }

let person = {
  name: "john",
  contact: 123,
  salary: 12244,
  personDetails(age) {
    return this.name + "-" + this.contact + " " + this.salary + "-" + age;
  },
};

console.log(person.personDetails(25));

let employee = {
  name: "test",
  contact: 123,
  salary: 1234,
};
// call, apply and bind

console.log("call", person.personDetails.call(employee, 30));
console.log("apply", person.personDetails.apply(employee, [30]));

// &&

const bindVal = person.personDetails.bind(employee, 30);

console.log(bindVal());

// call by Ref and Call By values

let a = 10;
let b = a;
b = 20;
console.log(a);

// -----------------------------
let b1 = { name: "x" };

let b2 = b1;
b2.name = "y";

console.log(b1);
