function cookingByNumbers(num, op1, op2, op3, op4, op5){
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    for (let i = 0; i <= operations.length - 1; i++){
        switch (operations[i]){
            case "chop": number /= 2; break;
            case "dice": number = Math.sqrt(number); break;
            case "spice": number += 1; break;
            case "bake": number *= 3; break;
            case "fillet": number -= number * 0.2; break;
        }

        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');