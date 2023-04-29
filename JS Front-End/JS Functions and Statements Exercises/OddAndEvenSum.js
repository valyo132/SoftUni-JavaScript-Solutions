function oddAndEvenSum(string){
 let numbers = string.toString().split('').map(Number);

 let evenSum = 0;
 let oddSum = 0;
 
 for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0){
        evenSum += numbers[index];
    } else {
        oddSum += numbers[index];
    }
 }

 console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);