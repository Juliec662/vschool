console.clear();
const readlineSync = require("readline-sync");
var num1 = 0;
var num2 = 0;
num1 = parseFloat(readlineSync.question("Please enter your first number: "));
num2 = parseFloat(readlineSync.question("Please enter your second number: "));
operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div:  ");
console.log("Choice was: " + (operation));

if (operation === "add") {

    console.log("The result is:  " + add(num1,num2))     
    
    }else if (operation === "sub") {
     
     
     console.log("The result is: " + sub(num1,num2))

    }else if (operation === "mul") {
     
     console.log("The result is: " + mul(num1,num2))
    
    }else if (operation === "div") {
     
     console.log("The result is: " + div(num1,num2))
    }

     function add(num1, num2){
        return  num1 + num2
    }

     function sub(num1, num2){ 
        return num1 - num2
    }

     function mul(num1, num2){ 
        return num1 * num2
    }

     function div(num1, num2){ 
        return num1 / num2
    }
