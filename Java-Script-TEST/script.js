'use strict'

// ZADATAK NUM: 1 

/*

var arr = [1,2,4,3,6,7,9,5,12,15];
var k= 5 ;
var i,j;
var filter =[];
var numbersOfPairs =0;
for (i=0;i<=arr.length-2;i++){
    for(j=0;j<=arr.length-1;j++){
        if(i<j && (arr[i]+arr[j])% 5 === 0){
            if(!filter.includes(arr[i]) &&  !filter.includes(arr[j])){
              filter.push(arr[i]);
              filter.push(arr[j]);
              console.log(i,j,filter);
              numbersOfPairs++;
            }
            
        }
    }
  }

console.log("Broj parova koji je pronaden da je deljiv sa k odnosno k=5 i da je 'i < j' i da se brojevi indexa ne ponavaljaju je: " + numbersOfPairs)


// ZADATAK NUM: 2 


var arr = [1,1,2,2,5,8,8,9,9,11,22,22,23,23,23,25,28];
var i,j,k;
var subArr1=[];
var subArr2 =[];
var subArr3 =[];
var subArr4 =[];
var subArr5 =[];



for(i=0;i<=arr.length-1;i++){
  for(j=i+1;j<=arr.length-1; j++){
    if(arr[i] === arr[j]){
      
      subArr1.push(arr[i]);
      subArr1.push(arr[j]);
      
    }
  }
  console.log(subArr1);
}

for(k=0;k<=subArr1.length-1;k++){
  if(subArr1[k] >=5  && subArr1[k] <= 16 ){
    subArr2.push(subArr1[k]);
  }
}
console.log("OVO ",subArr2)
*/




// ZADATAK NIJE RESEN U FAZI JE RESAVANJA DOLAZIO SAM DO NEKIH MOGUCIH RESENJA ALI SVE JE BADIHAVA NISTA NE RADI URADIO SAM SAMO PRVI ZADATAK JA MISLIM TACNO 