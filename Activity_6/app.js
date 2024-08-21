function calculateCalories() {
    let cookies = document.getElementById("cookies").value;
    let caloriesPerCookie = (3000 / 40); // 3000 calories in 40 cookies
    let totalCalories = cookies * caloriesPerCookie;
    document.getElementById("calories").innerText = "Total Calories Consumed: " + totalCalories.toFixed(2);
}