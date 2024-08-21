function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").innerText = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2);
}