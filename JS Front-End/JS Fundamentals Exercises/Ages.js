function ages(number){
    if (number < 0){
        console.log('out of bounds')
        return
    }

    if (number >= 0 && number <= 2){
        console.log('baby')
    } else if (number >= 3 && number <= 13) {
        console.log('child')
    } else if (number >= 14 && number <= 19) {
        console.log('teenager')
    } else if (number >= 20 && number <= 65) {
        console.log('adult')
    } else {
        console.log('elder')
    }
}

ages(-1);