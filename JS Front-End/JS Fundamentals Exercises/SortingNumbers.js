function sortingNumbers(numbers){
    let list = [...numbers].sort((a, b) => a - b);
    let index = 0;

    let result = [];

    while(list.length > 0){
        if (index % 2 === 0){
            result.push(list.shift());
        } else{
            result.push(list.pop());
        }

        index++;
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);