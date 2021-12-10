let prompt = require('prompt-sync')();
/*
let radius= Number(prompt('enter radius: '));

function getArea(radius){
    let result= (3.14 * radius * radius);
    console.log(result);
    }
    getArea(radius)
//document.getElementById(rad).innerHTML="getArea";

let triSideOne=Number(prompt('enter side 1: '));
let triSideTwo=Number(prompt('enter side 2: '));
let x= ((triSideOne * triSideOne) + (triSideTwo * triSideTwo));

function getSide(x){
    let result= Math.sqrt(x);
    console.log(result);
}
getSide(x);
//document.getElementById(tri).innerHTML="getSide";

hoistEx();

function hoistEx(){
    console.log('This is a hoisting example')
}*/

let userInput1= Number(prompt("Please enter a number:"));
let userInput2= prompt('Please enter a word: ').toLowerCase();

let arry1=[1, 2, 3, 4, 1, 2 , 3 , 4, 1, 2]
let arry2=['yes', 'no', 'yes', 'no', 'no', 'yes', 'hello', 'hello', 'yes', 'no']

//function countArr (userInput1, arry1){
for (let i=0; i <= 10; i++){
    let numCount
    if(userInput1 === arry1[i]){
        numCount++
        console.log(numCount)
        }
    else{
        console.log('no match found');
    }
}
//}
//countArr(userInput1, arry1)

//function countArr2 (userInput2, arry2){
for (let i=0; i <= arry2.length; i++){
    let wordCount
    if(userInput2 === arry2[i]){
        wordCount++
        console.log(wordCount)
    }
    else{
        console.log('no match found')
    }
}
//}
//countArr2(userInput2, arry2);
//console.log(countArr())
//console.log(countArr2())