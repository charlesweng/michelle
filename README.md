# Getting Started

1. Sign up on https://repl.it/
2. Go to https://repl.it/ > + new repl (on the top right corner)
3. Select Nodejs > Click create repl
4. Play around with the code in repl.it
5. Read book Javascript For the Impatient in Email

## Basics

For the questions below each section, refer the the [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/) guide to help you.
Eventually you will need to constantly refer to the official docs for help for later projects.

### Variables

#### Declaring variables

Variables hold values and change according to what you assign it. 

```
let myVariable = 0;

`let` is a keyword
`myVariable` is the name of the variable
`=` is setting the variable to the right hand side
`0` is the value you are setting the variable to

// this way of declaring a variable prevents the variable from being created again.
let myVariable = 1;

// this way of declaring a variable is the original way and rarely used ever since the 'let' keyword came out.
var myVariable = 2;


// You can print a variable by using `console.log()`
console.log('Hello World!'); // 'Hello World'
console.log(myVariable); // 2
```

#### Questions (Explain Why)

```
// Would the below work?
var myVariable = 1;
var myVariable = 2;

// Would the below work?
var myVariable = 1;
myVariable = 2;

// Would the below work?
let myVariable = 1;
let myVariable = 2;

// Would the below work?
let myVariable = 1;
myVariable = 2;
```

#### Declaring constants

Constants are variables that can only be assigned once.

```
// this way of declaring a variable prevents the variable from being changed
const myVariable = 0;
```

#### Questions

```
// Would the below work? Why?
const myVariable = 0;
myVariable = 1;
```

### Functions

#### Declaring functions

Functions are miniature constructs of a sequence of actions

```
// standard way of declaring a function
function sayHello() {
    console.log('Hello!');
}

// more efficient way of declaring function
// this is automatically bounded
const sayHello = () => {
    console.log('Hello!');    
}
```


You can call functions or perform an operation or do computation. What does that do?

```
sayHello()
```

#### Questions

```
// What does this do? How do you use it?
const addNumbers = (x, y) => {
    return  x + y;
}

```

### Classes

#### Declaration

Classes are templates for objects and logical constructs

```
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

In Javascript, I consider classes structured functions, because pre-ES6 (or early version of Javascript)
declare classes using functional syntax like so:

```
function Animal() {
}

Animal.prototype.speak = () => console.log('Moo');
```

#### Questions


```
// What is the constructor?

// Create an instance of the Rectangle above

// Create a function inside the Rectangle to calculate area

// Create a function inside the Rectangle to calculate the perimiter

// If you have trouble creating and using classes, here is the correct version of nodejshttps://repl.it/repls/ForkedPreemptiveLeads

```

## Resources

- [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)

