function arrayRotation(numbers, steps){
    let arrayOfNumbers = [numbers.toString().split()];

    for (let i = 0; i < steps; i++){
        let popedNumber = numbers.reverse().pop();
        numbers.reverse().push(popedNumber);
    }

    console.log(numbers.join(' '));
}

arrayRotation([32, 21, 61, 1], 4)