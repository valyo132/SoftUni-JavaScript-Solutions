const getWheter = document.getElementById('submit');
getWheter.addEventListener('click', attachEvents);

function attachEvents() {
    const ALL_LOCATIONS_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const SPECIFIC_LOCATION_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const THREE_DAY_FORECAST_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    const upcommingDiv = document.getElementById('upcoming');
    const locationInput = document.getElementById('location');
    const currentWhether = document.getElementById('current');
    const forecastHiddenDiv = document.getElementById('forecast');
    let locationCodeValue = locationInput.value;

    fetch(ALL_LOCATIONS_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const { code, name } of data) {
                if (name === locationCodeValue) {
                    fetch(`${SPECIFIC_LOCATION_URL}${code}`)
                        .then((res) => res.json())
                        .then((locData) => {
                            printCurrentCondition(locData, currentWhether);
                            forecastHiddenDiv.style.display = 'block';
                        });

                    fetch(`${THREE_DAY_FORECAST_URL}${code}`)
                        .then((res) => res.json())
                        .then((threeDayData) => {
                            let { forecast, name } = threeDayData;
                            const div = document.createElement('div');
                            div.classList.add("forecast-info");

                            for (const { condition, high, low } of forecast) {
                                const upcomingSpan = document.createElement('span');
                                upcomingSpan.classList.add("upcoming");
                                
                                const iconSpanTwo = document.createElement('span');
                                iconSpanTwo.classList.add("symbol");
                                upcomingSpan.appendChild(iconSpanTwo);
                                
                                const tempData = document.createElement('span');
                                tempData.classList.add("forecast-data");
                                tempData.textContent = `${low}${String.fromCharCode(176)}/${high}${String.fromCharCode(176)}`;
                                upcomingSpan.appendChild(tempData);
                                
                                const upcomingCondition = document.createElement('span');
                                upcomingCondition.classList.add("forecast-data");
                                upcomingCondition.textContent = condition;
                                upcomingSpan.appendChild(upcomingCondition);

                                div.appendChild(upcomingSpan);
                            };

                            upcommingDiv.appendChild(div);
                        })
                }
            }
        })
}

function printCurrentCondition(locData, currentWhether) {
    let { forecast, name } = locData;

    const div = document.createElement('div');
    div.classList.add("forecasts");

    const iconSpan = document.createElement('span');
    iconSpan.classList.add("condition");
    iconSpan.classList.add("symbol");
    div.appendChild(iconSpan);

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add("condition");

    const locNameSpan = document.createElement('span');
    locNameSpan.classList.add("forecast-data");
    locNameSpan.textContent = name;
    conditionSpan.appendChild(locNameSpan);

    const locTempSpan = document.createElement('span');
    locTempSpan.classList.add("forecast-data");
    locTempSpan.textContent = `${forecast.low}${String.fromCharCode(176)}/${forecast.high}${String.fromCharCode(176)}`;
    conditionSpan.appendChild(locTempSpan);

    const locConditionSpan = document.createElement('span');
    locConditionSpan.classList.add("forecast-data");
    locConditionSpan.textContent = forecast.condition;
    conditionSpan.appendChild(locConditionSpan);

    div.appendChild(conditionSpan);
    currentWhether.appendChild(div);
}

//attachEvents();