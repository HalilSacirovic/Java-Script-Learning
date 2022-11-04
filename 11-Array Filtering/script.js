var max;
var arr = [1,1,2,5,6,4,7,21,6,7,3,2];
var rezultat = [];

for(var i=0;i< arr.length; i++) {
var brojevi= arr[i];
  if(!rezultat.includes(brojevi)){
    rezultat.push(brojevi);
  }
}
console.log(rezultat);


for(i=0;i<rezultat.length-1; i++) {
  for(j=i+1;j<rezultat.length; j++){
    if(rezultat[i]>rezultat[j]) {
    var pom;
    pom= rezultat[i];
    rezultat[i]=rezultat[j];
    rezultat[j]= pom;
  }
  }
}
console.log(rezultat);

var max= rezultat[rezultat.length-1]; 
console.log(max);

