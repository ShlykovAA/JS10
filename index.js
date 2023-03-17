console.log("Hello!!!");

//Closure
// Create a calculate() function that takes an initial number as an argument
// and returns methods add(), subtract(), multiply(), divide() and reset()
// each of which takes a number as an argument and returns
// the result of the corresponding arithmetic operation on numbers

const objClosure = {
    initialNumber: 0,
    saveNumber: 0,
    add(addNumber){
        this.initialNumber += addNumber;
        return this.initialNumber;
    },
    subtract(subtractNumber){
        this.initialNumber -= subtractNumber;
        return this.initialNumber;
    },
    multiply(multiplyNumber){
        this.initialNumber *= multiplyNumber;
        return this.initialNumber;
    },
    divide(divideNumber){
        this.initialNumber /= divideNumber;
        return this.initialNumber;
    },
    reset(){
        this.initialNumber = this.saveNumber;
    },
};

const calculate = (initialNumber) => {
    objClosure.initialNumber = initialNumber;
    objClosure.saveNumber = initialNumber
    return objClosure;
};

const calculator = calculate(5);
console.log(calculator.add(5));
console.log(calculator.subtract(3));
console.log(calculator.multiply(2));



//Decorator

// У мене не вдалося виконати це завдання. 
// Коли я вже здався, я підглянув у вас код, то виявилося, що я не до кінця зрозумів завдання, яке потрібно виконати. 
// У вас прив'язка до об'єкта була в самій відповіді, я думав його редагувати не можна.
// Усі мої спроби прив'язати об'єкт усередині декоратора провалилися.



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