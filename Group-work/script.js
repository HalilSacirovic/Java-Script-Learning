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

*/
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
  
