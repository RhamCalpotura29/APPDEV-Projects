// Event Listener for button click
document.getElementById('colorBtn').addEventListener('click', changeColor);

// Function to generate a random color and update the page
function changeColor() {
    // Generate a random hex color code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    // Update the color code display
    document.getElementById('colorCode').textContent = randomColor;

    // Change the background color of the entire body
    document.body.style.backgroundColor = randomColor;

    // Ensure the button contrasts with the background color
    document.getElementById('colorBtn').style.backgroundColor = randomColor;
}