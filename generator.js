module.exports = {
  randomNum : function (n) {

  var randomArray = [];

  for ( k=0; k < n; k++ ) {
    randomArray[k]  = k;
    for (var i = randomArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = randomArray[i];
          randomArray[i] = randomArray[j];
          randomArray[j] = temp;
      }

    }
    console.log(randomArray);
    return randomArray;
  }

};
