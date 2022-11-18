/*
function divisibleSumPairs( k, ar) {
  var numbersOfPairs = 0;
  var i, j,m;
  for (i = 0; i <= ar.length - 1; i++) {
      for (j = 0; j <= ar.length - 1; j++) {
          if (i < j  && (ar[i] + ar[j]) % k === 0) {
            console.log(ar[i],ar[j])
              numbersOfPairs++;

          }
      }
    }
    return numbersOfPairs;
}


var result = divisibleSumPairs(5,[1,2,3,4,5,6]);
console.log(result)



1.Deklarisemo numbersofpairs i stavimo joj vrednost 0
2.Deklarisemo varijable i,j,m
3.Pisemo for petlju i stavljamo da je vrednost od i=0 i da ide do zadnjeg broja niza
4.Zatim pisemo jos jednu for petlju unutar prve for petlje i stavljamo da je vrednost od j=0 i da ide do zadnjeg clana niza 
5.Posle toga u drugoj for petlji pisemo if petlju odnosno dajemo joj uslov
6.Uslov petlje jeste da ukoliko je  (i )anje od (j) i Ukoliko je zbir broja iz niza  i drugog broja iz niza deljvi sa 5 bez ostatka
7.Zatim console logujemo (niz od broja i odnosno i nam ide od (0-zadnjeg broja niza ) ) Zatim console logujemo (niz od broja j odnosno j nam ide od (0-zadnjeg broja niza ) )
8.i Stavljamo numberofPairs ++ iz razloga da nam pise koliko puta se desila ta petlja 
9.i posle svega toga na kraju koda vracamo vrednost od NUMBERSOFPAIRS.
10.


function checkElementInSubArr(sArr,num){
  var isElementOk= true;
  
}

function PickingNumber(a) {
  var lengthOfLongestSubArray = 0;
  
  for(var  i=0;i<=a.length;i++){
    var subArr=[];
    subArr.push(a[i]);
    for(var j=i+1;j<=a.length-1;j++){
      var isNumOk=checkElementInSubArr(subArr,a[j])
    }
    if(subArr.length>lengthOfLongestSubArray){
      lengthOfLongestSubArray = subArr.length;
    }
  }
  
  
  return lengthOfLongestSubArray;
}



var result = PickingNumber([1,2,2,4,5,6,8,8,9,9])

console.log( result)




var i,max=[];
var arr = [1,2,3,4,5,1,2,5,6,1,2,12,3,123,124,51,25,25]

for(i=0;i<=arr.length-1;i++){
  if(arr[i]>max){
    max=arr[i];
  }
}



console.log(max)

*/

function checkElementInSubArr(sArr,num){
  var isElementOk= true;
  
  for(var i = 0 ; i<=subArr.length-1;i++){
    if(Math.abs(subArr[i]-num)>1 ){
      numIsOk=false;
    }
  }

  return isElementOk;
}

function PickingNumber(a) {
  var lengthOfLongestSubArray = 0;
  
  for(var  i=0;i<=a.length;i++){
    var subArr=[];
    subArr.push(a[i]);
    for(var j=i+1;j<=a.length-1;j++){
      if(i !== j ){
        var selectedNumber =a[j];
        var isNumOk=checkElementInSubArr(subArr,selectedNumber)
      }
    }
    if(subArr.length>lengthOfLongestSubArray){
      lengthOfLongestSubArray = subArr.length;
    }
  }
  
  
  return lengthOfLongestSubArray;
}



var result = PickingNumber([1,2,2,4,5,6,8,8,9,9])

console.log( result)
