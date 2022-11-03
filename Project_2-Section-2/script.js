'use strict'; 
// This help us to show us what is the problem in our code
// exaple if we didnt name our variable fully true this will show us what is the problem with line of code exaple is done there



/* 
let hasDriversLicence = false;
const passTest = true;

if (passTest ) hasDriversLicence = true;
if (hasDriversLicence) console.log ("I can drive a car");
*/ 


// I write this variable wrong on purpose because You can see that will show you in 
// a console what is the wrong with code or variable in this case
// I named variable wrong I forgot to put "s" and becasue of that
// this if statement didnt work because it's not true;
// but When I put "s " like the real name of variable  this code will
// work because I changed hasDriversLicence from "FALSE" to "TRUE"
// If you can not manage with this go to the course SECTION 3 32 Lecture;




// LECTURE 33 FUNCTIONS

/* 


function logger () {
    console.log('My name is Halil');
}
// calling / running / invoking function


logger ();
logger ();
logger ();


function fruitProcessor(apples, oranges) {
    console.log (apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

}

 const appleJuice = fruitProcessor(5, 0);
console.log( appleJuice);
console.log (fruitProcessor(5,0 ));

const appleOrangeJuice = fruitProcessor (2, 4 );
console.log (appleOrangeJuice);




/////////////////////////////////////////////////////////////////////////


// LECTURE 34 

// You can use Whatever you want that is on you 



function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const  age1 = calcAge1(1991);
console.log (age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2 (1991);

console.log (age1,age2);


// LECTURE 35  ARROW FUNCION



const calcAge3 = birthYear => 2037- birthYear;
const age3 = calcAge3 (1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age; 
    return `${firstName} retires in ${retirement} years`
}

console.log (yearsUntilRetirement(1991, "Jonas"));
console.log (yearsUntilRetirement(1980, "Bob"));




// LECTURE 36 

function cutFruitPieces(fruit) {
    return fruit * 4;
    
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
    
}

console.log (fruitProcessor(2,3)); 


// first it takes from console.log (fruitProcessor(2,3)); and 
// put values 2 and 3 in function fruitProcessor(apples, oranges) 
// instead of apples and oranges and put down there in const applePieces = cutFruitPieces(apples); 
// and that come to function cutFruitPieces(fruit) and multiple that value with 4
// and put that value back to  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;







// LECTURE 37 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear,firstName) {
    const age = calcAge (birthYear);
    const retirement = 65 - age; 
    if (retirement> 0 ) {
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`); // THAT WILL NOW EXECUTED
    }
    else {
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} years`
}

console.log (yearsUntilRetirement(1991, "Jonas"));
console.log (yearsUntilRetirement(1970, "Mike"));






// LECTURE 38 CODING CHALLENGE #1 


Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
    one average score per team).
    A team only wins if it has at least double the average score of the other team. 
    Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 

*/


const calcAverage = (a,b,c) => (a+b+c) / 3;

console.log (calcAverage(3,4,5));

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);


console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {

if(avgDolhins >= 2*avgKoalas) {
    console.log (`Dolphins win the Trophie (${avgDolhins} vs ${avgKoalas} )`);
}

else if (avgKoalas >= 2*avgDolhins) {
    console.log (`Koalas win the Trophie (${avgKoalas} vs ${avgDolhins} )`);
}
else {
    console.log("Nobody win the trophy");
}
    
}

checkWinner(scoreDolphins,scoreKoalas)