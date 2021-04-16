/*Converting Arrays to Strings
The JavaScript method toString() converts an array to a string of (comma separated) array values.*/

// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits);
document.write("<br>");
document.write(typeof(fruits)); // object
document.write("<br>");
document.write(fruits.toString()); 
document.write("<br>");
document.write(typeof(fruits)); // object 
document.write("<br>");

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
document.write(fruits.join("*"));

/* 
Popping
 The pop() method removes the last element from an array:*/

/*
Pushing
The push() method adds a new element to an array (at the end): */


/*
Shifting Elements
Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

Example*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
// The shift() method returns the string that was "shifted out":

// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"

document.write("<br>");
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
document.write(fruits);

// The unshift() method returns the new array length.

// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5



/*
Changing Elements
Array elements are accessed using their index number:
Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...
Example*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
// The length property provides an easy way to append a new element to an array:
// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits */


// Deleting Elements
// Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined
// WARNING! 
// Using delete may leave undefined holes in the array. Use pop() or shift() instead.

document.write("<br><br>");
/*
Splicing an Array
The splice() method can be used to add new items to an array:

Example*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
document.write(fruits);
document.write("<br>");
/* 
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.*/

document.write("<br>");

// The splice() method returns an array with the deleted items:
// Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); 
document.write(fruits);
document.write("<br><br>");


/*
Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits

/*The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.*/


/*
Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:
Example (Merging Two Arrays)*/

var myGirls = ["Cecilie", "Lone"];
document.write(myGirls);
document.write("<br><br>");
var myBoys = ["Emil", "Tobias", "Linus"];
document.write(myGirls);
document.write("<br><br>");
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
document.write(myChildren);
document.write("<br><br>");
// FUNCTION TO CREATE A NEW LINE
function newLine(){
    document.write("<br><br>");
}
// The concat() method does not change the existing arrays. It always returns a new array.


// The concat() method can take any number of array arguments:
// Example (Merging Three Arrays)
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3


// The concat() method can also take strings as arguments:
// Example (Merging an Array with Values)
var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 
 

/*
Slicing an Array
The slice() method slices out a piece of an array into a new array.
This example slices out a part of an array starting from array element 1 ("Orange"):
Example*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
document.write(fruits);
newLine();
var citrus = fruits.slice(1);
document.write(citrus);
newLine();
