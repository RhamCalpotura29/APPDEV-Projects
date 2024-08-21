function calculateSales() {
    // Get the projected sales amount from the input field
    let totalSales = document.getElementById("totalSales").value;
    
    // Calculate the profit (23% of total sales)
    let profit = totalSales * 0.23;
    
    // Display the profit
    document.getElementById("profit").innerText = "Projected Profit: $" + profit.toFixed(2);
}
