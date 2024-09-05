
// Array of quotes
const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
];

// Select DOM elements
const quoteDisplay = document.getElementById('quoteDisplay');
const quoteBtn = document.getElementById('quoteBtn');

// Function to get a random quote and update the display
function displayRandomQuote() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Update the quote display
    quoteDisplay.textContent = quotes[randomIndex];
}

// Event Listener for button click
quoteBtn.addEventListener('click', displayRandomQuote);

// Initial display
displayRandomQuote();
