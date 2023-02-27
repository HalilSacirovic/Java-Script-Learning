// function min(arr, toReturn) {
//   var value = arr[0];
//   var index = 0;
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < value) {
//       value = arr[i];
//       index = i;
//     }
//   }
//   if (toReturn == 'value') {
//     return value;
//   }
//   else if (toReturn == 'index') {
//     return index;
//   }  // returns null otherwise.
// }



// // FIRST WAY
// const countPositivesSumNegatives = (input) => {

//   let br = 0;
  
//   let suman = 0;
//   input.forEach((item,index)=>{
//           if(item >0)
//         {
//           br++;
//         }
//       else if (item<0)
//         {
//           suman+=item;
//         }
//   })
  
//   return [br,suman];
  
// }



// // https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript



// function DNAtoRNA(dna) {
    
  
//   var pom;
  
//   var array = dna.split("")
  
//   for(var i=0;i<array.length;i++)
//     {
    
//       if(array[i]=== "T"){
  
//       array[i]= 'U'
//       }
    
//     }
  
//   return array.join("")
// }


// function returnName(name)
// {
 
//     var i;

//     var inicijali
//     var inicijali2
   
//     var array = name.split("")

//     console.log(array)

//     for(i=0;i<array.length;i++){
     
//       if(array[i] === " ")
//       {
//        inicijali= array[0] +array[i+1];
    
//       }


//       if(array[i] !== " "){
//         inicijali2 = array[0] + array[1];
        
//       }
      
      
//     }

    
// }






// console.log(returnName("Halil Sacirovic"))






//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript


function addLength(str) {
  var array = str.split(" ");
  var array2=[];
  var i;
    
    for(i=0;i<array.length;i++){
     array2.push(array[i]+ " " + array[i].length) 
    }
    return array2
  }
  




//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript 

//////////////////  VEOMA DOBAR ZADATAKKKKK   ///////////////


  function getMiddle(s)
{
 var array= s.split("");

  
  if((array.length) % 2 === 0){
    var twonumm = (array.length)/2;

    
    var test = array[twonumm-1] + array[twonumm];
    return test;
  }else{
    var oneword = (array.length-1)/2;

    var test2 = array[oneword]
    
    return test2
  }
}


////////////////////////////////////////////////////////////
