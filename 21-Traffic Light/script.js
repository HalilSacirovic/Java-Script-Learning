function turOnRed (){
  document.getElementById("red").style.background = "red";
  document.getElementById("yellow").style.background = "transparent";
  document.getElementById("green").style.background = "transparent";
  setTimeout(function(){
    YellowToGreen()
  },4000)
}



function turOnYellow (){
  document.getElementById("yellow").style.background = "yellow";
  document.getElementById("red").style.background = "transparent";
  document.getElementById("green").style.background = "transparent";
}



function turOnGreen (){
  document.getElementById("green").style.background = "lime";
  document.getElementById("yellow").style.background = "transparent";
  document.getElementById("red").style.background = "transparent";
 
  setTimeout(function(){
    YellowToRed()
  },3000)
}



function YellowToRed (){
  document.getElementById("yellow").style.background= "yellow"
  document.getElementById("green").style.background = "transparent";
  document.getElementById("red").style.background = "transparent";
  setTimeout(function(){
    turOnRed();
  }, 3000)
}



function YellowToGreen (){
  document.getElementById("yellow").style.background= "yellow"
  document.getElementById("green").style.background = "transparent";
  document.getElementById("red").style.background = "red";
  setTimeout(function(){
    turOnGreen();
  }, 3000)
}





turOnRed();



setInterval(() => {
  var date= new Date();
  var dateToShow ="" + date.getDay() + "/"  + (date.getMonth() + 1) + "/" + date.getFullYear;
  var timeToShow = date.getHours + ":"  + date.getMinutes + ":" + date.getSeconds;
  document.getElementById("time").textContent = timeToShow;
  document.getElementById("time").textContent = dateToShow;
}, 1000);