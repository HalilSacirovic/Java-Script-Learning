var i,j;

var tablica = document.getElementById("tablica");

for(i=10;i<=20;i++){
    var row = document.createElement("tr");
    var th = document.createElement("th");
    row.appendChild(th);
    th.textContent = i;

    for(j=11;j <= 20; j++){
        proizvod = j*i;
        var td = document.createElement("td");
        td.textContent = proizvod;
        row.appendChild(td);

    }
    tablica.appendChild(row);
}