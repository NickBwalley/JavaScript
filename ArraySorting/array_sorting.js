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

