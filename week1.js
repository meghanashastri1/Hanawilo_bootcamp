
/* Problem 1 

'2' == 2 will return true 
'he' === 'she' will return false 
2 === 2 will return true 
'true' == true will return false
true === true will return true 
'true' != true will return true
'true' !== true will return true


console.log('2' == 2)
console.log('he' === 'she')
console.log(2 === 2)
console.log('true' == true)
console.log(true === true)
console.log('true' != true)
console.log('true' !== true)
*/

/* 
Problem 2
The 3 ways to declare a variable are: 
    - let: this is locally scoped and reassignable
    - const: this is locally scoped and non-reassignable
    - var: this is globally scoped and reassignable
*/


//Problem 3
// First class order function: 
const num = 5
const string = "abcd"
const firstOrder = () => {
    console.log('say hi');
}
firstOrder();

//higher order function 
const testFunction = (firstOrder) => {
    console.log('higher order');
}
testFunction();

//callback function 
const testCallback = () =>{
    console.log('callback');
}
const testFunction1 = () => {
    testCallback();
}
testFunction1();




//Problem 4 
const a = 'hi';
//console.log(c);

const someFunction = (arg) => {
    const b = 'bye';

    if (arg) {
        const c = 'see ya';
        console.log(a);
        console.log(b);
    }
}

someFunction();

/*
console log of a = hi
console log of b = bye
console log of c = not defined 
*/

//Problem 5
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for loop
for (let i = 0; i < someArray.length; i++){
    console.log(someArray[i]);
}

//for of loop
for (const num of someArray){
    console.log(num);
}



//Problem 6 
const prob6Array = [1,2,3,4,5];
//concat()
const newArray = someArray.concat(prob6Array);
console.log(newArray);

//length 
console.log(prob6Array.length);

//filter()
console.log(prob6Array.filter(num => num !==3));

//find()
console.log(prob6Array.find(num => num === 5));

//slice()
const slicedArray = prob6Array.slice(2,4);
console.log(slicedArray);

//splice()
//const splicedArray = prob6Array.splice(2,2);
//console.log(splicedArray);
//console.log(prob6Array);

//includes()
console.log(prob6Array.includes(4));

//indexOf()
console.log(prob6Array.indexOf(2));

//isArray()
console.log(Array.isArray(prob6Array));

//join()
let str = prob6Array.join()
console.log(str);

//map()
const arrayDoubled = prob6Array.map(num => num * 2);
console.log(arrayDoubled);

//pop()
prob6Array.pop()
console.log(prob6Array);

//push()
prob6Array.push(5);
prob6Array.push(6)
console.log(prob6Array);

//shift()
const beforeShift = [1, 2, 3, 4, 5]
beforeShift.shift()
console.log(beforeShift);

//unshift()
beforeShift.unshift(1);
beforeShift.unshift(0);
console.log(beforeShift);

//sort()
const preSorted = [9,1,3,5];
preSorted.sort();
console.log(preSorted);

//reduce()
console.log(preSorted.reduce((accumulator, currentValue) => { return accumulator + currentValue}));



//Problem 7
const someObject = {
    color: 'black'
};

//assign 
const newObject = Object.assign(someObject, {name: 'John Doe'});
console.log(newObject);

//dot notation for age:22
let age = "age";
let ageValue = "22";
newObject.age = ageValue;
console.log(newObject);

//bracket notation for address 
let address = "address";
let addressValue = "123 test address";
newObject[address] = addressValue;
console.log(newObject);

//keys() to return array of keys 
console.log(Object.keys(newObject));

//values() to return array of values 
console.log(Object.values(newObject));

//for loop to list out values 
for (const property in newObject){
    console.log(newObject[property]);
}




//Problem 8 
const numbers = [
    {
        num: 1
    },
    {
        num: 2
    }, 
    {
        num: 3
    }
]

numbers.forEach(function(item, index){
    let x = item.num;
    console.log(x);
});


//Problem 9 
const newSet = new Set();
//add new key value pair 
newSet.add('john doe');
console.log(newSet);

//check if john doe exists
const checkEntry = newSet.has("john doe");
console.log(checkEntry);

//remove john doe from set 
newSet.delete('john doe');
console.log(newSet);



//Problem 10
const newMap = new Map();
//add new key value pair
newMap.set("name", "john doe");
console.log(newMap);

//check if value 'john doe exists' 
for (let v of newMap.values()){
    if (v === 'john doe'){
        console.log(true);
    } else {
        console.log(false);
    }
}

//remove key value pair 
newMap.delete('name');
console.log(newMap);




/* Problem 11
Asynchronous programming is when code runs in parallel to other code and statements don't have to be executed one by one. 
This means that if you have a task that started first and is taking a long time, your code will still be able to start executing tasks that come later even if the first one isn't finished. 
It's an important coding practice that allows your program to not crash if a task is not able to be completed.
*/




/* Problem 12
Call back hell is when there are callbacks within callbacks and every callback has to depend on a previous callback. It makes your code messy and if one callback fails then every single callback below that will also fail. 
*/



/* Problem 13
A promise is when instead of a function being called at some point in the future, your code will return an object that represents a future event.
It's an asynchronous action that may complete at some point and reduce a value. 
The states of a promise include: 
    - Pending: initial state
    - Fulfilled: successful
    - Refected: failed
*/



/*Problem 14
Async/await are keywords that are needed to run a function asynchronously.
Async is the keyword that is placed in front of a function declaration to turn it into an async event. 
Await is the keyword that is placed in front of any async promise-based function to pause your code on that line until the promise fulfills, which then returns the result value.

*/



// Problem 15 

const fetchRickAndMorty = async () => {
    try {
        let result = await fetch('https://rickandmortyapi.com/api/character');
        let data = await result.json();
        
        const characters = [];
        for (let character of data.results){
            characters.push(character.name);
        }
        console.log(characters);
        
    } catch (error) {
        console.log(error.message);
    }
}
fetchRickAndMorty();

const fetchMultipleAPIs = async () => {
    try {
        const [result1, result2] = await Promise.all([
            fetch('https://rickandmortyapi.com/api/character/2'),
            fetch('https://randomuser.me/api/?results=1')

        ]);

        const [rickandmortyapi, randomuser] = await Promise.all([
            result1.json(),
            result2.json()
        ]);
        
        //console.log(rickandmortyapi);
    } catch (error) {
        console.log(error);
    }
}
fetchMultipleAPIs();



//Problem 16 
class Shape {
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(perimeter);
    }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter();

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();


class Square extends Shape {
    constructor(sideLength){
        super();
        this.name = 'square';
        this.sides = 4;
        this.sideLength = sideLength;
    }

    calcArea(){
        const area = this.sideLength * this.sideLength;
        console.log(area)
    }
}

const newSquare = new Square(6);
newSquare.calcArea();
newSquare.calcPerimeter();
