function perfectNumber(number){
    let devisors = getDevisors(number);

    if (devisors.reduce((a, b) => a + b) === number){
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

    function getDevisors(number){
        let result = [];

        for (let index = 0; index < number; index++) {
            if (number % index === 0){
                result.push(index);
            }
        }

        return result;
    }
}

perfectNumber(1236498);