// BAIS3300 HW6 - Main JavaScript file
// Author: jkirima

document.addEventListener('DOMContentLoaded', function() {
    console.log('BAIS3300 HW6 page loaded successfully!');
    
    // Display current date
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
});
