//Exercise 1
/*const myArray=[1, 2, 3, 4, 6, 10, 24, 45, 67];

const myNewArray= myArray.filter(num => num % 2===0); 
console.log(myNewArray)

const myNewArray2= myArray.filter(num => num % 2 !==0);
console.log(myNewArray2)
*/

//Ex 2
/*const myArray=[1, 2, 3, 4, 6, 10, 24, 45, 67];
const myNewArray=myArray.filter(num => num % 6 ===0);
console.log(myNewArray)
*/

//Ex 3
//const myString = ['yes', 'no', 'red', 'blue'];

// const myNewString=myString.map((str) => {
//     return str.toUpperCase(); 
// })
// console.log(myNewString)


//Ex 4

// const capitalize = (string) => {
//     let newString = string.toUpperCase()
//     return newString
// }
// capitalize('Hello World')

// let checkifEvenArray = splitString.map( (item, index) => index % 2 === 0 ? capitalize(item) : item)
// let swapCaseArray = checkifEvenArray.join(" ")
// console.log(`New array is ${swapCaseArray}`)
// function swapCase(string) {
//     let string = str.split(' ').map((word, index) => (index%2===0) ? myNewString(word): word)

//     console.log(string)
// }
// swapCase('my name is robert')
//console.log(string)



//chaining=add methods to other methods
//const newSwapCase1=swapCase =>str.split(" ").map(str => ;

    //===swapCase[str].toUpperCase());

//const newSwapCase2=newSwapCase1.map(str => str.toUpperCase(str+=2));
/*const newSwapCase=swapCase.map((str) => {
    str.split(" ");
    for(i=0; i < swapCase.length; i++){
        result charAt(i+=2).toUpperCase(i);
        (str.toUpperCase(str+=2)))
        //charAt[i].toUpperCase[i]
    }
})*/
///console.log(newSwapCase1)
//console.log(newSwapCase2)


//Ex 5
//const shiftLet = 'ifmmp';

// const shiftLetters = (string) => {return string.split('').map(word => {return word.split('').map(letter => { return
// string.fromCharCode((letter.charCodeAt()-1))}).join('')}

// console.log(string)
function shiftLetters(str){
    return str.split(' ').map(function (word){ //same thing as (=>)
        return word.split('').map(function (letter){
            return String.fromCharCode(letter.charCodeAt() + 1)
        }).join('')}).join('')}
        console.log(shiftLetters('baseball'))

// const shiftLet1=shiftLet.split("").map((item, index) => shiftLet.charCodeAt(index){
//      for ()
//  });
// console.log(shiftLet1)

//const shiftLet2=shiftLet1.map(str => str[str].charCodeAt());

//const shiftLet2=shiftLet1.map((str => str.fromCharCode()))
//fromCharCode converts unicode to string
//console.log(shiftLet1)
//console.log(shiftLet2)

//bonus question
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// const noFullStack = users.filter(roles => (roles.role !== 'Full Stack Resident'));
// console.log(noFullStack)