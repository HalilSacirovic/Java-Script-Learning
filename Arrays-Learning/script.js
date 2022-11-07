/*

var arr = [1,1,2,5,6,4,7,21,6,7,3,2,5];
var zbir=0;
var i,j,p;


for(i=0; i<=arr.length-1; i++) {
  zbir=zbir + arr[i];
}


for(i=0;i<=arr.length-2;i++) {
  for(j=i+1;j<=arr.length-1;j++) {
    if(arr[i]>arr[j]){ 
      p=arr[i];
      arr[i]=arr[j];
      arr[j]=p
    }
  }
}

console.log (zbir);
console.log(arr);

*/





var arr = [1,1,2,5,6,4,7,21,6,7,3,2,5,9,81,49];
var sqrte,kvadrat=1;


for (i=0;i<=arr.length-1;i++){
  if(arr[i] % 3 === 0) {
    kvadrat = arr[i]*arr[i];
    console.log( "\nPosto je ovaj broj deljiv sa 3 \nOvo je kvadrat  broja\n "  +  arr[i] + " = " + kvadrat);
    console.log ("")
  }
  else if ( arr[i] % 2 === 0 ) {
    sqrte = Math.sqrt(arr[i]);
    console.log( "\nPosto je ovaj broj deljiv sa 2 \nOvo su koreni iz brojeva\n"  +  arr[i] + " = " + sqrte)
  }
}