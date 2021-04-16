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


