/*nam="Robert"
x=7
y=5
a=6
b=21
c=4

add= (x+y)
add1=(x+y+a+b+c)
div= (x/y)
sub=(x-y)
mult=(x*y)
avg=(add/2)
avg1=(add1/5)

console.log("Hello " + nam)
console.log(add)
console.log(div)
console.log(sub)
console.log(mult)
console.log(avg) 
console.log(avg1)

if (x > a)
{
console.log(x + " is greater than " + a)
}
else if ( x < a)
{
    console.log(x + " is not greater than " + a )
    }
else 
{
    console.log(x + " is equal to " + a)
}

if (y  > 0)
{
    console.log(y + " is positive")
    }
else 
{
    console.log(y + " is negative")
}
console.log(x % c) //modulo operation

if ( x % 2 == 0)
{
    console.log(x + " is an even number")
        
}
else
{
    console.log(x + " is an odd number")
}

if (b >= 18)
{
    console.log("You are eligible to vote!")
}
else
{
    console.log("You are not eligible to vote!")
}
//logicl operators
if (x < 10 && y > 1)
    {
        console.log("True")
    }

if (x==5 || y==5)
{
    console.log("False")
}
if (!(x==y))
{
    console.log("True")
}

//display larger of 2 integers 
in1=40
in2=50

if (in1 > in2)
{
    console.log(in1)
}
else{
    console.log(in2)
}

//score>= 90-100 A
//score>= 80-89 B
//score>= 70-79 C
//>= 55-69 D
//<55 
score=95

//if (score >=90 || score==100)
if (score >=90 && score <=100)
{
    console.log("A")
}
else if (score >=80 || score==89)
{
   console.log('B') 
}
else if (score >=70 || score==79)
{
    console.log("C")
}
else if (score>=55 || score==69)
{
    console.log('D')
}
else{
    console.log('Try Harder')
}

h=20
l=10

if (h !== l)
{
    console.log("l= " + h + " h= " + l)
}
else{
    console.log("l and h are equal")
}

//using var declaration-global scope
var msg;
var num1= 20
var num2= 10
sum=num1 + num2

if(sum>0)
{
    msg="sum is a positive number"
}
else if(sum<0)
{
    msg="sum is a negative number"
}
else{
    msg="sum is zero"
}
console.log(msg)

//let used mainly within blocks, can only declare one variable
//const use once, variables used in all caps, must be initialize when declared
//example: const COMPANY= "abc pvt ltd"

var dob;
dob= 18;

if (dob>=18)
{
    console.log("Access Granted")
}
else{
    console.log("Access Denied")
}
*/

for (let i=5; i < 11; i++){
    console.log(i);
}
//nested if/else conditions
let num = 10;
if (num > 0){
    if (num > 100){
        console.log(num + ' is > 100');
    }
    else {
        console.log(num + " is < or equal to 100");
    }
}
else if (num < 0){
    console.log(num + ' is a negative number');
    }
else {
    console.log(num + ' is zero');
}

let age= 24;

if (age >= 5 && age <= 10) {
        console.log('you are an elementary schooler');}
else if (age >= 11 && age<= 13){
            console.log('you are a middle schooler');
        }
else if (age >= 14 && age<= 17){
            if (age >= 16){
                console.log('you are a high schooler and you can also drive');
            }
            else{
                console.log('you are only in high school');
            }
        }
else if (age >=18){
    console.log('you are too old');
}
else if (age <= 4){
    console.log('you are too young');
}
    