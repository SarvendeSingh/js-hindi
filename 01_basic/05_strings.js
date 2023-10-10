const name = "Sarvender";
const repoCount = 5

// String interpolation
console.log(`My name is ${name} and my repository count are ${repoCount}`);

const gameName = new String('Sarvender')

console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString);


const newStringOne = "  Sarvender  ";
console.log(newStringOne);
console.log(newStringOne.trim());
