/*for (let i=10; i >=1; i--){
    console.log(i);
}
*/

/*for (let i=1; i <=9; i+=2){
    console.log(i);
}
*/

/*
for (let i=2; i <=10; i+=2){
    console.log(i);
}*/

/*for (let i=6; i <=60; i+=3){
    console.log(i);
}*/


/*var x='';
for (let i=0; i <=6; ++i){
    x= x + '#';
    console.log(x);
}*/

/*
for (let i=0; i <=12; i++){
    if (i % 2 ===0){
        console.log(i);
    }
}*/

/*
for (let i=1; i<=21; i++) {
    if (i === 1 || i=== 3) {
            console.log(x +  " is odd");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is prime");
    }
}*/


/*let num=5;
for (let i = 1; i <=10; i++){
    console.log(num + ' x ' + i + ' = ' +(num*i));
}*/

/*practice while loop
let i=1;
while(i<=10){
    console.log(i+"Hello ")
    i++
}*/

/*
let num=2;
let i=1;
while(i<=10){
    console.log(num + '*' + i + '=' + (num*i))
    i++
}*/

/*
let i=1;
while (i <= 35){
    console.log(i)
    i +=3;
    }*/

    /*
    let i=0;
    while (i < 100){
        console.log(i)
        i +=5;
    }*/

    /*
    let i=0;
    let x=3;
    while (i <=20){
        let y = (i % 2)
        i++;
        if (y === 0){
            console.log(i * x);
        }
    }*/

    //print all prime numbers 0-20
    /*let i=0;
    while (i <=20){
        i++;
        if (i % 2 > 0){
            console.log(i);
        }
    }*/

    //add the values of the controling variable and print final sum; i=1 to 10
    /*let i=0;
    let total=0;
    while (i <= 10){
        total = total + i;
        i += 1;
         }
         console.log(total);*/


    //within the given range of numbers find all the odd numbers 5-20, i=5, j=20
    /*let i=5;
    let j=20;
    while (i <= j){
        console.log(i)
        i +=2;
    }*/

   /* let i=4;
    let pay= 10;
    let total = 0;
for (let i=4; i <= pay; i++){
    total = i;
    
}

    console.log(total/4);*/

    /*let price=4;
    let payed=10;
    let owed=0;
    while(price <= payed){
        let owed = price + 1;
        price++
    
    console.log(owed*4);}*/

    //user input through terminal
    /*let prompt = require('prompt-sync')()

    let num = prompt('enter a number: ')
    console.log(num)*/
    //stores entered value as a string, to change to a number us: num=Number(num)

    /*Functions-want to add 4 variables to 3 several times:
    function add(x,y,z,w){
        (x + y +z+w +3)
    }*/

    let prompt = require('prompt-sync')();
    let number = prompt('enter a number: ');
    console.log(typeof number);
    number = Number(number);
    console.log(typeof number);
    console.log(number);//nested for loops
    console.log('---------------------');
    for (let c = 1; r< number; r++){
        for (let c=1; c<= number; c++){
            ProcessingInstruction.stdout.write('} ${r*c} }')
        }
    }
console.log();
console.log('_________________');