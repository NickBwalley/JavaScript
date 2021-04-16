// FUNCTION DEFINITIONS 
// function NEWLINE
function newLine(){
    document.writeln("<br><br>");
}

// function toPrint
function toPrint(value){
    document.write(value);
}


/*
Sorting an Array
The sort() method sorts an array alphabetically:
Example*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
toPrint(fruits);
newLine();
toPrint(fruits.sort());        // Sorts the elements of fruits
newLine();
/*Reversing an Array
The reverse() method reverses the elements in an array.
You can use it to sort an array in descending order:
Example*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
toPrint(fruits);
newLine();
toPrint(fruits.sort());        // First sort the elements of fruits
newLine();
toPrint(fruits.reverse());     // Then reverse the order of the elements */



/*
Numeric Sort
By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:

Example*/
newLine();
var points = [40, 100, 1, 5, 25, 10];
var x = points.sort(function(a, b){
    return a - b
});
toPrint(x);
newLine();
// Use the same trick to sort an array descending:
// Example
var points = [40, 100, 1, 5, 25, 10];
toPrint(points.sort(function(a, b){return b - a}));
newLine();
/*
The Compare Function
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
 */