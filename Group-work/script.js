/*function gimme (triplet) {

  if(triplet[0]>triplet[1]){
    
    if(triplet[2]<triplet[1]){
     return triplet[1];
      
    }
  }



}

console.log(gimme([4,5,12]))




function invert(array) {

  for(i=0;i<array.length;i++){
    array[i]=array[i]*(-1);
  }
  return array;
}



function countPositivesSumNegatives(input) {
  var sum=0;
  var br=0;
  
  for (var i=0;i<input.length;i++){
    if (input[i]>0 ) {
      br++
    }
    if(input[i]<0){
      sum=sum+input[i]
    }
  }
  return [br,sum]
}

function sumOfDifferences(arr) {
  var sum=0;
  
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  
  for(var k=0;k<arr.length -1;k++){
    sum=sum+(arr[k]-arr[k+1]);
  }
  
  return sum;
  }
  
  
  
  
  function sortByLength (array) {
    
    
    for (var i=0; i<array.length;i++){
      for (var j=0;j<array.length;j++){     
        if(array[i].length <array[j].length) {
          var pom=array[i];
          array[i]=array[j];
          array[j]=pom;
      }
    }
  }
  
  return array;
}  



function dontGiveMeFive(start, end)
{
  
  
  var count=0;
  
  for(var i = start; i<=end; i++){
    var numString = String(i)
    if (!numString.includes("5")){
      count++;
      
    }
  }
  return count;
}




function min(arr, toReturn) {
  
  var mini=arr[0];
  var minIndex= 0;
  for(var i=1;i<arr.length;i++){
    if (mini>arr[i]){
      mini=arr[i];
      minIndex= i;
    }
    if(toReturn === "index"){
      return minIndex;
    }else if (toReturn === "value"){
      return mini;
    }
    
  }
}

function wave(str){
  var wavedStrings = [];
  
  for (var i = 0 ; i<str.length;i++){
    var word = str.toLowerCase()
    var letters = word.split("")
    if (letters[i] === " "){
      continue;
    }

    letters[i] = letters[i].toUpperCase()
    word = letters.join("")
    wavedStrings.push(word)
  }
  return wavedStrings
}


var myName= "halil"

var nameLetters = myName.split("");
var reversedLetters=nameLetters.reverse("");
var myNameRe = reversedLetters.join("");
console.log("Elhamdu" + myNameRe)





function twoOldestAges(ages){
  var filter =[]
  for (var i = 0; i <= ages.length - 2; i++) {
    for (var j = i + 1; j <= ages.length - 1; j++) {
      if (ages[j] > ages[i]) {
        var pom = ages[i];
        ages[i] = ages[j];
        ages[j] = pom;
      }
    }
  }
  filter.push(ages[1],ages[0])
  return filter
}


console.log(twoOldestAges([1,2,5,12,5,13]))
*/





function checkExam(array1, array2) {
  var counter=0
 for (var i=0;i<array1.length;i++){
   if(array2[i]=== ""){
     continue;
   }
   if(array1[i] === array2[i]){
     counter= counter + 4 ;
   }
   else {
     counter= counter-1 ;
   }
 }
 if(counter > 0 ){
   return counter;
 }
  else{
    return 0;
  }
}

var capitals= function (word){
  var letters= word.split ("");
  var filter = []

  for (var i=0;i<letters.length;i++){
    if (letters[i]=== letters[i].toUpperCase()){
      filter.push (i);
    }
  }
  return filter
}