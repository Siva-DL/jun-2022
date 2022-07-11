//  for, for-in, for-of, for-Each, while
var arr = [1, 2, 3, 4];

const countriesWithFlag = [
  {
    name: "Afghanistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
    iso2: "AF",
    iso3: "AFG",
  },
  {
    name: "Albania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    iso2: "AL",
    iso3: "ALB",
  },
  {
    name: "Algeria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
    iso2: "DZ",
    iso3: "DZA",
  },
  {
    name: "Andorra",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
    iso2: "AD",
    iso3: "AND",
  },
  {
    name: "Angola",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
    iso2: "AO",
    iso3: "AGO",
  },
  {
    name: "Anguilla",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
    iso2: "AI",
    iso3: "AIA",
  },
  {
    name: "Antigua and Barbuda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
    iso2: "AG",
    iso3: "ATG",
  },
  {
    name: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    iso2: "AR",
    iso3: "ARG",
  },
  {
    name: "Armenia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
    iso2: "AM",
    iso3: "ARM",
  },
  {
    name: "Aruba",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
    iso2: "AW",
    iso3: "ABW",
  },
];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  //   console.log(i);
  console.log(arr[i]);
}

// While-----------------------
let j = 0;
while (j < arr.length) {
  console.log("while", arr[j]);
  j++;
}

// With object: For-In
const obj = {
  name: "Aruba",
  flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
  iso2: "AW",
  iso3: "ABW",
};

// For-in
for (let i in countriesWithFlag) {
  console.log(countriesWithFlag[i].name);
}

// for-of
let demo = "";
for (let single of countriesWithFlag) {
  if (single.name === "Aruba") {
    demo = single.name;
  }
  console.log("with for of ", single.name);
}

countriesWithFlag.forEach(function (ele, index) {
  console.log(ele.name);
  //   return ele.name === "Aruba";
});

console.log(demo);

// ES6: map, filter and reduce

// map returns is an Array:
const userName = countriesWithFlag.map(function (obj, index) {
  //   console.log(ele.name);
  var elements = "";
  //   obj.name = "country is " + obj.name;
  elements += `<h1>country is ${obj.name} </h1>`;
  return elements;
});

console.log(userName);

// Filter:
const singleRecord = countriesWithFlag.filter(function (obj, index) {
  let filterdVal = "";
  if (obj.name === "Aruba") {
    filterdVal = obj;
  } else {
    filterdVal;
  }

  return filterdVal;
});

console.log(singleRecord);
