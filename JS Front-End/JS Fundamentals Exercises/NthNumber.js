function NthNumber(numbers, step){
    let result = [numbers[0]];
    let index = 0;

    for (let i = 1; i <= numbers.length - 1; i++){
        index++;

        if (index === step){
            index = 0;
            result.push(numbers[i]);
        }
    }

    return result;
}

NthNumber(['dsa', 'asd', 'test', 'tset'], 2)