document.getElementById ("btn").addEventListener("click",function (){
 var a = document.getElementById ("num1").value;
 var b = document.getElementById ("num2").value;
 var i;
    for (i= a; i<=b; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log ( `${i} (FIZZ BUZZ) `);
        } 
        else if (i % 5 ===0) {
            console.log (`${i} BUZZ`);
        }
        else if (i % 3 === 0) {
            console.log (` ${i} FIZZ `);
        }
     }
 
})