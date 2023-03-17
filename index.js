console.log("Hello!!!");

//Closure
// Create a calculate() function that takes an initial number as an argument
// and returns methods add(), subtract(), multiply(), divide() and reset()
// each of which takes a number as an argument and returns
// the result of the corresponding arithmetic operation on numbers

const calculate = (initialNumber) => {
    let changeNumber = initialNumber;
    const saveInitialNumber = initialNumber;
    return {
        add(addNumber){
            changeNumber += addNumber;
            return changeNumber;
        },
        subtract(subtractNumber){
            changeNumber -= subtractNumber;
            return changeNumber;
        },
        multiply(multiplyNumber){
            changeNumber *= multiplyNumber;
            return changeNumber;
        },
        divide(divideNumber){
            changeNumber /= divideNumber;
            return changeNumber;
        },
        reset(){
            changeNumber = saveInitialNumber;
        },
    };
};

const calculator = calculate(5);
console.log(calculator.add(5));
// 10



//Decorator

const obj = {
    num: 1,
    sum(num) {
      return this.num + num;
    },
};

const cachesDecorator = (func) => {
    const map = new Map();
  return function (num) {
    if (!map.has(num)) {
      const result = func.call(this, num);
      map.set(num, result);
    }
    return map.get(num);
  };
}

function sum (num) {
    return this.num + num;
  };

const decoratedSum = cachesDecorator(sum);
console.log(decoratedSum.call(obj, 2));
console.log(decoratedSum.call(obj, 2));
  
const decoratedSum2 = cachesDecorator(obj.sum);
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 33));



//Factorial recursion (optional)
//Count factorial by using recursion

const factorial = (initialNumber) => {
    if(initialNumber === 1) {
        return 1
    }
    return initialNumber * factorial(initialNumber-1);
};
  
console.log(factorial(5));
// 120