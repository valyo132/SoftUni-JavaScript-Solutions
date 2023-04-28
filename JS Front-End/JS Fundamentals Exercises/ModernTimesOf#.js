function modernTimes(letter){
    let regex = /^[A-Za-z]+$/;

    let words = letter.split(' ')
        .filter((x) => x.startsWith('#') && x.length > 1 && checkIsWordValid(x))
        .map((x) => x.slice(1));

    function checkIsWordValid(word){
        return regex.test(word.slice(1));
    }

    console.log(words.join('\n'));
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');