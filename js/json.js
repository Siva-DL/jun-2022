let users = [
  { name: "abc", contact: 123 },
  { name: "def", contact: 345 },
  { name: "xyz", contact: 878 },
];

console.log(users[0].name); // abc
console.log(users[1].name); // abc
console.log(users[2].name); // abc

let users1 = [
  { name: "abc", contact: 123 },
  { name: "def", contact: 345 },
  { name: "xyz", contact: 878 },
];

// JSON.stringify()

console.log(users);
users1 = JSON.stringify(users1);
console.log(users1);
console.log(users1[0]);

// JSON.parse()
console.log(JSON.parse(users1));
