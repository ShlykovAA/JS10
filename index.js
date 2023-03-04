console.log("Hello!!!");

// Calculate length of other side aa + bb = c*c
// Find c
// pythagorean(a, b);
// pythagorean(5, 12);
// 13

function pythagor (a,b) {
  return Math.sqrt(a * a + b * b);
}

console.log(pythagor(5, 12))

// Show number in money format
// +- sign should be present
// Separate thousands with ,
//formatMoney(num);
//formatMoney(1232323);
//'+ 1,232,323.00'
//formatMoney(-23.2132);
//'- 23.21'

const formatMoney = (num) => {
  const sign = num > 0 ? "+" : num < 0 ? "-" : "";
  const mathNum = Math.abs(num);
  const twoNumber = mathNum.toFixed(2);
  const [int, dec = "00"] = twoNumber.split(".");
  let count = 0;
  const arrNum = int.split("").reduceRight((acc,item,index)=>{
    if (count === 2 && index !== 0) {
      acc.push(item, ",")
      count = 0;
    } else {
      acc.push(item);
      count++
    }
    return acc;
  },[]);
  const afterReduce = arrNum.reverse().join("")

return `${sign} ${afterReduce}.${dec}`
}

console.log(formatMoney(1232323))

//Format number in spaces

function formatNumber (num) {
  let parts = num.toFixed(3).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (parts[1] === "000") {
    return parts[0];
  } else {
    return parts.join(".");
  }
  
}

console.log(formatNumber(1232323))
console.log(formatNumber(1223.65378))

//Write a password generator with length n

function passwordGenerator (num) {
  const charset = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^`abcdefghijklmnopqrstuvwxyz";
  let retVal = "";
for (let i = 0, n = charset.length; i < num; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

console.log(passwordGenerator(8))

//Given 2 numbers. Calculate their percentage with n precision after dot
//50 is 25% of 200
//secondNum * 100% / firstNum

const calc = (firstNum, secondNum, precision) => {
  const percent = (secondNum * 100) / firstNum;
  return percent.toFixed(precision);
}

console.log(calc(200,50,0));
console.log(calc(200,0.14,1));

//User enters a number
//Get it's integer part and decimal

const splitNumber = (num) => {
  const [int, dec] = num.toString().split(".");
  const objResult = {int: int}
  if (dec !== undefined){
    objResult.decimal = dec
  } else {
    objResult.decimal = "0"
  }
  return objResult
}

console.log(splitNumber(2));
console.log(splitNumber(2.34));

//Check if given number is a prime number
//Prime numbers are numbers that is divisible without a remainder only by itself and by 1
//Should return boolean

const isPrime = (num) => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
}
return num > 1;
}

console.log(isPrime(4));
console.log(isPrime(5));

//An armstrong number is a number which equal to the sum of the cubes of its individual digits.
//153 = 1*1*1 + 5*5*5 + 3*3*3 153 = 1 + 125 + 27 153 = 153

function isArmstrong(num) {
    const digits = (num + '').split('');
    const sum = digits.reduce((acc, item) => {
     acc = acc + Math.pow(item, digits.length)
      return acc
    }, 0);
    if (sum == num){
      return true;
    } else {
      return false;
    }
  
}
console.log(isArmstrong(153));
