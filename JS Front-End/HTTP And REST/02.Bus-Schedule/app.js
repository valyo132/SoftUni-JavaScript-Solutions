function solve() {
    function depart() {
        const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
        const infoElement = document.getElementsByClassName('info')[0];
        const departButton = document.getElementById('depart');
        const arriveButton = document.getElementById('arrive');

        fetch(`${BASE_URL}${currentBusId}`)
            .then((res) => res.json())
            .then((data) => {
                let { name, next } = data;
                currentBusId = next;

                fetch(`${BASE_URL}${currentBusId}`)
                    .then((res) => res.json())
                    .then((data) => {
                        infoElement.textContent = `Next stop ${data.name}`;
                    });

            });

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

     function arrive() {
        const infoElement = document.getElementsByClassName('info')[0];
        const departButton = document.getElementById('depart');
        const arriveButton = document.getElementById('arrive');

        let busStopName = infoElement.textContent.split('Next stop ').pop();
        infoElement.textContent = `Arriving at ${busStopName}`;

        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let currentBusId = '1567';
let result = solve();