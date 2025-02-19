let prompt= require ('prompt-sync')();
var num1 = Number(prompt("Please enter a number:"));
var num2 = Number(prompt("Please enter a number:"));


    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;



    console.log("Addition: " + sum);
    console.log("Subtraction: " + difference);
    console.log("Multiplication: " + product);
    console.log("Division: " + quotient);