// function create newLine and toPrint
function toPrint(value){
    document.write(value);
}

function newLine(){
    document.write("<br><br>");
}

/*
Creating Date Objects
Date objects are created with the new Date() constructor.

There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
 */

var d = new Date();
toPrint("The Date today is: ");
toPrint(d);
newLine();