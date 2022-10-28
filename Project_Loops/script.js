document.getElementById ("btn").addEventListener("click",function (){
 var a = document.getElementById ("num1").value;
 var b = document.getElementById ("num2").value;
 var i;
 var fizz = 0;
  var buzz = 0;
  var fizz_buzz = 0;
    for (i= a; i<=b; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log ( `${i} (FIZZ BUZZ) `);
            fizz_buzz ++
        } 
        else if (i % 5 ===0) {
            console.log (`${i} BUZZ`);
        }
        else if (i % 3 === 0) {
            console.log (` ${i} FIZZ `);
        }
     }

     document.getElementById("fizz-buzz").textContent = fizz_buzz;
})