input = process.argv.slice(2);


input.forEach(function(stringToReverse) {
  var reversedWord = '';
  for (var i = stringToReverse.length - 1; i >= 0; i--) {
    reversedWord += stringToReverse[i];
  }
  console.log(reversedWord);
  return reversedWord;
});

