var x = 10;
var y = 20;
var z = x + y;
document.writeln(z);

// local variable
/*JavaScript local variable
A JavaScript local variable is declared inside block or function. It is accessible within the function or block only. */
function func1(){
    var x = 10;
    document.writeln(x);
}


/*JavaScript global variable
A JavaScript global variable is accessible from any function. A variable i.e. declared outside the function or declared with window object is known as global variable. For example: */
var data = 200; // global variable

function func2(){
    document.writeln(data);
}

function func3(){
    document.writeln(data);
}

func2();
func3();

// To declare JavaScript global variables inside function, you need to use window object. For example:
window.value=90;  
//Now it can be declared inside any function and can be accessed from any function. For example:
function m(){  
    window.value=100;//declaring global variable by window object  
}  
function n(){  
    alert(window.value);//accessing global variable from other function  
}  
//m();
//n();

/* JavaScript Global Variable
A JavaScript global variable is declared outside the function or declared with window object. It can be accessed from any function.

Let’s see the simple example of global variable in JavaScript.*/
var value=50;  
function a(){  
alert(window.value);//accessing global variable   
}  
a()