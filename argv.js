console.log(process.argv);

var myArgs = process.argv.slice(2);

console.log('myArgs: ', myArgs);

var theFirstNumber = Number(myArgs[0]);

console.log(theFirstNumber);

var theSecondNumber = Number(myArgs[1]);

console.log(theSecondNumber);

console.log(theFirstNumber + theSecondNumber);