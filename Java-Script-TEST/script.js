function divisibleSumPairs( k, ar) {
  var numbersOfPairs = 0;
  var i, j,m;
  for (i = 0; i <= ar.length - 1; i++) {
      for (j = 0; j <= ar.length - 1; j++) {
          if (i < j  && (ar[i] + ar[j]) % k === 0) {
            console.log(ar[i],ar[j])
              numbersOfPairs++;

          }
      }
    }
    return numbersOfPairs;
}


var result = divisibleSumPairs(5,[1,2,3,4,5,6]);
console.log(result)


/*

1.Deklarisemo numbersofpairs i stavimo joj vrednost 0
2.Deklarisemo varijable i,j,m
3.Pisemo for petlju i stavljamo da je vrednost od i=0 i da ide do zadnjeg broja niza
4.Zatim pisemo jos jednu for petlju unutar prve for petlje i stavljamo da je vrednost od j=0 i da ide do zadnjeg clana niza 
5.Posle toga u drugoj for petlji pisemo if petlju odnosno dajemo joj uslov
6.Uslov petlje jeste da ukoliko je  (i )anje od (j) i Ukoliko je zbir broja iz niza  i drugog broja iz niza deljvi sa 5 bez ostatka
7.Zatim console logujemo (niz od broja i odnosno i nam ide od (0-zadnjeg broja niza ) ) Zatim console logujemo (niz od broja j odnosno j nam ide od (0-zadnjeg broja niza ) )
8.i Stavljamo numberofPairs ++ iz razloga da nam pise koliko puta se desila ta petlja 
9.i posle svega toga na kraju koda vracamo vrednost od NUMBERSOFPAIRS.
10.

*/