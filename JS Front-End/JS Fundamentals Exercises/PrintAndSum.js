function printAndSum(start, end){
    let totalSum = 0;
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
        totalSum += i;
    }

    console.log(arr.join(' '));
    console.log(`Sum: ${totalSum}`)
}

printAndSum(5, 10)