
//Week 2 HW 1 Strings
//#1
/*let prompt = require('prompt-sync')();
let word = prompt('enter a word: ');
let i= word.length-1;
let z = ''
while (i >=0){
    z+= word.charAt(i);
    i--
}
if (z.toLowerCase() == word.toLowerCase()){
    console.log(word + " is a palindrome")
}
else{
    console.log(word + " is not a palindrome");
}*/

//#2
/*let prompt = require('prompt-sync')();
let word = prompt('enter anything here: ').toLowerCase();
let letterCount=0;
let numCount=0;
let specCount=0;
for (i=0; i <= word.length; i++){
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <=122) 
        letterCount++
    
    else if (word.charCodeAt(i) >= 48 && word.charCodeAt(i) <=57){
        numCount++
    }
    else {
        specCount++
    }
}
console.log('There are ' + letterCount + ' letters.');
console.log('There are ' + numCount + ' numbers.');
console.log('There are ' + specCount + ' special characters.') */

//#3
/*let givenString= 'Welcome to the Jungle! Can you see the tiger?';
let prompt = require('prompt-sync')();
let userString = prompt('enter word here: ');
let result = givenString.search(userString);
console.log(result);*/


//#4
/*let prompt = require('prompt-sync')();
let num = prompt('enter a number 1-5: ');
let num1 = 6;
let num2 = 3; 
switch (num){
    case '1' : console.log('6 + 3 = ' + (num1 + num2))
        break;
    case '2': console.log('6 - 3 = ' + (num1 - num2))
        break;
    case '3': console.log('6 * 3 = ' + (num1 * num2))
        break;
    case '4': console.log('6 / 3 = ' + (num1 / num2))
        break;
    default : console.log('Invalid Option');
} */


//#5 Bonus
/*let string ='this is my practice string';
let word = string.split('');
for (let i=0; i < string.length; i++){
    word[i]= word[i][0].toUpperCase() + word[i].substr(1);
}
console.log(word.join(' '));*/