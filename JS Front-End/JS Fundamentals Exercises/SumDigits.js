function sumDigits(number){
    let array = number.toString().split('');
    let sum = 0;

    for (let i = 0; i <= array.length - 1; i++){
        sum += Number(array[i]);
    }

    console.log(sum);
}

sumDigits(245678);