console.log("Hello!!!");

//Prototype inheritance

// Create a prototype chain Inherit from university obj with universityName and dean properties
// Create faculty obj with facultyName and groups arr properties and method enlistStudent into groups
// Group can contain only 12 students

const university = {
    universityName: "Polytechnic",
    dean: "Vladimir Vladimirov",
};
  
const faculty = {
    __proto__: university,
    facultyName: "psychology",
    groups: [],
    enlistStudent(student) {
        if (this.groups.length < 12){
        this.groups.push(student);
        return `New student ${student} added to the group`;
        } else {
            return "Group is full";
        }
    },
};

faculty.universityName;
// Polytechnic
  
faculty.enlistStudent("Taras");
faculty.enlistStudent("Tolya");
faculty.groups;
// [['Taras']]



//Prototype constructor
// Create a basic Shape that has color property and a getArea() method.
// Create two sub objects, Rectangle and Circle, that inherit the properties and methods of the Shape.
// The Rectangle class must have width and height properties, and the getArea() method must return the area of the rectangle.
// The Circle class must have a radius property, and the getArea() method must return the area of the circle.

function Shape(color) {
    this.color = color;
    this.getArea = function(){
        return "This is getArea from Shape"
    };
}
  
function Rectangle(color, width, height) {
    Shape.call(this,color);
    this.width = width;
    this.height = height;
    this.getArea = function (){
        return width * height;
    };
}
  
function Circle(color, radius) {
    Shape.call(this,color);
    this.radius = radius;
    this.getArea = function (){
        return Math.PI * radius ** 2;
    };
}

Rectangle.prototype = Shape.prototype;
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function (){
    return width * height;
};

Circle.prototype = Shape.prototype;
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function() {
    return Math.PI * (this.radius ** 2);
}

const rectangularBlack = new Rectangle("Black",4,6);
const circleRed = new Circle("Red",8);



// Fibonacci recursion
// Create a function that prints last number from sequence
// Start from 1
// Try with big numbers (100, 200)

const start = new Date();

const fibonacci = (n) => {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  };
  
console.log(fibonacci(7));
// 13

const end = new Date();
const timeForCode = (end - start) / 1000;

console.log(`Тайминг: ${Math.round(timeForCode)} секунды`);



// Fibonacci recursion with cache (Optional)
// Create a decorator for fibonacci function and cache result
// Please create new fibonacci func that uses cache from decorator and stores every result
// Try with big numbers (100, 200)

const map = new Map();

const fibonacciWithCache = (n, cache) => {
    if (!map.has(n)){
       if(n <= 1){
        cache = n;
       } else {
        cache = fibonacciWithCache(n-1, cache) + fibonacciWithCache(n-2,cache);
       }
        map.set(n, cache);
        return cache;
    } else {
        return map.get(n);
    }
};

const cacheDecorator = (func) => {
    return function (n){
        return fibonacciWithCache(n);
    }
};

const decoratedFib = cacheDecorator();

console.log(decoratedFib(200));