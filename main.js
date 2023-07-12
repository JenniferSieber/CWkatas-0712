// KATA 1
// https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af/train/javascript 
const waterbombs = (fire, w) => fire.split('Y').reduce((a,b) => a + Math.ceil(b.length / w), 0);

console.log(waterbombs("xxxxYxYx", 4));
console.log(waterbombs("xxxxYxxYxxxYxxxxxxxxYxxx", 3));
console.log(waterbombs("xxYxx", 3));
console.log(waterbombs("xxxYxxx", 1));

// KATA 2 
// https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript
const powerOf4 = n => Number.isInteger(n) && Number.isInteger(Math.log(n)/Math.log(4));

console.log(powerOf4('string'));
console.log(powerOf4(1024));
console.log(powerOf4(1027));
console.log(powerOf4(-1024));
console.log(powerOf4([10,24]));


// KATA 3
// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
const smaller = nums => nums.map((n,i) => nums.slice(i).filter(el => n > el).length);

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 3]));
console.log(smaller([1, 1, -1, 0, 0])); 

