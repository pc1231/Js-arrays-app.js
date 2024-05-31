/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);
// exercise 2
let foods = []; // Assuming the array is already declared

// Adding 'pizza' and 'cheeseburger' to the array
foods.unshift('pizza');
foods.push('cheeseburger');

console.log('Exercise 2 result:', foods);
let array = [2, 3, 4];
array.unshift(1); // Adds 1 to the beginning of the array
console.log(array); // Output: [1, 2, 3, 4]
// exercise 3
foods.unshift('taco');

console.log('Exercise 3 result:', foods);
// exercise 4
let favFood = foods[0];

console.log('Exercise 4 result:', favFood);
//exercise 5
foods.splice(1, 0, 'tofu');

console.log('Exercise 5 result:', foods);
// exercise 6
foods.splice(0, 1, 'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);
//exercise 7
let yummy = foods.slice(0, 2);

console.log('Exercise 7 result:', yummy);
//exercise 8
let soyIdx = foods.indexOf('tofu');

console.log('Exercise 8 result:', soyIdx);
// exercise 9

let allFoods = foods.join(' -> ');

console.log('Exercise 9 result:', allFoods);
// exercise 10
let hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);
// excercise 11 
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = [];

nums.forEach(num => {
    if (num % 2 !== 0) {
    odds.push(num);
    }
});

console.log('Exercise 11 result:', odds);
// excercise 12
const nums = [3, 5, 15, 9, 25, 10, 30];
let fizz = [];
let buzz = [];
let fizzbuzz = [];

nums.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    } else if (num % 3 === 0) {
        fizz.push(num);
    } else if (num % 5 === 0) {
        buzz.push(num);
    }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
// excersise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Get the last nested array using negative indexing
const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 result:', numList);
//excercise 14
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const num = numArrays[2][1];

console.log('Exercise 14 result:', num);
// exercise 15
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let total = 0;


for (let i = 0; i < numArrays.length; i++) {
    for (let j = 0; j < numArrays[i].length; j++) {
        total += numArrays[i][j];
    }
}

console.log('Exercise 15 result:\n', total);
