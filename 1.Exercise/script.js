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


function returnName(name)
{
 
    var i;

    var inicijali
    var inicijali2
   
    var array = name.split("")

    console.log(array)

    for(i=0;i<array.length;i++){
     
      if(array[i] === " ")
      {
       inicijali= array[0] +array[i+1];
    
      }


      if(array[i] !== " "){
        inicijali2 = array[0] + array[1];
        
      }
      
      
    }

    
}






console.log(returnName("Halil Sacirovic"))