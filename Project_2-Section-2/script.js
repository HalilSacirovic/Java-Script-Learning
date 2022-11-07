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




// LECTURE 39  ===== ARRAY


const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

// INSTEAD OF THAT WE CAN DO LIKE THIS

const friends = ['Michael','Steven','Peter'];
console.log(friends);

// const years = new Array (1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);


console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Halil';
// const halil = ['Halil','Sacirovic',2037-1991];
// We can  can do that but

const halil = [firstName,'Sacirovic',2037-1991,'Programmer',friends];

console.log(halil);


// const


const calcAge =function (birthYear){
    return 2037- birthYear;
    
}

const years = [1990,1967,2002,2010,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log( age1,age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]

console.log(ages)




///////////////////////////////////////
// LECTURE 40 ARRAY FUNCTIONS




// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // ADD TO THE LAST PLACE
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // add AT THE FIRST PLACE
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////

// LECTURE 41
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉


/////////////////////////////////////////////////////////////////////

const calcTip = function (bill) {
    return bill <=300 && bill>= 50 ? bill* 0.15 : bill * 0.2;
    
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(bills,tips);



/////////////////////////////////////////////////////////////

PITAJ PROFESORA DA TI OBJASNI OVO GORE 



//////////////////////////////////////////////////////////////


const total = [bills[0]+tips[0]];
console.log (total)






// LECTURE 42-43  Objects  and Dot vs Bracket


const jonas = {
    firstName:'Jonas',
    lastName:'Schmedtman',
    age:2037-1991,
    job:'Programmer',
    friends:['Michael','Peter','Steven']
}


console.log(jonas);
console.log(jonas.lastName); // DOT OPERATOR 
console.log(jonas['lastName']); // BRACKETS OPERATOR


const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);


const interestedIn = prompt('What do you want to know about Jonas?Choose between firstName,lastName,age,job and friends');
console.log(jonas[interestedIn]); // LIKE THIS 

// console.log(jonas.interestedIn);  // WE CAN NOT DO LIKE THIS INSTEAD OF WE DO LIKE THIS UP THERE


// If someone or I put something that is not in jonas Value exaple:he put that he want to know his location
// that is not gonna work, and it will show you in console that is undefined 

// So if we want to change that undefined to write something else we use IF/ ELSE STATEMENT


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); // LIKE THIS 
    
}
else {
    console.log ("We dont have information about that.Choose between firstName,lastName,age,job and friends")
}


// SO this happends because undefined is FALSE value, so IF Jonas[InternedIN] is true that will
// write you what you want if we have it 
// But if we dont have it or if statemnt is not true that will go to the 
// ELSE STATEMENT and Do what is in there.


// NOW IF we want to add something more in there we can do LIKE THIS DOWN

jonas.location = 'Portugal'; // DOT METHOD 
jonas['twitter']= '@jonasschmedtmen'; // BRACKET METHOD
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`);






// LECTURE 45 CODING CHALLENGE #3




Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
    method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 


*/


const mark = {
    firstName:'Mark',
    lastName:'Miller',
    height: 1.69,
    mass:78,
    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2 ;
        return this.bmi;
    }
}

const john = {
    firstName:'John',
    lastName:'Smith',
    height: 1.95,
    mass:92,
    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2 ;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log (mark.bmi, john.bmi);


if(mark.bmi > john.bmi) {
    console.log( `${mark.firstName}'s BMI (${mark.bmi}
        is higher than ${john.firstName}'s bmi (${john.bmi}))`)
}
else if (john.bmi > mark.bmi) {
        console.log( `${john.firstName}'s bmi (${john.bmi}
        is higher than ${mark.firstName}'s bmi (${mark.bmi}))`)
}