// JavaScript objects are containers for named values called properties or methods.
/*
Object Definition
You define (and create) a JavaScript object with an object literal:
 */
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
document.write("<br>");

// Spaces and line breaks are not important. An object definition can span multiple lines:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
document.getElementById("demo2").innerHTML = person.firstName + " has a " + person.eyeColor + " eye color.";
document.write("<br>");

/*
Accessing Object Properties
You can access object properties in two ways:

(i) objectName.propertyName 

(ii) objectName["propertyName"]
 */
// Example
document.getElementById("demo3").innerHTML = " Your Name is: " + person["firstName"] + " " + person["lastName"]; 

document.write("<br>");

/*
Object Methods

Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

A method is a function stored as a property.
 */

// Example
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  /*
  The this Keyword
In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object. */

/*
Accessing Object Methods
You access an object method with the following syntax:

objectName.methodName()

Example
name = person.fullName();

If you access a method without the () parentheses, it will return the function definition:

Example
name = person.fullName; */
var myName = person.fullName();
document.write(myName); // returns John Doe

document.write("<br>");

var MyName2 = person.fullName;
document.write(MyName2); //  return function definition

document.write("<br>");

