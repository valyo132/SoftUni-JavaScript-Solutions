function leapYear(number){
    if (number % 400 === 0){
        console.log('yes')
        return;
    }

    if (number % 4 === 0 && number % 100 !== 0){
        console.log('yes')
    } else {
        console.log('no')
    }
}

leapYear(2000);