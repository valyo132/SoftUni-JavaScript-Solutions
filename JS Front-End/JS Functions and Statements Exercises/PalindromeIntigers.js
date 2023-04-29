function palindromeIntigers(input){
    for (let i = 0; i < input.length; i++) {
        let currentString = input[i].toString();
        if (currentString === currentString.split("").reverse().join("")){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntigers([123,323,421,121])