// const variable1 = 20;
// const variable2 = '40';

// const resultVariable = variable1 + variable2;

// console.log(resultVariable);


// const objectVariable = {
//     property1: 'i am property 1',
//     property2: 'i am property 2',
//     property3: [20, 30, 40]
// };

// console.log(objectVariable.property3[2]);

// const myArray = [20,30,40];
// console.log(myArray[3]);

function func(a, b){
    console.log(a + b);
    console.log(a, b);
}
func(12, 'asdf')

const arrowFunc = () => {
    console.log('This is an arrow function');
    return 'a';
}

let str = 'a string';

str.toUpperCase(1,2);
function solution(number){
    if (number < 0){
      return 0;
    }
    let sum = 0;
    for (let i = 3; i < number; i+3){
      sum += i;
    }
    for (let j = 5; i < number; j+5){
      sum += j;
    }
    return sum;
  }