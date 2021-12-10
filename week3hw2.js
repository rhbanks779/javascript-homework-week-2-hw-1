//#1
let prompt = require('prompt-sync')();
let userInput1= Number(prompt("Please enter a number:"));
let userInput2= Number(prompt("Please enter another number: "));
let userInput3= Number(prompt("Please enter one more number: "));


function maxOfThree(userInput1, userInput2, userInput3){
    input1=userInput1;
    input2=userInput2;
    input3=userInput3;
    if(input1 > input2 && input1 > input2){
    return input1;
    }
    else if (input2 > input1 && input2 > input3){
        return input2;
    }
    else if (input3 > input1 && input3 > input2){
        return input3;
    }
    else{
        return "please try again"
    }
}
console.log(maxOfThree(userInput1, userInput2, userInput3))
