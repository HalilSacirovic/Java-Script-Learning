async function devidedNumber (a,b){
  return new Promise(function(resolve,reject){
    if(b!== 0 ){
      resolve(a/b);
    }else{
      reject("Pilje nije ti to tacno bgm vidi daLJ ti b valja ")
    }
  })
}

devidedNumber(2,0)
.then(function(result){
  console.log(result);
})
.catch(function(error){
  console.log(error);
})



fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    console.log("FETCH RESPONSE", result);
  })
  .catch(function (error) {
    console.log("FETCH ERROR", error);
  });



  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));