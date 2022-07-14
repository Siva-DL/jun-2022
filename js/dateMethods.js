let date = new Date();

console.log(date);

let getDay = date.getDate();
const mnts = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug"];
let getMonth = date.getMonth() + 1;
console.log(mnts[getMonth]);

let year = date.getFullYear();

console.log(`${getDay}/${getMonth}/${year}`);

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// console.log(date.getTime());

// 7/14/2022
// 14/7/2022
// 14/7/22
// 14th July 2022
