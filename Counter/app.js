// Set initial value
let count = 0;

// Select value and buttons
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('decreaseby5')) {
            count -= 5;
        } else if (styles.contains('increaseby5')) {
            count += 5;
        } else if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('random')) {
            count = getRandomNumber();
        } else {
            count = 0;
        }

        // Update color based on count
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        // Update the display
        value.textContent = count;
    });
});

// Random number algorithm that can be positive or negative
getRandomNumber = () => {
    // Generate a random number between -100 and 100
    return Math.floor(Math.random() * 201) - 100;
};
