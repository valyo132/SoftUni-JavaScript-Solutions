function sum(...params){
    let sum = params[0] + params[1];

    function substract(sum, number){
        return sum - number;
    }

    console.log(substract(sum, params[2]));
}

sum(2,3,4);