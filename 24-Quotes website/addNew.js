var arr= []


document.getElementById("addnew").addEventListener("click",function(){
    var text = document.getElementById("quoteText").value;
    var author = document.getElementById("quoteAuthor").value;
    var source = document.getElementById("quoteSource").value;


    
    var newQuote = {
        quoteText:text,
        quoteAuthor:author,
        qutoteSource:source,
    };
    
    
    document.getElementById("quoteText").value = "";
    document.getElementById("quoteAuthor").value = "";
    document.getElementById("quoteSource").value = "";

    arr.push(newQuote)

    fetch("https://js-course-server.onrender.com/quotes/add-quote",{
        method:"POST",
        body:JSON.stringify(newQuote),
        headers:{
            accept:"application/json",
            "Content-Type": "application/json"
        }
    }).then(function(res){
        return res.json();
    }).then(function(data){
        var parent = document.getElementById("test");


        for(var i = 0 ; i<arr.length;i++){
            
            var child = document.createElement("li");
            child.textContent = '"' + arr[i].quoteText + '" ' + "     " + arr[i].quoteAuthor  + "    " + '"' + arr[i].qutoteSource + '"';
            parent.appendChild(child);
        }
    })
})