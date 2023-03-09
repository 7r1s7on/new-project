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
];

//changes everything in 'category' 
blogPost.map(arrItem => {
  arrItem.category = 'Web develelopment';
  return arrItem;
})


let arr = [14,15,'dsf',56];

for (let i = 0; i < arr.length; i++){
  if (typeof i === Number){
    return i;
  }
}

let exists = false;
arr.forEach((arrItem) => {
  if (arrItem === 'dsf') {
    exists = true;
    return exists;
  }
})

const exactTitle = blogPost.filter((arrItem) => {
  if(arrItem.title == 'How to use map() function'){
    return true;
  }
});

const arr2 = [1,2,3,4,5,6,7];

function reducerCallback(sum, arrItem){
  return sum += arrItem;
}

const result = arr2.reduce(reducerCallback, 0);
//for example I wrote some comments

Math.E;
Math.PI;
Math.floor;
Math.ceil;
Math.round;

//error handling
try {
  const num = 10;
  num.toUpperCase();
} catch (e) {
  if(e instanceof TypeError) {
    console.log(e.message);
  }
}

const myString = '30';
const num1 = Number(myString) //it is fine
const anotherString = 'something';
const num2 = Number(anotherString); // won't work because string is string) and will give NaN

let numm = null; //it has false value always
let smth; //it will also have false value becuase it is not defined(undefined)

function filterList(l){
  return l.filter(arrItem => typeof arrItem === 'number');
}
const name = 'adsfs';
//outputs the difference of 2 arrays
function arrayDiff(a, b) {
  if (a.length === 0)
    return [];
  
  if (b.length === 0) 
    return a;

  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
      if (a[i] === b[j]){
        a = a.filter(function(arrItem){
          return arrItem !== b[j];
        })
      }
    }
  }
  return a;
}

let string = '12315';
//let Num = Number(string); let AnotherNum = +string; they are equal
