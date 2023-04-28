function reversedChars(char1, char2, char3){
    let string = ([char1, char2, char3].join(''));
    console.log(string.split('').reverse().join(' '))
}

reversedChars('a',
'b',
'c')