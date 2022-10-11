
var gokubg = "background:linear-gradient(to right, #303845 ,#0f203b)"
var gokuredbg = "background:linear-gradient(to right, #e32510 ,#d10d3e)"
var gokubluebg = "background:linear-gradient(to right, #07e3eb,#09d695)"
var gokubluex20 = "background: linear-gradient(to right, rgb(196, 16, 58) ,rgb(9, 183, 210) )"
var gokuuibg = "background:linear-gradient(to right, black ,grey)"
var gokumuibg = "background:linear-gradient(to right,#7846db, #9887d4 ,#6b6970 )"


const gokuForm = document.getElementById ("goku-base-form").addEventListener 
("click", function () {
    document.getElementById ("gokuimg").src ="./images/goku-base-form.jpg"
});
document.getElementById ("goku-red-form").addEventListener 
("click", function () {
    document.getElementById ("gokuimg").src ="./images/goku-red.jpg"
});
document.getElementById ("goku-blue-form").addEventListener 
("click", function () {
    document.getElementById ("gokuimg").src ="./images/goku-ssj-blue.jpg"
});
document.getElementById ("goku-blue-kaiokenx-form").addEventListener 
("click", function () {
    document.getElementById ("gokuimg").src ="./images/goku-ssj-blue-kaiokenx20.jpg"
});
document.getElementById ("goku-ultra-instict-form").addEventListener 
("click", function () {
    document.getElementById ("gokuimg").src ="./images/goku-ultra-instict.jpg"
});
document.getElementById ("goku-mui-form").addEventListener 
("click", function () {
    document.getElementById ("gokuimg").src ="./images/goku-MUI.jpg"
});



document.getElementById("goku-base-form").addEventListener("click", function () {
    document.getElementById("goku").style = gokubg;
  });
document.getElementById("goku-red-form").addEventListener("click", function () {
    document.getElementById("goku").style = gokuredbg;
  });
document.getElementById("goku-blue-form").addEventListener("click", function () {
    document.getElementById("goku").style = gokubluebg;
  });
document.getElementById("goku-blue-kaiokenx-form").addEventListener("click", function () {
    document.getElementById("goku").style = gokubluex20;
  });
document.getElementById("goku-ultra-instict-form").addEventListener("click", function () {
    document.getElementById("goku").style = gokuuibg;
  });
document.getElementById("goku-mui-form").addEventListener("click", function () {
    document.getElementById("goku").style = gokumuibg;
  });