// indexof, lastIndexof, search, substring, slice, lowercase, uppercase, replace,

let str =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum Nobis, accusantium";

console.log(str.indexOf("ipsum", 7)); // -1 | 6
console.log(str.lastIndexOf("ipsum", 56)); // -1 | 0
console.log(str.search("dolor")); // 12

console.log(str.substring(6, 12));

let extractStr = "adipisicing";
let extractStr1 = str.indexOf("adipisicing");
//  13+10
// console.log(extractStr1);
console.log(str.substring(extractStr1, extractStr.length + extractStr1));
console.log(str.slice(extractStr1, extractStr.length + extractStr1));

console.log(str.replace("ipsum", "newText"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
// console.log(str.contains("ipsum"));
