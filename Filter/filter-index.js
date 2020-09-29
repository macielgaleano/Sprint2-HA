let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6];

let greaterThan = numbers.filter(item => item > 20 );
// console.log (greaterThan);

/*
  Filter recive three params, these are: 

  -Actual item  of array
  -Index of the item on the array
  -Actual array
*/

let greaterThan2 = numbers.filter((item, index, array) => index > 10);
console.log (greaterThan2);

let students = [
  {
    name: 'Alvaro',
    score: 10,
  },
  {
    name: 'Daniel',
    score: 16,
  },
  {
    name: 'Alexys',
    score: 12,
  },
  {
    name: 'Rafa',
    score: 17,
  },
  {
    name: 'Alejandro',
    score: 8,
  },
  {
    name: 'Sofia',
    score: 9,
  }
]

let studentsWithHightScore = students.filter((item, index, array) =>  item.score > 10 );
console.log (studentsWithHightScore);
