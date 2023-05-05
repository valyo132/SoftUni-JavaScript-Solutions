function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const idInput = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    let idValue = idInput.value;

    while (busesList.firstChild) {
        busesList.removeChild(busesList.firstChild);
      }

    fetch(`${BASE_URL}${idValue}`)
        .then((res) => res.json())
        .then((data) => {
            let {name, buses} = data;
            stopName.textContent = name;

            for (const key in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
                busesList.appendChild(li);
            }
        })
        .catch((error) => stopName.textContent = 'Error');
}