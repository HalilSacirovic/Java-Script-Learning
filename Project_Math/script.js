var red = "color:red"

document.getElementById("calc").addEventListener("click", function () {
    var randomNumber = Math.random() * 101;
    var intNumber = Math.floor( randomNumber);
  
      var name1 = document.getElementById("name1").value;
       var name2 = document.getElementById("name2").value;
  
    document.getElementById("result").textContent = intNumber + "%";


    if  (name1 === "Halil" && name2 === "asd") {
      var halil = Math.random() * 51;
      var halil2 = Math.floor(50 + halil);

      document.getElementById("result").textContent = halil2 + "%";
      console.log ("asd")

    }

    else  {
        var randomNumber = Math.random() * 101;
        var intNumber = Math.floor( randomNumber);
      
          var name1 = document.getElementById("name1").value;
           var name2 = document.getElementById("name2").value;
      
        document.getElementById("result").textContent = intNumber + "%";
    
    }


  });

  document.getElementById ("name2").addEventListener ("keydown", function (event) {
    if (event.key === "Enter") {
        var randomNumber = Math.random() * 101;
    var intNumber = Math.floor( randomNumber);
  
      var name1 = document.getElementById("name1").value;
       var name2 = document.getElementById("name2").value;
  
    document.getElementById("result").textContent = intNumber + "%";


    }
    if  (name1 === "Halil" && name2 === "asd") {
        var halil = Math.random() * 51;
        var halil2 = Math.floor(50 + halil);
  
        document.getElementById("result").textContent = halil2 + "%";
        console.log ("asd")
  
      }
  
      else  {
          var randomNumber = Math.random() * 101;
          var intNumber = Math.floor( randomNumber);
        
            var name1 = document.getElementById("name1").value;
             var name2 = document.getElementById("name2").value;
        
          document.getElementById("result").textContent = intNumber + "%";
      
      }

      if (result <= 50 ) {
        document.getElementById ("calc").addEventListener("click", function() {
            document.getElementById("result").style= red;
        })
      }
  })