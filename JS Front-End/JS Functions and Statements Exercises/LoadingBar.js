function loadingBar(number) {
    if (number === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        return;
    }

    let index = number.toString()[0];

    console.log(`${number}% [${'%'.repeat(index)}${'.'.repeat(Math.abs(10 - index))}]`);
    console.log("Still loading...");
}

loadingBar(50);