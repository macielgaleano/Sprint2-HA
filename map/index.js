let numbers = [1,2,3,4,5];
let doubles = numbers.map((number) => {
  return number * 2
});

console.log(numbers, doubles);

const InfoCurrentValue = 'Valor que obtiene el map del array';
const InfoIndex = 'Valor del index de ese momento';
const InfoArray = 'Valor del array en ese momento'

var moreOne = numbers.map((currentValue, index, array) => {
  console.log('Current value- '+ currentValue);
  console.log('Index- '+ index);
  console.log('Array- '+ array);
});

//.map for objects

let objects = [
  {key: 20 , value: 10},
  {key: 15 , value: 100},
  {key: 10 , value: 1000}];

objects.map((obj, index, array) => {
 obj.key = index;
});

console.log(objects);