// Objects
// var person = {};
var person = new Object();

person.name = "xyz";
person.cost = 12;
person.color = "red";
person["full name"] = "abc xyz";

console.log(person.name);
console.log(person["full name"]);

// Map,

// var emp = new Map([["empId", 123]]);
var emp = new Map();

emp.set("empId", "345");
console.log(emp.get("empId"));
