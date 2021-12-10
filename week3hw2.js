//#1
let prompt = require('prompt-sync')();
// let userInput1= Number(prompt("Please enter a number:"));
// let userInput2= Number(prompt("Please enter another number: "));
// let userInput3= Number(prompt("Please enter one more number: "));


// function maxOfThree(userInput1, userInput2, userInput3){
//     input1=userInput1;
//     input2=userInput2;
//     input3=userInput3;
//     if(input1 > input2 && input1 > input2){
//     return input1;
//     }
//     else if (input2 > input1 && input2 > input3){
//         return input2;
//     }
//     else if (input3 > input1 && input3 > input2){
//         return input3;
//     }
//     else{
//         return "please try again"
//     }
// }
// console.log(maxOfThree(userInput1, userInput2, userInput3))

//question 2a
// let userTemp = Number(prompt("Please enter a Celsius temperature:"))

// function celsiusToFahrenheit(userTemp){
//     let fTemp = (userTemp*1.8)+32;
//     return userTemp + " degrees Celcius is " + fTemp + " degrees Fahrenheit.";
// }
// console.log(celsiusToFahrenheit(userTemp))

let userTemp2 = Number(prompt("Please enter a Fahrenheit temperature:"));

function fahrenheitToCelsius(userTemp2){
    let cTemp = (userTemp2 - 32)/ 1.8;
    let cTemp2 = Math.trunc(cTemp)
    return userTemp2 + " degrees Fahrenheit is " + cTemp2 + " degrees Celsius."
}
console.log(fahrenheitToCelsius(userTemp2));