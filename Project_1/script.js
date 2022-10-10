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

console.log (bmiMark > bmiJohn)


// ========================


const firstNamee = "Halil";
const birthYeara = "2003";
const yearr = "2037";

const halil = "I'm "+ firstNamee +" My Job is " + job +  " and I'm " + (yearr - birthYeara);
console.log (halil);

//==================


// This is a method which is the  easier way to write something  like this up 


const halilNew = `I'm ${firstNamee} my job is ${job1} and I'm  ${yearr-birthYeara}`
console.log (halilNew)