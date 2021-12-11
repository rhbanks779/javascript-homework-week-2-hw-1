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

// let userTemp2 = Number(prompt("Please enter a Fahrenheit temperature:"));

// function fahrenheitToCelsius(userTemp2){
//     let cTemp = (userTemp2 - 32)/ 1.8;
//     let cTemp2 = Math.trunc(cTemp)
//     return userTemp2 + " degrees Fahrenheit is " + cTemp2 + " degrees Celsius."
// }
// console.log(fahrenheitToCelsius(userTemp2));

//#3
//let studentInput = prompt("Please enter your activity: ")
const students = [{ name: 'Brad Boul', activity : ['swimming', 'soccer'], gender : 'Male' },
             { name: 'Cal Hodges', activity : ['basketball', 'swimming'], gender: 'Male' },
             { name: 'Jonathan Say', activity : ['soccer', 'volleyball', 'basketball'], gender: 'Male' },
             { name: 'Mary Hill', activity: ['soccer', 'swimming'], gender : 'Female' },
             { name: 'Rachel Smith', activity: ['basketball', 'volleyball', 'soccer'], gender: 'Female' },
             { name: 'Lisa Carter', activity: ['soccer', 'basketball'], gender: 'Female'}]

const sports = students.find( ({activity})=> activity === 'swimming');
// function sports(sport){
//     return sport.activity === 'swimming';
// }
console.log(sports);
//     function studentGroup (student.map() => {   
//             if (students.activity == 'swimming'){
//              return students.name + student.activity + student.gender; 
//         }
//     });

// console.log(studentGroup(students))

    // function studentGroup (input){
    //     const sport = [input];
    //     return sport.filter((input) => 'swimming');
    // }
    // console.log(studentGroup(students))
    
    //          const studentGroup = students.filter(sport => (sport.activity.includes('swimming')));
    //  console.log(studentGroup);
         
    //      const studentGroup2=students.filter(sport=> (sport.activity.includes(studentInput)));
    //          console.log(studentGroup2)
         
          