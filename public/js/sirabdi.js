const text = document.getElementById('p-text');
const initialText = '';
const texts = [
    '在建中', // Chinese
    'In costruzione', // Italian
    'قيد الإنشاء', // Arabic
    'Socodka dhismaha', // Somali
    'Under Construction'  // English
];
let textIndex = 0;
let index = 0;

function type() {
    if (index < initialText.length) {
        text.innerHTML += initialText.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        setTimeout(changeText, 5000); // Start changing text after a short delay
    }
}

function changeText() {
    text.style.color = '#928585'; // Set the color you want

    text.innerHTML = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;

    setTimeout(changeText, 3000); // Change text every 3 seconds
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});

// dark.light modes 
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Check if a mode is stored in localStorage when the page loads
    const savedMode = localStorage.getItem('theme');
    
    if (savedMode) {
        // Apply the saved theme (light or dark) from localStorage
        document.body.classList.add(savedMode);
    }

    // Add event listener to the mode button to toggle the mode
    document.getElementById('theme-toggle').addEventListener('click', function() {
        // Toggle between light-mode and no mode (dark by default)
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', ''); // Clear the theme from localStorage (dark mode is default)
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode'); // Store the light mode in localStorage
        }
    });
});



