// -=-=-=-=-=-=-=- Functions -=-=-=-=-=-=-=-

// function declaration: function name(parameters) { ...body... }
// function expression: function (parameters) { ...body... }
// arrow function: (parameters) => ...body...

// naming: printSomething() getSmth() setSmth() changeSmth() checkSmth() ...

function showMessage() {
    console.log("I like JavaScript!");
}

// function invokation: name(parameter values);
showMessage();
showMessage();
showMessage();

console.log(Math.random());

// function to show a random value in range 0...10
function printRandomNumberTo10() {
    console.log(Math.floor(Math.random() * 11));
}

printRandomNumberTo10();

// ----------- parameters -----------
// function parameters: name(param1, param2) { ... }

function printRandomNumberInRange(min, max) {
    console.log(Math.floor(min + Math.random() * (max - min) + 1));
}

printRandomNumberTo10();

printRandomNumberInRange(10, 20);
printRandomNumberInRange(80, 100);

// TASK: show count of value in the array
const arr = [3, 6, 1, 7, 3, 8, 3, 2, 3, 8];
const prices = [120.5, 10, 40, 10, 50, 10];

function showCount(numbers, value) {
    console.log("Value count: " + numbers.filter((i) => i === value).length);
}

showCount(arr, 3);      // 4
showCount(prices, 10);  // 3

console.log("Random value: " + getRandomNumberInRange());

// ----------- return -----------
// return operator: ends function and return value from it
function getRandomNumberInRange(min = 0, max = 10) {
    return Math.floor(min + Math.random() * (max - min) + 1);
}

// initialize array with random value (10...40)
for (let i = 0; i < prices.length; i++) {

    prices[i] = getRandomNumberInRange(10, 40);
}
console.log("Prices:", prices);

console.log("Random value: " + getRandomNumberInRange(30, 50)); // 30...50
console.log("Random value: " + getRandomNumberInRange(3));      // 3...10
console.log("Random value: " + getRandomNumberInRange());       // 0...10

// ----------- hoisting: declaring variables / funciton before using them
console.log(salary); // undefined
var salary = 1200;
console.log(salary); // 1200

// ----------- callback functions -----------
function changeArray(array, action) {

    for (let i = 0; i < array.length; i++)
        array[i] = action(array[i]);
}

let numbers = [4, 2, 5, -7, 10, 33];

// ----- ways to create a function
// 1 - function declaration
function getIncrement(x) { return x + 1; }

// 2 - function expression
let func = function (a, b) { console.log("Summ: ", a + b); }
func(3, 5);

const getNegative = function (x) { return -x; }

// ----- ways to put callback function
// 1 - using function name
changeArray(numbers, getIncrement);
// 2 - using anonymous functions 
changeArray(numbers, function (x) { return Math.abs(x); });
// 3 - using arrow function (ES6)
changeArray(numbers, (x) => Math.abs(x));

console.log("Changed array:", numbers);

function initiArray(arr, generate) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = generate();
    }
}

function game(react) {
    for (let i = 0; i < 10; i++) {
        const value = getRandomNumberInRange(0, 10);

        if (value > 7) {
            react();
        }
    }
}

// game(() => console.log("Uraaaa!"));
// game(() => alert("Great!"));
// game(() => console.warn("Celebrating!"));

console.log("Init array:", numbers);

// ----------- recursive functions -----------
function getFactorial(value) {

    if (value == 1) return 1;
    return getFactorial(value - 1) * value;
}

console.log(getFactorial(3)); // !3 = 6
console.log(getFactorial(5)); // !5 = 1 * 2 * 3 * 4 * 5 = 120

// ----------- closure -----------

function test() {
    // create data
    let i = 10;

    return function () {
        ++i;
        console.log(i);
    }
}

const inner = test();

inner(); // 11
inner(); // 12

// TASK: create a closing function to get the next Fibonacci number
function getFunction() {
    // outer area

    // create variables
    let a = 0;
    let b = 1;

    return function () {
        // inner area
        console.log(a);
        let temp = a;
        a = b;
        b += temp;
    };
}

// get closure function
const showNext = getFunction();

for (let i = 0; i < 10; i++) {
    showNext(); // invoke
}
