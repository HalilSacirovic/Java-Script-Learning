var a = [5,10];
var prviSabirak = 0;
var drugiSabirak = 1;
var i;

for (i=2; i<20; i++ ) {
    var num = a[prviSabirak] + a[drugiSabirak];
    a.push(num);
    prviSabirak++;
    drugiSabirak++;

    console.log (a);

    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
        console.log (`${a[i]} FIZZ-BUZZ`);
    }
    else if (a[i] % 5 === 0){
        console.log (`${a[i]} BUZZ`);
    }
    else  (a[i] % 3 === 0);
    console.log (`${a[i]} FIZZ`)
}
