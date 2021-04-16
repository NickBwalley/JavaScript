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

