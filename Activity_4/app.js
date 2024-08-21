function calculateMPG() {
    let miles = document.getElementById("miles").value;
    let gallons = document.getElementById("gallons").value;
    let mpg = miles / gallons;
    document.getElementById("mpg").innerText = "Miles per Gallon (MPG): " + mpg.toFixed(2);
}