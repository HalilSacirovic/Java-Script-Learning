let js = "amazing";
console.log (40+8+10+12);

console.log ("Jonas");
console.log (23)

let firstName = "Halil";
console.log (firstName);
console.log (firstName);
console.log (firstName);


//  We can't write code name with a number example

// let 3years:3; We can not do that like this 


// We can start with $ or _ 

// exaple : $function halil_sacirovic or like that 


let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

// This is the better way to write like that thern like this 

let job1 = "Programmer"
let job2 = "Teacher"

console.log (myFirstJob, "is the better job than",myCurrentJob)


let year;
console.log (year);
console.log (typeof year);


year = 1991;
console.log (typeof null);


// I dont know what is this for I need explain of professor

let age = 30;
age = 31;


const birthYear = 1991; 
// birthYear = 1990 , When we use const we can not change the variable 

// var is the old value and we should avoid that
var job = "programmer"
job = "teacher"


// We should always declare variable,we can do that like that down but Is Always BETTER TO declare Variable

lastName = "Sacirovic"
console.log (lastName)


// MATH OPERATORS 



const now = 2037;
const ageHalil = now - 2003;
const ageSarah = now -2018;
console.log(ageHalil, ageSarah);

console.log (ageHalil * 2, ageHalil / 10, 2**3);

// 2**3 means 2 to the power of 3 which it means 3= 2*2*2

console.log (firstName + " " + lastName);

let x = 10 + 5;

x += 10; // x= x+10
x *=4; // x= x*4
x++;
x--;
x--;
console.log (x);


// COMPARISON OPERATORS 


console.log (ageHalil > ageSarah); // >,<, >= ,<=
console.log (ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log (now - 1999 > now -2018);

//

console.log ( 25-10-5);

let h, y;
h =y=25-10-5;

console.log (h, y );

const averageAge = (ageHalil+ageSarah) / 2
console.log (ageHalil, ageSarah,averageAge  );

//  CHALLENGE CODE 

// const markWeight = 78;
// const markHeight = 1.69 ;

// const johnWeight =92;
// const johnHeight = 1.95;


// console.log ("Mark height is", markHeight, "and his weight is "+  markWeight + "kg" );
// console.log ("John height is", johnHeight, "and his weight is " +  johnWeight + "kg" );

// const bmiJohn = johnWeight / johnHeight**2;
// console.log ("John BMI is "+ bmiJohn+"%");

// const bmiMark = markWeight / markHeight**2;
// console.log ("Mark BMI is " +bmiMark+ "%");

// console.log (bmiMark > bmiJohn)


// ========================


const firstNamee = "Halil";
const birthYeara = "2003";
const yearr = "2037";

const halil = "I'm "+ firstNamee +" My Job is " + job +  " and I'm " + (yearr - birthYeara);
console.log (halil);

//==================


// This is a method which is the  easier way to write something  like this up 


const halilNew = `I'm ${firstNamee} my job is ${job1} and I'm  ${yearr-birthYeara}`
console.log (halilNew);

console.log (`Just a regular string ...`);
console.log (`String with \n\ 
multiple \n\
`);

// OR we can use just 

console.log ( `String 
multiple`);


// =================


// IF / ELSE STATEMENTS 

const myAge = 15;
const isOldEnough = myAge >= 18;

if (isOldEnough) {
    console.log ( "Sarah can start driving licence🚘 ")
}

else  {
    const yearsLeft = 18 - myAge;
    console.log (`Sarah is to young, wait another ${yearsLeft} years`)
}


const birthYear2 = 2003 ;


let century;
if ( birthYear2 <= 2000) {

 century = 20;
}

else {
century =21;
}

console.log (century);


// ====


const markWeight = 78;
const markHeight = 1.69 ;

const johnWeight =92;
const johnHeight = 1.95;


console.log ("Mark height is", markHeight, "and his weight is "+  markWeight + "kg" );
console.log ("John height is", johnHeight, "and his weight is " +  johnWeight + "kg" );

const bmiJohn = johnWeight / johnHeight**2;
console.log ("John BMI is "+ bmiJohn+"%");

const bmiMark = markWeight / markHeight**2;
console.log ("Mark BMI is " +bmiMark+ "%");

console.log (bmiMark > bmiJohn);


if ( bmiJohn >= bmiMark) {
   console.log ( `John's BMI is ${bmiJohn} which is higher than Mark's BMI,which is ${bmiMark}`)
}

else {
   console.log ( `Mark's BMI is ${bmiMark} which is higher than John's BMI,which is ${bmiJohn}`)
}


// I solved This Challenge without help or anything like that so I know how it works 

const inputYear= '1991';
console.log (Number (inputYear) + 18); // This is the way how we can change from string to number if We want to add up some number to another without this method
// We will get just exaple 1991 +18 = 199118
console.log (inputYear +18);


//

console.log (Boolean(0));
console.log (Boolean(undefined));
console.log (Boolean('Halil'));
console.log (Boolean({}));
console.log (Boolean(''));

// Exaple for this 

const money = 0 ;

if (money ) {
    console.log ("Don't spend it all ")
}
else {
    console.log ("You should get a job ")  // This will show in a console because
}

//because first statment is false and he will go to the else statment and executed that one 
// If we have some money exaple money = 100, this will show first beacause it is true 


const agE = '18';
if (age=== 18 ) console.log ('You just became an adult  (strict)');

if (age == 18 ) console.log ('You just became an adult (loose)');

const favourite =Number ( prompt ("What's your favourite number "));

console.log (favourite);

if (favourite === 23 ) {
    console.log ('Cool 23 is amazing number')
} 
else if (favourite === 7 ) {
    console.log ('7 is also a cool number')
}
 else if  (favourite ===9 ) {
    console.log ('9 is not bad number for student ')
 }

 else {
    console.log ("Number is not 23, 7 or 9")
 }


 if (favourite !== 23) console.log ("Why not number 23 ");



 ///////////////////////////



 const drink = age >= 15 ? 'juice': 'water0';
 console.log(drink);

 let drink2; 
 if (age>= 18) {
    drink2= 'juice';
 }
 else {
    drink2 = 'water'
 }

 console.log(drink2);

 console.log (`I like to drink ${age>=18 ? 'juice': 'water'}`)