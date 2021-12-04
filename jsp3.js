//ES5-add 3 numbers
/*function add(x, y, z){
    let i;
    i= (x + y + z)
    return i;
}
console.log(add(1,3,5));*/

//ES6-add 3 numbers and divide by 3
/*let add = (x,y,z) => (x+y+z)/3;
console.log(add(1,4,6));*/

const fb = [];
// ADD CODE HERE fizzbuzz challenge
/*for (let i = 1; i<=16; i++){
  
  if(i % 3 === 0){
    fb.push('fizz');
  }

    else if(i % 5 === 0){
  fb.push('buzz');
}
else if (i % 3 === 0 && i % 5 === 0){//put 1st
  fb.push('fizzbuzz');
  }
else{
  fb.push(i);}
}
console.log(fb);*/

//using for loop to insert data into a table
for(let r=1; r<=5; r++){
    for(let c=1; c<=6; c++){
       process.stdout.write(r.toString())}//places values side by side on each row
        console.log(r);//repeats value of r into full row-use variables to change output
    }//can take input from user and display into cells
    //name=input(), then console.log(name)
