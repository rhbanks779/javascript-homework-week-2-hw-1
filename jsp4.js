//print a triangle with nested loops
/* example, column dependent upon row, 1row=1column, as row increases/column does
1
22
333
4444
55555*/
/*for( r=1; r<=5; r++){
    for( c=1; c<=r; c++){
        process.stdout.write(r.toString() + '\t')//or (r + "\t")
        console.log()//empty console will bring control to the next line
    }
}*/
/*
1
12
123*/
/*for (r=1; r<=5; r++){
    for (c=1; c<=r; c++)
        process.stdout.write(r.toString())//\t adds space//r. or c. changes data from row and column
    }
    console.log()*/

//strings with properties and methods
//let text= 'Hello World!!';
//let text1= 'hello';
//let text2='world';
//let length = text.length;//gives length of string-13 for ex
//let letter= text.charAt(2)//gives character position-ex is l
//let code = text.charCodeAt()//gives you the unicode of the character-every letter has its own code
//let result = text1.concat(text2);//concatenates text
//let result =text.indexOf()//searches for occurrences of given input
//let result = text.repeat()//provide number of times wish to repeat
//str.replace(/char/g, '') / /g means global, will replace every instance with inputed value
//slice() extracts a part of a string and returns the extracted part(start, end -1)will slice before endpoint
//let result = text.slice(3, 8)
//string.fromCharCode-put in charcode and it will output number
//console.log(length);
//console.log(letter);
//console.log(result);
//console.log(result);

/*var i = 10;
while (i >=4){
       i -=1;
}
console.log(i*4);*/

//strings practice W2D2 morning lab
//#1
/*let i= 65;
let x= 90;
for(;i<=x; i++)
    console.log(String.fromCharCode(i));*/

    /*let prompt = require('prompt-sync')();
    let word = prompt('enter anything: ');
    let i=0;
while( i < word.length){
    console.log(word.charAt(i))
    i++
}*/

//#3 print string in reverse w/o using reverse
/*let prompt = require('prompt-sync')();
    let word = prompt('enter anything: ');
    let i=word.length - 1;
    while(i >=0){
        console.log(word.charAt(i))
        i--}*/

        //#4 Print total number of vowels in a given input
        /*prompt = require('prompt-sync')();
        let word = prompt('enter anything: ');
        let z = 0;
        for(i=0; i < word.length; i++ ){
           let x= word.charAt(i);
            if (x === "A" || x==="a" || x==="E" || x==="e" || x==="I" || x==="i" || x==="O" || x==="o" || x==="U" || x==="u"){
            z+=1;
            }
        }
        console.log(z);*/

        //#5
        /*let prompt = require('prompt-sync')();
        let word = prompt('enter anything: ');
        let z=0;
        for( i = 0; i < word.length; i++){
            let x = word.charAt(i);
            if(x==="x"){
                z+=1;
            }
        }
        console.log(z)*/

        /*cookieCost=4 
        pay=100
        quarter=.25
        time=(pay-cookieCost)/quarter
        count=0
        while (count <= time){
            count++ //same as saying +=1
        }
        console.log(count)*/

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
        
        //Higher Order Functions
        //common methods=map, filter, reduce, find, foreach
       /* const numsArray = [2, 3, 7, 10, 45];

        const newNumsArray=numsArray.map((num)/*iterating through each element)*/ //=> {
        //return num * 2;
        /*})
        console.log(newNumsArray);
        console.log(numsArray)//has not changed the original

        const getSquares=[5, 22, 34, 66];
        const newGetSquares= getSquares.map((num) =>{
            return num * num;
            //const getSquares= (arr) =>{
                //return arr.map(x => x*x);
                //console.log(getSquares([1, 2, 3, 4, 5])); 
                //different, more clean way to do same problem
            }
        })
        console.log(newGetSquares);
        console.log(getSquares); */

        //filter an array based on search criteria
        const numbers=[1, 2, 3, 5, 8, 10, 34];
//only return numbers >7
    const newNumbers=numbers.filter((num)=> {
     return num > 7
    })
    console.log(newNumbers)
    console.log(numbers)