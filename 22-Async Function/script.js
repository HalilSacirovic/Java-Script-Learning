async function calculateSum (a,b){
  
var myPromise = new Promise( function(resolve,reject){
if(!isNaN(a) && !isNaN(b)){
  resolve(a+b)
}else{  
  reject("Brojevi nisu OCK")
}
})
return myPromise
}


calculateSum(2, null).then(function(result){
  console.log(result)
}).catch(function(error){
  console.log("error",error)
});