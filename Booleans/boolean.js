// function toPrint()
function toPrint(value){
    document.write(value);
}

// function newLine()
function newLine(){
    document.write("<br><br>");
}


// Example

toPrint(Boolean(10 > 9))        // returns true
newLine();
// Or even easier:
// Example
toPrint((10 > 9));              // also returns true
newLine();
toPrint(10 > 9);                // also returns true
newLine();
// Everything With a "Value" is True
var x = 10;
toPrint(Boolean(x)); // returns true
newLine();

// Everything Without a "Value" is False
var x = 0;
toPrint(Boolean(x)); // returns false
newLine();

// The Boolean value of -0 (minus zero) is false:
var x = -0;
Boolean(x);       // returns false

// The Boolean value of "" (empty string) is false:
var x = "";
Boolean(x);       // returns false

// The Boolean value of undefined is false:
var x;
Boolean(x);       // returns false

// The Boolean value of null is false:
var x = null;
Boolean(x);       // returns false

// The Boolean value of false is (you guessed it) false:
var x = false;
Boolean(x);       // returns false

// The Boolean value of NaN is false:
var x = 10 / "H";
Boolean(x);       // returns false