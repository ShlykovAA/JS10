console.log("Hello!!!");

//Capitalize every word in array

//capitalize("my name is taras");
// Should return
//("My Name Is Taras");

const capTask = "my name is taras";
const arrWords = capTask.split("");

for (let i = 0; i < arrWords.length; i++) {
  if (arrWords[i] === " ") {
    arrWords[i + 1] = arrWords[i + 1].toUpperCase();
  }
}

arrWords[0] = arrWords[0].toUpperCase();

console.log(arrWords.join(""));

//Truncate text if it's length is bigger then maxlength and add '...' at the end.
//Resulted str with dots have to be equal to maxlength

//truncate("Lorem ipsum dolor sit amet, consectetur", 14);
// Lorem ipsum...

//truncate("Lorem ipsum dolor sit amet, consectetur", 255);
// Lorem ipsum dolor sit amet, consectetur

const cutText = "Lorem ipsum dolor sit amet, consectetur";

function smallText(text) {
  if (text.length > 14) {
    return text.slice(0, 11).padEnd(14, ".");
  } else {
    return text;
  }
}

function largeText(text) {
  if (text.length > 255) {
    return text.slice(0, 252).padEnd(255, ".");
  } else {
    return text;
  }
}

console.log(smallText(cutText));
console.log(largeText(cutText));

//Return arr of numbers with values that are in range from 'from' param and to 'to' param
//filterRange(arr, from, to);

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//filterRange(arr, 3, 7);
// 3,4,5,6,7

const arrForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterRange(arr, from, to) {
    return arr.slice(from-1,to)
}

console.log(filterRange(arrForFilter,3,7));

//Sort arr from least to biggest

//const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
//sortArr(arr);
// -3242, -454, 0, 4, 22, 23, 324, 544, 32423

const arrSort = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];

function sortFunc (arr) {
    return arr.sort((a,b)=>{
        return a-b;
    })
}

console.log(sortFunc(arrSort))

//Sort arr of strings from shortest to longest

//const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
//sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'

const arrStringsSort = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];

function sortStringsFunc (arr) {
    return arr.sort((a,b)=>{
        return a.length - b.length;
        })
}

console.log(sortStringsFunc(arrStringsSort))

//Calculate average age of users older then 17 and younger then 55

const arrUser = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];
let ageCount = 0;

  const averageAge = arrUser.reduce((acc,item)=>{
    if (item.age >= 17 && item.age <= 55) {
        acc += item.age;
        ageCount++;
    } return acc;
  },0) / ageCount;

  console.log(averageAge.toFixed(2))

// Sort arr by name if 2 elements have same name sort by age

const arrUser2 = [
    { name: "John", age: 25 },
    { name: "John", age: 5 },
    { name: "John", age: 2 },
    { name: "John", age: 45 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Mary", age: 2 },
    { name: "Taras", age: 25 },
    { name: "Taras", age: 19 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
    { name: "Elizabeth", age: 8 },
  ];

function sortUserName(arr){
   return arr.sort((a,b)=>{
        if (a.name === b.name) {
            return a.age - b.age;
        } else {
            return a.name.charCodeAt(0) - b.name.charCodeAt(0)
        }
    })
}

console.log(sortUserName(arrUser2))

// Find min and max and return obj {min, max}
// Use reduce method
//minMaxAge(arr);
// {min:5, max:74}

const arrMinMax = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];

const minMaxObj = {
    min: arrMinMax.reduce((acc,item)=>{
        return acc = item.age < acc ? item.age : acc;
    },Infinity),
    max: arrMinMax.reduce((acc,item)=>{
        return acc = item.age > acc ? item.age : acc;
    },0)
}

console.log(minMaxObj)

// Save unique values from arr to uniqueArr

const strings = [
    "Привіт",
    "Світ",
    "Привіт",
    "Світ",
    "Привіт",
    "Привіт",
    "Світ",
    "Світ",
    ":-O",
  ];