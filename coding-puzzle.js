/*   Javascript Useful Array Methods modified From MDN  */  

/* ----- map --------- */ 
var array1 = [1, 4, 9, 16, 32, 64];               // Maybe I
                                                  // should put
// pass a function to map                         // a joke here
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32, 64, 128]

/* ----- forEach ----- */ 
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {    // expected output: "a"
  console.log(element);               // expected output: "b"
});                                   // expected output: "c"

/* ----- filter ----- */ 
var words = ['spray', 'limit', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/* ----- slice ----- */ 
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

/* ----- reduce ----- */ 
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => 
  accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15