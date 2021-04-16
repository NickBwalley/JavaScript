// function newLine()
function newLine(){
    document.write("<br>");
}
// function toPrint()
function toPrint(value){
    document.writeln(value);
}
/*
Array.map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:

Example*/

var numbers1 = [45, 4, 9, 16, 25];
toPrint(numbers1);
newLine();
var numbers2 = numbers1.map(myFunction);
toPrint(numbers2);
newLine();
function myFunction(value, index, array) {
  return value * 2;
} 


/*
Array.filter()
The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:

Example 1 */

var numbers = [45, 4, 9, 16, 25];
toPrint(numbers);
newLine();
var over18 = numbers.filter(myFunction);
toPrint(over18);
newLine();
function myFunction(value, index, array) {
  return value > 18;
}

// Example 2
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}


/*
Array.reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:

Example*/

var numbers1 = [45, 4, 9, 16, 25];
toPrint(numbers1);
newLine();
var sum = numbers1.reduce(myFunction);
toPrint(sum);
newLine();

function myFunction(total, value, index, array) {
  return total + value;
}
/*Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

Example*/ 
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
// The reduce() method can accept an initial value:
// Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

/*
Array.reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

The reduceRight() method does not reduce the original array.

This example finds the sum of all numbers in an array:

Example*/
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
/*Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

Example*/
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
} 

/*
Array.every()
The every() method check if all array values pass a test.

This example check if all array values are larger than 18:

Example*/
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*Note that the function takes 3 arguments:

The item value
The item index
The array itself
When a callback function uses the first parameter only (value), the other parameters can be omitted:

Example*/
newLine();
var numbers = [45, 4, 9, 16, 25];
toPrint(numbers);
newLine();
var allOver18 = numbers.every(myFunction);
toPrint(allOver18);
newLine();
function myFunction(value) {
  return value > 18;
} 


/*
Array.some()
The some() method check if some array values pass a test.

This example check if some array values are larger than 18:

Example*/
newLine();
var numbers = [45, 4, 9, 16, 25];
toPrint(numbers);
newLine();
var someOver18 = numbers.some(myFunction);
toPrint(someOver18);
newLine();

function myFunction(value, index, array) {
  return value > 18;
}

/*Note that the function takes 3 arguments:

The item value
The item index
The array itself
Array.some() is supported in all browsers except Internet Explorer 8 or earlier.

Array.indexOf()
The indexOf() method searches an array for an element value and returns its position.

Note: The first item has position 0, the second item has position 1, and so on.

Example
Search an array for the item "Apple":*/ 

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// Array.indexOf() is supported in all browsers except Internet Explorer 8 or earlier.

/*Syntax
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.


Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

Array.lastIndexOf()
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Example
Search an array for the item "Apple":*/ 

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
/*Array.lastIndexOf() is supported in all browsers except Internet Explorer 8 or earlier.

Syntax
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning


Array.find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

Example*/ 

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

/*Note that the function takes 3 arguments:

The item value
The item index
The array itself
Array.find() is not supported in older browsers. The first browser versions with full support is listed below.

45	12	25	8	32


Array.findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

Example*/ 

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*Note that the function takes 3 arguments:

The item value
The item index
The array itself
Array.findIndex() is not supported in older browsers. The first browser versions with full support is listed below.*/
