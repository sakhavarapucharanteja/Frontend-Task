function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


let a = 10;
let b = 20;

console.log("Addition: " + add(a,b));
console.log("Subtraction: " + subtract(a,b));
console.log("Multiplication: " + multiply(a,b));
console.log("Division: " + divide(a,b));



function greet(name) 
{
    console.log(`Hello, ${name}`);
}
  greet.call(null, 'charan');
  