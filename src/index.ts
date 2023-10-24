/*
Function Expression Challenge:
Define a function expression called power that takes two parameters, base and exponent, and returns the result of 
raising the base to the power of the exponent.
 Use this function expression to calculate 2 to the power of 5.
*/
const power = (base:number, exponent: number):number => {
    
    return Math.pow(base, exponent)
}

const x = power(3, 3)
console.log(x);
