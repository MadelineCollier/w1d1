var myPass = process.argv.slice(2)[0];

var obfuscate = function(myPass) {
  var result = myPass
  result = result.replace(/a/g, "4");
  result = result.replace(/e/g, "3");
  result = result.replace(/o/g, "0");
  result = result.replace(/l/g, "1");
  return result;
}

console.log(obfuscate(myPass));

// console.log(myPass);