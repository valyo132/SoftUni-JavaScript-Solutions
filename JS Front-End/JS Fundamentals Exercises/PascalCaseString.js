function pascalSpliter(text){
    let pattern = /[A-Z]/;
    let result = [];
    let index = 0;

    for (let i = 0; i <= text.length - 1; i++){
        if (pattern.test(text[i]) && i > 0){
            result.push(text.substring(index, i));
            index = i;
        }
    }

    result.push(text.substring(index, text.length));

    console.log(result.join(', '));
}

pascalSpliter('HoldTheDoor');