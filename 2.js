function squareRoot(numbers) {
    const sumOfSquares = numbers.reduce((total, number) => {
        return total + Math.pow(number, 2);
    }, 0);

    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
}

const numbers = [2, 4];
const result = squareRoot(numbers);
console.log(result);
