function charactersInRange(char1, char2){
    let ordered = [char1, char2].sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let result = [];

    for (let i = ordered[0].charCodeAt() + 1; i < ordered[1].charCodeAt(); i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

charactersInRange('C',

'#');