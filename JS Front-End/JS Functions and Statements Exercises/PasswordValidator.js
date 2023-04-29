function validatePassword(string){
    let flag = true;

    if (string.length < 6 || string.length > 10){
        console.log('Password must be between 6 and 10 characters');
        flag = false;
    }

    let onlyLettersAndDigitPattern = /^[A-Za-z0-9]+$/;
    if (!onlyLettersAndDigitPattern.test(string)){
        console.log('Password must consist only of letters and digits');
        flag = false;
    }

    let twoDigitPattern = /[0-9]{2,}/;
    if (!twoDigitPattern.test(string)){
        console.log('Password must have at least 2 digits');
        flag = false;
    }
    if (flag){
        console.log('Password is valid');
    }
}

validatePassword('Pa$s$s');