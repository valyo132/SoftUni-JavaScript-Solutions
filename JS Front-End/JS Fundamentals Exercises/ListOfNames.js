function listOfNames(listOfNames){
    return [...listOfNames]
        .sort((a, b) => a.localeCompare(b))
        .map((x, index) => `${index + 1}.${x}`)
        .join('\n');
}

console.log(listOfNames(["John",

"Bob",

"Christina",

"Ema"]));