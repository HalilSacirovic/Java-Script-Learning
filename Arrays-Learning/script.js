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





// var arr = [1,1,2,5,6,4,7,21,6,7,3,2,5,9,81,49];
// var sqrte,kvadrat=1;


// for (i=0;i<=arr.length-1;i++){
//   if(arr[i] % 3 === 0) {
//     kvadrat = arr[i]*arr[i];
//     console.log( "\nPosto je ovaj broj deljiv sa 3 \nOvo je kvadrat  broja\n "  +  arr[i] + " = " + kvadrat);
//     console.log ("")
//   }
//   else if ( arr[i] % 2 === 0 ) {
//     sqrte = Math.sqrt(arr[i]);
//     console.log( "\nPosto je ovaj broj deljiv sa 2 \nOvo je koren broja \n"  +  arr[i] + " = " + sqrte)
//   }
// }



// var arr = [1,2,true,'test',undefined,null,5,'test 1234'];

// var numbers = [];
// var texts = [];
// var booleans = [];


// for (i=0;i<=arr.length-1;i++){
//   if (typeof(arr[i]) === "number") {
//     numbers.push(arr[i]);
//   }
//   if (typeof(arr[i]) === "string") {
//     texts.push(arr[i]);     
//   }
//   if (typeof(arr[i]) === "boolean") {
//     booleans.push(arr[i]);
//   }
// }
// console.log( numbers);
// console.log( texts)
// console.log( booleans)


/////////////////////////


// var arr = [1,2,true,'test',undefined,null,5,undefined,'test 1234'];

// for (i=0; i<=arr.length-1; i++){
//   if(typeof(arr[i]) === "undefined") {
//     console.log("Broj indexa  undefined je " + i);

//   }
// }



// var arr =["Muhamed","Hari","Davud","Mustafa"];

// console.log (arr.join ("***"));



// var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// var koliko = lorem.length;
// var recenice =lorem.split(".")

// console.log(recenice)
// console.log(recenice.length);

// console.log (koliko)


/*

var arr = [2,4,5,7,1,6,8,2,3,8,2,34,8,8,4,12,4,78,34,3,2,1,7,8,2,23,7,8,2,34,78,734,4,2,2,3,7,8,6,5,4,3];
var i;
var indeksi = [];
var k=0;


for (i=0;i<=arr.length-2;i++){
  k++;
  for(j=0;j<= arr.length-1;j++){
    
    if(arr[i]+ arr[j] === 10){
      
      indeksi.push(i,j);
      console.log(i,j)
      break;
    }
    
  }
}
var duzina = indeksi.length;

console.log(duzina,indeksi)
*/


function getPoints (result){
  var point = 0;
  
  for (var i=0;i<result.length;i++){
    var nzm = result[i];
    nzm.split(":");
    var x=nzm;
    var y= nzm;
    
  }
  

  return point;
}

var result = getPoints(["3:1","4:3","5:3"])

console.log(result)