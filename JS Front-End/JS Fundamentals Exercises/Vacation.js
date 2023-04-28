function vacation(count, type, dayOfWeek){
    let totalPeople = count;
    let guestsType = type;
    let day = dayOfWeek;

    let totalPrice = 0;
    let pricePerPerson = 0;

    switch(guestsType){
        case "Students":
            if (day === "Friday") pricePerPerson = 8.45;
            else if (day === "Saturday") pricePerPerson = 9.80;
            else if (day === "Sunday") pricePerPerson = 10.46;

            totalPrice += pricePerPerson * totalPeople;

            if (totalPeople >= 30){
                totalPrice -= totalPrice * 0.15;
            }
        break;
        case "Business":
            if (day === "Friday") pricePerPerson = 10.90;
            else if (day === "Saturday") pricePerPerson = 15.60;
            else if (day === "Sunday") pricePerPerson = 16;

            if (totalPeople >= 100){
                totalPrice += pricePerPerson * (totalPeople - 10);
            }
            else{
                totalPrice += pricePerPerson * totalPeople;
            }
        break;
        case "Regular":
            if (day === "Friday") pricePerPerson = 15;
            else if (day === "Saturday") pricePerPerson = 20;
            else if (day === "Sunday") pricePerPerson = 22.50;

            totalPrice += pricePerPerson * totalPeople;

            if (totalPeople >= 10 && totalPeople <= 20){
                totalPrice -= totalPrice * 0.05;
            }
        break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(100, "Business", "Sunday");