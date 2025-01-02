document.addEventListener('DOMContentLoaded', function () {
    /**
     * Multilingual Typing Animation
     */
    const textElement = document.getElementById('p-text');
    const texts = [
        { content: '在建中', direction: 'ltr' }, // Chinese (Left-to-Right)
        { content: 'In costruzione', direction: 'ltr' }, // Italian (Left-to-Right)
        { content: 'قيد الإنشاء', direction: 'rtl' }, // Arabic (Right-to-Left)
        { content: 'Socodka dhismaha', direction: 'ltr' }, // Somali (Left-to-Right)
        { content: 'Under Construction', direction: 'ltr' } // English (Left-to-Right)
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        const currentText = texts[textIndex];

        // Set text direction and alignment dynamically
        if (textElement) {
            textElement.setAttribute('dir', currentText.direction);
            textElement.style.textAlign = currentText.direction === 'rtl' ? 'right' : 'left';

            if (charIndex < currentText.content.length) {
                textElement.innerHTML += currentText.content.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100); // Typing speed
            } else {
                setTimeout(changeText, 3000); // Delay before changing text
            }
        } else {
            console.error('Text element (#p-text) not found!');
        }
    }

    function changeText() {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // Cycle through texts
        if (textElement) {
            textElement.innerHTML = ''; // Clear text before typing the new one
            typeText();
        }
    }

    // Start the typing animation if the element exists
    if (textElement) {
        typeText();
    } else {
        console.error('Text element (#p-text) not found!');
    }

    /**
     * Dark/Light Mode Toggle
     */
    const themeToggleButton = document.getElementById('theme-toggle');

    if (themeToggleButton) {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light-mode') {
            document.body.classList.add('light-mode'); // Apply light mode
        }

        // Add click event listener to toggle theme
        themeToggleButton.addEventListener('click', function () {
            if (document.body.classList.contains('light-mode')) {
                document.body.classList.remove('light-mode'); // Switch to dark mode
                localStorage.removeItem('theme'); // Remove theme from storage
            } else {
                document.body.classList.add('light-mode'); // Switch to light mode
                localStorage.setItem('theme', 'light-mode'); // Save light mode
            }
        });
    } else {
        console.error('Theme toggle button (#theme-toggle) not found!');
    }
});