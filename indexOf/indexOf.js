var array = [2, 9, 9];
console.log('array.indexOf(2); ', array.indexOf(2));
console.log('array.indexOf(7); ', array.indexOf(7));
console.log('array.indexOf(9, 2); ', array.indexOf(9, 2));
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0