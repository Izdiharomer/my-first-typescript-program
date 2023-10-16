//function
const ARR: number[] = [1, 2, 3, 4, 5];

const SquareNumbers = (arr: number[]): number[] => {
  return arr.map((number) => number ** 2)
};

const result = SquareNumbers(ARR);

console.log(result);








