// JavaScript arrays are used to store multiple values in a single variable.
// Example
var cars = ["Saab", "Volvo", "BMW"];

/*
Using the JavaScript Keyword new
The following example also creates an Array, and assigns values to it:

Example*/
var cars = new Array("Saab", "Volvo", "BMW");

/*The two examples above do exactly the same. There is no need to use new Array().
For simplicity, readability and execution speed, use the first one (the array literal method). */

// Accessing Elements in an array
var name = cars[0];
// Note: Array indexes start at zero

// changing array elements
cars[0] = "Mercedes";

document.write(cars); // accessing the full elements of the array
document.write("<br>");
/*
Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:

Array:*/
var person = ["John", "Doe", 46];

// Objects use names to access its "members". In this example, person.firstName returns John:
// Object:
var person = {firstName:"John", lastName:"Doe", age:46}; 
document.write(person.firstName);
document.write("<br>");
/*
Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars; */

// Arrays length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.length);   // the length of fruits is 4
document.write("<br>");

/*Accessing the First Array Element
Example*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
document.write(first);
document.write("<br>");

/*Accessing the Last Array Element
Example*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];
document.write(last);
document.write("<br><br>");

// looping through elements of an array
var fruits, txt, fLength, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLength = fruits.length;

for(i = 0; i < fLength; i++){
    document.write( fruits[i] + "<br>");
}
document.write("<br><br>");
// looping through elements using foreach loop
var fruits, value;
fruits = ["Banana", "Orange", "Apple", "Mango"];

document.write(fruits.forEach(myFunction));

function myFunction(value){
    document.write(value + "<br>");
}


/*
Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

Example*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits

// WARNING: Adding elements with high indexes can create undefined "holes" in an array:

/*
Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  

Example*/

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;     // person.length will return 3
var y = person[0];         // person[0] will return "John" 

/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to a standard object.
After that, some array methods and properties will produce incorrect results. */
// Example:
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];         // person[0] will return undefined

/*
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.
 */

/*
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
Avoid new Array()
There is no need to use the JavaScript's built-in array constructor new Array().
Use [] instead.

These two different statements both create a new empty array named points:
*/
var points = new Array();     // Bad
var points = [];              // Good 

// These two different statements both create a new array containing 6 numbers:

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good

// The new keyword only complicates the code. It can also produce some unexpected results:

var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)

// What if I remove one of the elements?

var points = new Array(40);  // Creates an array with 40 undefined elements !!!!! 



/*
How to Recognize an Array
A common question is: How do I know if a variable is an array?
The problem is that the JavaScript operator typeof returns "object":
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;    // returns object

// The typeof operator returns object because a JavaScript array is an object.
// Solution 1:
// To solve this problem ECMAScript 5 defines a new method Array.isArray():

Array.isArray(fruits);   // returns true

// The problem with this solution is that ECMAScript 5 is not supported in older browsers.

// Solution 2:
// To solve this problem you can create your own isArray() function:

function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}

// The function above always returns true if the argument is an array.
// Or more precisely: it returns true if the object prototype contains the word "Array".

// Solution 3:
// The instanceof operator returns true if an object is created by a given constructor:

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true 