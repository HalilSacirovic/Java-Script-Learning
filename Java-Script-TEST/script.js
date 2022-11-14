function divisibleSumPairs( k, ar) {
  var numbersOfPairs = 0;
  var i, j,m;
  for (i = 0; i <= ar.length - 1; i++) {
      for (j = 0; j <= ar.length - 1; j++) {
        for (m= 0; m <= ar.length - 1; m++) {
          if (i < j && j<m && (ar[i] + ar[j]+ ar[m]) % k === 0) {
            console.log(ar[i],ar[j],ar[m])
              numbersOfPairs++;

          }
        }
      }
    }
    return numbersOfPairs;
}


var result = divisibleSumPairs(5,[1,2,3,4,5,6]);
console.log(result)