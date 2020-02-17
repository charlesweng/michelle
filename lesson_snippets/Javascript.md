# Javascript Overview


## Setup

Go to nodejs.org and install the stable version of node.

## Resources

- [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)

## Basics

### Variables

#### Declaring variables

Variables hold values and change according to what you assign it.

```
// this way of declaring a variable prevents the variable from being created again.
let myVariable = 1;

// this way of declaring a variable is the original way and rarely used ever since the 'let' keyword came out.
var myVariable = 2;
```

#### Declaring constants

Constants are variables that can only be assigned once.

```
// this way of declaring a variable prevents the variable from being changed
const myVariable = 0;
```

#### Usage


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

#### Usage

You can call functions or perform an operation or do computation.

```
sayHello()
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


#### Public

#### Private

#### Static

#### Declaring an object 


## Advanced Topics

### Scope

### Hoisting

You must first declare your class before using it in Javascript (this happens in most scripting languages).

### Autoboxing (Strict vs Nonstrict)

`use stict;` in javascript prevents autoboxing from happening and is preferable for performance reasons in javascript.


### Inheritance

### Mix-Ins
