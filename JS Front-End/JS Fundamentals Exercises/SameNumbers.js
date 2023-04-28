function sameNumbers(number){
    let array = number.toString().split('');
    let sum = 0;
    let flag = true;

    for (let i = 0; i <= array.length - 1; i++){
        if (array[i] !== array[0]){
            flag = false;
        }

        sum += Number(array[i]);
    }

    if (flag){
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(sum);
}

sameNumbers(1234);