function oddOccurrences(string){
    let allWords = string.toLowerCase().split(' ');
    
    let words = Object.entries(
        allWords.reduce((data, word) => {
            if (data.hasOwnProperty(word)){
                data[word] += 1;
            } else {
                data[word] = 1;
            }
    
            return data;
        }, {})
    )
        .filter(([_word, count]) => count % 2 !== 0);

    let wordsToPrint = [];
    for (const [word, count] of words) {
        wordsToPrint.push(word);
    }

    console.log(wordsToPrint.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');