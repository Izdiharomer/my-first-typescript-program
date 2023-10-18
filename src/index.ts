//typescript functions code challenge:



// an arrow function that takes an array of numbers and returns a new array with each number squared.

const ARR: number[] = [1, 2, 3, 4, 5];

const SquareNumbers = (arr: number[]): number[] => {
  return arr.map((number) => number * number)
};



//Optional and Default Parameters:
//Create a function that accepts a person's name and age as arguments. Make the age parameter optional and provide a default value of 30. Return a string that includes their name and age.//


function getPersonInfo(name:string, age:number = 30) {
  return `My name is ${name} and I am ${age} years old`
}



//Hello World Function:
//Create a TypeScript function that takes a name as an argument and returns a greeting message.


function greet(name:string):string {
  return `Hello ${name}`
}


// Sum of Numbers:
// Write a function that takes an array of numbers and returns their sum.



function calculateSum(numbers:number[]):number {
  return numbers.reduce((acc, current) => acc + current, 0)
}


//function
//Check for Even Numbers:
//Implement a function that checks if a number is even and returns a boolean value.


function isEven(a:number):boolean {
  return a % 2 === 0
}


// String Reversal:
// Create a function that takes a string and returns the reversed version of that string.



function reversedString(a:string):string{
  return a.split('').reverse().join('')
}



//Array Filtering:
//Write a function that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(number:number[]):number[] {
  return number.filter((n) => n % 2 === 0)
}



//Array Filtering:
//Write a function that takes an array of numbers and returns a new array with only the even numbers.



function fildteredNumbers(number:number[]):number[]{
  return number.filter((n) => n % 2 === 0)
}
  


/* Find the Maximum:
Implement a function that finds and returns the maximum number from an array of numbers. */




function findMaxNumber(number:number[]):number {
  return Math.max(...number)
}



/* Find the Minimum:
Implement a function that finds and returns the minimum number from an array of numbers. */



function findMinNumber(number:number[]):number {
  return Math.min(...number)
}

/*
Simple User Validation:
Write a function that checks if a given username and password match predefined values and returns a boolean result.

*/

function validateUser(username: string, password: string): boolean {
  const predefinedUsername = "myusername";
  const predefinedPassword = "mypassword";

  return username === predefinedUsername && password === predefinedPassword;
}

// Example usage:
const inputUsername = "myusername";
const inputPassword = "mypassword";

if (validateUser(inputUsername, inputPassword)) {
  console.log("Login successful");
} else {
  console.log("Login failed. Please check your username and password.");
}

/*
Average of Numbers:
Write a function to compute the average of an array of numbers.

const arr:number[] = [1, 2, 3, 4, 5];
 1 + 2 + 3 + 4 + 5 = x , then x / 5 note: 5 is the length of the array

*/

function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}
/*
Convert Fahrenheit to Celsius:
Create a function that converts a temperature in Fahrenheit to Celsius.

the formula: Celsius (°C) = (Fahrenheit (°F) - 32) * (5/9).

The fahrenheit value is subtracted by 32 to adjust it to the Fahrenheit scale's zero point (freezing point of water).
The result of the subtraction is then multiplied by (5/9), which is the factor to convert 
Celsius (°C) = (Fahrenheit (°F) - 32) * (5/9).
*/

function fahrenheitToCelsius(fahrenheit:number):number{
  const celsius = (fahrenheit - 32) * (5/9)
  return celsius
}

//const fahrenheitValue = 88; // Example temperature in Fahrenheit
const celsiusValue = fahrenheitToCelsius(88).toFixed(0);//toFixed(0) makes it 31 instead of 31.1
console.log(`68°F is equal to ${celsiusValue}°C`);




