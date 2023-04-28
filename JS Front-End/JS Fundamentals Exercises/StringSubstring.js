function stringSubstring(word, text){
    let isFound = text.split(' ')
        .some((x) => x.toLowerCase() == word.toLowerCase())

    if (isFound){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language')