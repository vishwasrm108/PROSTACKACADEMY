var text = "hi hello";
var firstPart = text.slice(0, 2).toUpperCase(); // "HI"
var secondPart = text[0].toUpperCase() + text.slice(1); // "Hi hello"

console.log(firstPart);
console.log(secondPart);
