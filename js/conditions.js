// if, switch, ternary

let userName = "Dev";

console.log(userName.length);

// if (userName.length !== 0) {
//   // true
//   console.log("true and the value is 123");
// } else {
//   // false
//   console.log("false and the value is 0000");
// }

// if-elseIf-else

// if (userName === "abcde") {
//   console.log("Hello abcde");
// } else if (userName === "Dev") {
//   console.log("Hello Developer");
// } else if (userName === "Test") {
//   console.log("Hello Tester");
// } else {
//   console.log("Hello Stranger");
// }

// if (userName == "QA") {
//   console.log("Hello", userName);
// }

console.log(userName);

// Switch
userName = "Tester";
switch (userName) {
  case "Dev":
    console.log("Hello", userName);
    break;
  case "Test":
    console.log("Hello Tester Please ", userName, "the Code");
    break;
  case "QA":
    console.log("Hello QA Please Check the Quality with ", userName, " team!");
    break;
  default:
    console.log("Not matching with the team");
    break;
}

// Ternary
userName = "Dev";
let Dev = "jr";
const isCheck =
  userName === "Dev" ? console.log("hello Sr.") : console.log(false);

const isTrue =
  userName === "Dev"
    ? Dev === "jr"
      ? console.log("Hello jr.")
      : console.log("hello Sr.")
    : console.log(false);
