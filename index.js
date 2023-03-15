console.log("Hello!!!");

//Unique values
// Check if word in anagrams arr is anagram
// If you found anagram store this word in set or map
// Values in set or map should not repeat anagram of this word
// Also should not be present in set or map
// Try to optimize script by using check has
// Return collection set or map

// Example: "actor" and "carot" are anagrams so store only "actor"

const anagrams = [
  "actor",
  "carot",
  "listen",
  "enlist",
  "debit",
  "bidet",
  "tear",
  "rate",
  "night",
  "thing",
  "lives",
  "veils",
  "stressed",
  "desserts",
  "dormitory",
  "dirty room",
  "rescue",
  "secure",
  "a gentleman",
  "elegant man",
  "listen",
  "heart",
  "angel",
  "leader",
  "silent",
];

const unique = (arr) => {
  let x;
  let y;
  let z;
  let litters = new Set();
  let uniqueAnagrams = [];

  for (let i = 0; i < arr.length; i++) {
    x = arr[i].split('');
    y = x.sort();
    z = y.join("");

    if (!litters.has(z)) {
      litters.add(z);
      uniqueAnagrams.push(arr[i]);
    }

  }
  return uniqueAnagrams;

};

console.log(unique(anagrams));


//Getter and setter
// Create an user object
// User should have to first name last name and age Add userInfo getter which gets all info from obj
// Add userInfo setter to set all user info from string or obj
// String setter format 'Taras Samoilenko 25'

const user = {
  firstName: "",
  lastName: "",
  age: "",
  get userInfo(){
    return `${this.firstName} ${this.lastName} is ${this.age}`
  },
  set userInfo(a){
    if (typeof(a) === 'string') {
      let arrWords = a.split(" ");
      this.firstName = arrWords[0];
      this.lastName = arrWords[1];
      this.age = +arrWords[2];
    } else if (typeof(a) === 'object') {
      this.firstName = a.firstName;
      this.lastName = a.lastName;
      this.age = a.age;
    }
  },
};

user.userInfo = "Taras Samoilenko 25";
user.userInfo;
// "Taras Samoilenko is 25"

user.userInfo = { firstName: "Kate", lastName: "Karp", age: 22 };
user.userInfo;
// "Kate Karp is 22"


//Create arr method
// Create obj with property from and to
// Create function createArr that reads obj properties and
// Creates new sorted arr with range from and to
// Assign this arr as obj property

// Create 3 solutions Solution 1 without bind, call or apply
// Solution 2 with bind Solution 3 with call or apply

const obj = {
  from: 1,
  to: 10,
};

const createArr = function (){
  let arrFromTo = [];
  for (let i = this.from; i <= this.to; i++){
    arrFromTo.push(i);
  };
  return arrFromTo;
};

// Sol 1
obj.createArr = createArr;

// Sol 2
const bindedSolution = createArr.bind(obj);

// Sol 3
const callSolut = createArr.call(obj)


//Constructor Function
// Create a constructor function that creates car obj
// Obj should have properties model, color, age, speed, gasTank and started 
// Obj should have methods startEngine, drive, stop, speedUp, slowDown, addGas This methods should be chainable
// startEngine method checks if car has gas (you can create another method for checking gas)
// If gas is not empty set property started to true
// drive method should do smth only if property started is true and gas is not 0
// if started true increase speed to 30
// stop method sets property started to false and speed to 0
// speedUp method increases speed by arg. Max speed is 200
// Each speedUp method decreases gas by 5. Max gas is 20 If gas is empty stop car
// gas cannot be less then 0
// If started is false stop car
// speedUp(5) adds 5 to speed
// slowDown works like speedUp but decreases speed. Min speed is 0
// addGas method adds gas to car by arg
// addGas(5) adds 5 to gas

function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.started = started;
  function startEngine (){
    if (this.gasTank > 0){
      this.started = true;
    }
    return this;
  }
  this.startEngine = startEngine;
  function drive (){
    if (this.started === true && this.gasTank > 0){
      this.speed = +this.speed + 30;
    }
    return this;
  }
  this.drive = drive;
  function stop (){
    this.speed = 0;
    this.started = false;
    return this;
  }
  this.stop = stop;
  function speedUp (speedUpArg){
    this.speed = +this.speed + +speedUpArg;
    if(this.speed > 200){
      this.speed = 200;
    }
    this.gasTank = this.gasTank - 5;
    if (this.gasTank < 0){
      this.gasTank = 0;
    }
    if(this.gasTank === 0 || this.started === false){
      this.speed = 0;
      this.started = false;
    }
    return this;
  }
  this.speedUp = speedUp;
  function slowDown (speedDownArg){
    this.speed = +this.speed - +speedDownArg;
    if (this.speed < 0){
      this.speed = 0;
    }
    this.gasTank = this.gasTank - 5;
    if (this.gasTank < 0){
      this.gasTank = 0;
    }
    if(this.gasTank === 0 || this.started === false){
      this.speed = 0;
      this.started = false;
    }
    return this;
  }
  this.slowDown = slowDown;
  function addGas (addGasArg){
    this.gasTank = +this.gasTank + +addGasArg;
    return this;
  }
  this.addGas = addGas;
}

const myCar = new Car("Reno", "White", 10, 0, 20, false);

console.log(myCar);