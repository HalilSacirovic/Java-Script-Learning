`use strict`


var arr = [];



document.getElementById("num").addEventListener("keydown",function(event){
    if(event.key === "Enter") {
        var num = +document.getElementById("num").value;
        arr.push(num);
        var num = document.getElementById("num").value = ""
        console.log(arr);
    }


})


document.getElementById("sortASC").addEventListener("click",function(){
    for( var i=0; i<= arr.length-2; i++) {
        for(var j=i+1; j<=arr.length-1; j++){
            if(arr[j]<arr[i]) {
                
               var pom=arr[i];
                arr[i]=arr[j];
                arr[j] =pom;
            }
        }

    }
    console.log(arr);
});
document.getElementById("sortDESC").addEventListener("click",function(){
    for( var i=0; i<= arr.length-2; i++) {
        for(var j=i+1; j<=arr.length-1; j++){
            if(arr[j]>arr[i]) {
                
               var pom=arr[i];
                arr[i]=arr[j];
                arr[j] =pom;
            }
        }

    }
    console.log(arr);
});
