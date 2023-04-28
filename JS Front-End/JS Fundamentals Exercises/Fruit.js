function fruit(fruit, weight, price){
    let weightInKilos = weight / 1000;
    let moneyNeeded = price * weightInKilos;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);