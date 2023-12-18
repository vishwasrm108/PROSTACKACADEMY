var bikes=["honda","hero","royal enfield","bajaj","ktm"]
//            0       1          2            3      4
console.log(bikes.indexOf("hero"));
// reversing an array
bikes.reverse()
console.log(bikes);
// index of reversed array
console.log(bikes.indexOf("hero"));
// finding index of element which is not in array
console.log(bikes.indexOf("BMW"));
console.log(bikes.lastIndexOf("hero"));