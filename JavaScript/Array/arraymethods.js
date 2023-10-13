var names=["vishwas","dilip","sai","john"]
var size=names.length
console.log(size);

//add element at end of the array
//Appends new elements to the end of an array, and returns the new length of the array.
var new_size=names.push("swami")
console.log(names);
console.log(new_size);

//remove last element of array
names.pop()
console.log(names);

//add element in start of the array
names.unshift("swami")
console.log(names);

//remove first element
names.shift()
console.log(names);