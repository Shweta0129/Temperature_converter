function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultDiv = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let convertedTemperature;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * (5/9);
        } else if (toUnit === "kelvin") {
            convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
        } else {
            convertedTemperature = temperature;
        }
    }

    resultDiv.innerHTML = `Result: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
