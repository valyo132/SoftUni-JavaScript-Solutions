function revealWords(missingWords, letter){
    missingWords = missingWords.split(', ');
    let words = letter.split(' ');

    for (let i = 0; i <= words.length - 1; i++){
        if (words[i].startsWith('*')){
            let charsLength = words[i].length;

            for (let k = 0; k <= missingWords.length - 1; k++){
                if (missingWords[k].length == charsLength){
                    words[i] = missingWords[k];
                }
            }
        }
    }

    console.log(words.join(' '));
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');