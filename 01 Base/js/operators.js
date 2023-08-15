// ------------ operators ------------
// ariphmetic operators

console.log(`a + b: ${5 + 3}`); // 8
console.log(`a - b: ${5 - 3}`); // 2
console.log(`a * b: ${5 * 3}`); // 15
console.log(`a / b: ${20 / 4}`); // 5
console.log(`a % b: ${21 % 7}`); // 0

// exponentiation **
console.log(`a ** b: ${2 ** 8}`); // 256

// logic operators
console.log(`a > b: ${5 > 3}`); // true
console.log(`a < b: ${5 < 3}`); // false
console.log(`a >= b: ${5 >= 3}`); // true
console.log(`a <= b: ${20 <= 20}`); // true

console.log(`a == b: ${'5' == 5}`); // true
console.log(`a != b: ${5 != 3}`); // true
// strict - compare types also
console.log(`a === b: ${'5' === 5}`); // false
console.log(`a !== b: ${5 !== 3}`); // false

// falsy values: false, 0, null, undefined, "", '', NaN
console.log(`null == undefined: ${null == undefined}`); // true
console.log(`null === undefined: ${null === undefined}`); // false

let salary = 1300, bonus = 80;

console.log("Bonus:", bonus); // 80
console.log("Bonus:", bonus); // 91

//salary = salary + bonus;
// ------------- change operators: += -= *= /= %=
salary += bonus;

//salary += 1;
// ------------- increment / decrement operators: ++ --
// 1 - prefix: ++value (high priority)
// 2 - postfix: value++ (low priority)

console.log("Original Salary: ", salary);

let copy = salary++;

console.log("Salary: ", salary);
console.log("Copy: ", copy);

// ------------- type conversion
let invalidNumber = NaN;

// to boolean: Boolean(value) !!value

salary = null;

console.log("Salary as bool:", Boolean(salary));
console.log("Salary as bool:", !!salary);

console.log("NaN as bool:", !!NaN);
console.log("Boolean of NaN: ", Boolean(NaN) == false);

if (invalidNumber) console.log("True");
else console.log("False");

// to number: +value Number(value)
//let number = +"123";
let number = Number("354");

console.log(number); // 354
console.log(isNaN(number));
console.log("Type of variable:", typeof (number));

// to integer: parseInt(value)
// to real: parseFloat(value)
console.log(parseInt("34.99")); // 34
console.log(parseFloat("34.99")); // 34.99

console.log("Red" + "Green");

console.log("34" + 1); // 341
console.log("34" + false); // 341
console.log("34" - 1); // 33

console.log("5" * 2); // 10
