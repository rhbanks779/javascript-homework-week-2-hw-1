//array deconstructing
const myArray =['dog', 'cat', 'sofa', 'chair', 'tv'];
//let [a, b, c, ...others] = myArray;
// console.log(myArray)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(others)
// console.log(a, c)

//more examples
// let [a, , , c, ...others] = myArray;
// console.log(myArray)
// console.log()
// console.log(a, c, others)

//creating objects in JS
// let myCar ={
//     make: 'Ford',
//     model : 'Mustang',
//     year: 1959
// }
// console.log(myCar)
// console.log(myCar.model)
// console.log("the car is a " + myCar.make + " and is from " + myCar.year)

// let person = {
//     fname : 'John',
//     lname: "Smith",
//     address: "101 main street",
//     age: 35,

//     fullName: function(){
//         return person.fname +" "+ this.lname
//     }
// }
// console.log(person.fullName() +" "+ person.address)

// let athleteA = {
//     fName: 'John',
//     lName: 'Smith',
//     height: '6ft9in',
//     weight: '255lbs',
//     position: 'center',
//     ppg: 14,
//     rpg: 8,

//     bio: function(){
//         return athleteA.fName + " "+ athleteA.lName + " is " + athleteA.height +" tall,  " + athleteA.weight + "."
//     },

//     avgPerGame: function(){
//         athleteA.ppg = 17;
//         athleteA.rpg = 6;
//         return athleteA.ppg + "ppg and " + athleteA.rpg +" rpg."

//     }

// }
// Object.entries(athleteA).forEach( entry => {
//     let [key, value] = entry
//     console.log(`The key is ${key}, and the value is ${value}`) })

// Object.entries(athleteA).map((element, index) => console.log`${athleteA.fName} + ${athleteA.lName} + is a star basketball player for x university.`)

//     console.log(athleteA)
//     console.log(athleteA.bio())
//     console.log(athleteA.avgPerGame())


//filtering records with objects inside arrays
    const activities =[
        {name: 'swim', ages: [6, 7, 9], maxCap: 10},
        {name: 'skate', ages: [8,9,10,11], maxCap: 20},
        {name: 'open gym', ages: [12,13,14], maxCap: 30}
    ];
    const largeGroup = activities.filter(activity => (activity.maxCap > 15));
    console.log(largeGroup);

    //const ageAppropriate = largeGroup.filter(activity => (activity.ages.includes(10)))
   const ageAppropriate = largeGroup.filter(activity => (activity.ages[0] == 8));
    console.log(ageAppropriate);