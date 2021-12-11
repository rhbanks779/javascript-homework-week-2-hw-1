//#1 Write a program to add up all the elements of a number array.
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// for (let i = 0; i < myArray.length; i++){
//     sum = sum + myArray[i]
// }
// console.log(sum)

//#2 Write a program to look for the user input in an array.
// When it finds the first occurrence, display the value and the index of that value

// let prompt = require('prompt-sync')();
// let userInput= prompt('Enter fruit here:').toLowerCase();
// let fruitArray= ['orange', 'apple', 'pear', 'kiwi', 'banana', 'grapes'];

// for (let i = 0; i < fruitArray.length; i++){
//     if (userInput === fruitArray[i]){
//         value = ("The value is " + fruitArray[i] + " and the index of that value is " + fruitArray.indexOf(userInput));
//         console.log(value)
//     }
//     }   
    
//#3 Write a program to find the longest element in a string array
const strArray= ['hello', 'okay', 'no', 'whatchamacallit'];
 
for (let i=0; i<strArray.length; i++){
    if(strArray[0] >= strArray[1] && strArray[0] >= strArray[2] && strArray[0] >= strArray[3]){
        console.log(strArray[0]);
    }
    else if( strArray[1]>=strArray[0] && strArray[1]>=strArray[2] && strArray[1]>=strArray[3]){
        console.log(strArray[1]);
    }
    else if(strArray[2]>=strArray[0] && strArray[2]>=strArray[1] && strArray[2]>=strArray[3]){
        console.log(strArray[2]);
    }
    else{
        console.log(strArray[3]);
    }
}//not pretty but could not get function to work