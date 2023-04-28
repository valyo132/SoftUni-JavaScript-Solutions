function roadRadar(number, area){
    let speed = Number(number);
    let status = 'reckless driving';
    let speedDifference = 0;

    switch(area){
        case "motorway":
            if (speed <= 130){
                console.log(`Driving ${speed} km/h in a 130 zone`);
                return;
            } else {
                speedDifference = speed - 130;

                if (speedDifference <= 20){
                    status = 'speeding';
                }
                else if (speedDifference > 20 && speedDifference <= 40){
                    status = 'excessive speeding';
                }
            }

            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of 130 - ${status}`);
        break;
        case "interstate":
            if (speed <= 90){
                console.log(`Driving ${speed} km/h in a 90 zone`);
                return;
            } else {
                speedDifference = speed - 90;

                if (speedDifference <= 20){
                    status = 'speeding';
                }
                else if (speedDifference > 20 && speedDifference <= 40){
                    status = 'excessive speeding';
                }
            }

            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of 90 - ${status}`);
        break;
        case "city":
            if (speed <= 50){
                console.log(`Driving ${speed} km/h in a 50 zone`);
                return;
            } else {
                speedDifference = speed - 50;

                if (speedDifference <= 20){
                    status = 'speeding';
                }
                else if (speedDifference > 20 && speedDifference <= 40){
                    status = 'excessive speeding';
                }
            }

            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of 50 - ${status}`);
        break;
        case "residential":
            if (speed <= 20){
                console.log(`Driving ${speed} km/h in a 20 zone`);
                return;
            } else {
                speedDifference = speed - 20;

                if (speedDifference <= 20){
                    status = 'speeding';
                }
                else if (speedDifference > 20 && speedDifference <= 40){
                    status = 'excessive speeding';
                }
            }

            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of 20 - ${status}`);
        break;
    }
}

roadRadar(120, 'interstate')