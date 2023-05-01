function piccolo(input){
    let carNumbers = [];

    for (const line of input) {
        let [direction, number] = line.split(', ');

        if (direction === "IN" && !carNumbers.includes(number)){
            carNumbers.push(number);
        } else if (direction === "OUT" && carNumbers.includes(number)) {
            let index = carNumbers.indexOf(number);
            carNumbers.splice(index, 1);
        }
    }

    if (carNumbers.length > 0){
        for (const car of carNumbers.sort((carA, carB) => carA.localeCompare(carB))) {
            console.log(car);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)