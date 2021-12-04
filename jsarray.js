//array practice
//let practiceGroup = ['I', 'need', 'a', 'lot', 'more', 'practice', '!']
//practiceGroup.push('!', '!')
//console.log(practiceGroup)
//practiceGroup.pop();
//console.log(practiceGroup);
//practiceGroup.splice(5, 7);
//console.log(practiceGroup);
//practiceGroup.splice(5, 0, "practice", "!");
//console.log(practiceGroup);
//console.log(practiceGroup.slice(1, 3));
//practiceGroup.shift();
//console.log(practiceGroup)
//practiceGroup.unshift('Yes')
//console.log(practiceGroup)
//console.log(practiceGroup.toString())
//console.log(practiceGroup.join('#'))
//console.log(practiceGroup.join('--'))
//console.log(practiceGroup.reverse())
//practiceGroup.push(1, 4, 6)
//console.log(practiceGroup.sort())
//console.log(typeof practiceGroup)

//travel through array
/*let num=[]
num.push(10, 20,30)
console.log(num)
//pushing 10 values in a for loop, this loop is used to populate num array with new values
for(let j=0; j<10; j++){
    //num.push(2*j) //does multiples of 2
    num[j]= (5*(j+1))//populate with multiples of 5
    //value = input from user then num[j]= value
}*/

//accessing array inside of a for loop, this loop displays the values of num array after populated
/*for(let i=0; i < num.length; i++){
    console.log(num[i])//to see each value in array
}*/
//double dimension arrays are accessed through double for loops

//populating a table with data from a nested loop, row/column always start with 0
/*let numArray=[]
value=10//variable to store values generated in for loops
for(let r=0; r<5; r++){
    numArray[r]=[]//makes row an array
    for(let c=0; c<6; c++){
       numArray[r][c] = value;//this line now assigns values to the array, as established by value=10
       value+=2   //must use both when using double dimension like a table
       //process.stdout.write(numArray[r][c])//to display horizontal
    }
    //console.log()
}
console.log(numArray)*/

//make a string array and display the length of each element
let stringArray = ['Red', 'Blue', 'Orange', 'Yellow']
x=0;
for (i=0; i < 4; i++){
    x=stringArray(i.length)
    i++
    console.log(x)
}
//console.log(x)