function calculateDistance() {
    // Speed of the car in miles per hour
    const speed = 60;
    
    // Calculate distances
    const distance5Hours = speed * 5;
    const distance8Hours = speed * 8;
    const distance12Hours = speed * 12;
    
    // Display the distances
    document.getElementById("distance5").innerText = "Distance in 5 hours: " + distance5Hours + " miles";
    document.getElementById("distance8").innerText = "Distance in 8 hours: " + distance8Hours + " miles";
    document.getElementById("distance12").innerText = "Distance in 12 hours: " + distance12Hours + " miles";
}