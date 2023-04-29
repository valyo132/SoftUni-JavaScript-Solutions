function factorialDevision(...params) {
    let firstNumberFactorial = getFactorial(params[0]);
    let secondNumberFactorial = getFactorial(params[1]);

    return (firstNumberFactorial / secondNumberFactorial).toFixed(2);

    function getFactorial(number) {
        let sum = 1;

        for (let index = 1; index <= number; index++) {
            sum *= index;
        }

        return sum;
    }
}

console.log(factorialDevision(5, 2));