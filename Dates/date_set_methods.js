// function create newLine and toPrint
function toPrint(value){
    document.write(value);
}

function newLine(){
    document.write("<br><br>");
}


var a = new Date();
a.setFullYear(2020);
toPrint(a);
newLine();

a.setHours(22);
toPrint(a);
newLine();