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

//function that finds the sum of the dividers of 3 and 5
function solution(number){
  let result = 0;
    for (let i = 1; i <= number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        result += i;
      }
    }
    return result;
  }

const complexArr = [
  {
    firstName: 'Bob',
    secondName: 'Smith'
  },
  {
    firstName: 'Alice',
    secondName: 'Smith'
  },
  {
    firstName: 'Jon',
    secondName: 'Doe'
  }
];

//returns the index of the object
complexArr.findIndex((arrItem) => {
  return arrItem.lastname !== 'Smith';
})

const blogPost = [
  {
    title: 'How to use map() function',
    category: 'uncategorized'
  },
  {
    title: 'What is JavaScript?',
    category: 'uncategorized'
  },
  {
    title: 'Why are you crazy enough to learn to code?',
    category: 'uncategorized'
  }
]

//changes everything in 'category' 
blogPost.map(arrItem => {
  arrItem.category = 'Web develelopment';
  return arrItem;
})

