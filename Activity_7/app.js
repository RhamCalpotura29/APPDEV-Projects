function calculatePercentages() {
    let males = document.getElementById("males").value;
    let females = document.getElementById("females").value;
    let total = parseInt(males) + parseInt(females);
    let malePercentage = (males / total) * 100;
    let femalePercentage = (females / total) * 100;
    document.getElementById("malePercentage").innerText = "Percentage of Males: " + malePercentage.toFixed(2) + "%";
    document.getElementById("femalePercentage").innerText = "Percentage of Females: " + femalePercentage.toFixed(2) + "%";
}