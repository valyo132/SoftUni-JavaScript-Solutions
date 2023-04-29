function smallestNumber(...params){
    console.log(params.sort((a, b) => a - b).shift());
}

smallestNumber(2,5,3);