// Theme toggle functionality with direct style manipulation
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, looking for theme toggle button');

    const themeToggleButton = document.getElementById('theme-toggle');
    console.log('Theme toggle button found:', !!themeToggleButton);

    if (themeToggleButton) {
        // Add a click event with logging
        themeToggleButton.addEventListener('click', function (e) {
            console.log('Button clicked');
            e.preventDefault(); // Prevent any default action

            const isCurrentlyLight = document.body.classList.contains('light-mode');
            console.log('Current mode is light:', isCurrentlyLight);

            if (isCurrentlyLight) {
                // Switch to dark mode
                document.body.classList.remove('light-mode');
                document.body.style.backgroundColor = '#090b09';
                themeToggleButton.style.backgroundColor = '#090b09';
                themeToggleButton.style.color = '#948779';
                localStorage.removeItem('theme');
                console.log('Switched to dark mode');
            } else {
                // Switch to light mode
                document.body.classList.add('light-mode');
                document.body.style.backgroundColor = '#fff1e1';
                themeToggleButton.style.backgroundColor = '#fff1e1';
                themeToggleButton.style.color = '#40280b';
                localStorage.setItem('theme', 'light-mode');
                console.log('Switched to light mode');
            }
        });

        // Set initial theme with logging
        const savedTheme = localStorage.getItem('theme');
        console.log('Saved theme:', savedTheme);

        if (savedTheme === 'light-mode') {
            document.body.classList.add('light-mode');
            document.body.style.backgroundColor = '#fff1e1';
            themeToggleButton.style.backgroundColor = '#fff1e1';
            themeToggleButton.style.color = '#40280b';
            console.log('Applied light mode from saved preference');
        } else {
            document.body.style.backgroundColor = '#090b09';
            themeToggleButton.style.backgroundColor = '#090b09';
            themeToggleButton.style.color = '#948779';
            console.log('Applied dark mode (default)');
        }
    } else {
        console.error('Theme toggle button not found!');
    }
});

// New typing animation approach
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('p-text');
    if (!textElement) return;

    // Clear any existing content first
    textElement.innerHTML = '';

    // Create a placeholder that will always be there but invisible
    const placeholder = document.createElement('span');
    placeholder.textContent = 'Under Construction'; // Use the longest text as placeholder
    placeholder.style.visibility = 'hidden';
    placeholder.style.position = 'absolute';
    placeholder.style.height = '0';
    placeholder.style.overflow = 'hidden';

    // Create a span for the actual text
    const textSpan = document.createElement('span');
    textSpan.style.display = 'inline-block';

    // Add both to the p-text element
    textElement.appendChild(placeholder);
    textElement.appendChild(textSpan);

    // Make sure the container has the right styles
    textElement.style.position = 'relative';
    textElement.style.display = 'block';
    textElement.style.minHeight = '1.5em';
    textElement.style.textAlign = 'center';

    const texts = [
        { content: '在建中', direction: 'ltr' },
        { content: 'In costruzione', direction: 'ltr' },
        { content: 'قيد الإنشاء', direction: 'rtl' },
        { content: 'Socodka dhismaha', direction: 'ltr' },
        { content: 'Under Construction', direction: 'ltr' }
    ];
    let textIndex = 0;

    function typeText() {
        const currentText = texts[textIndex];
        let charIndex = 0;
        textSpan.textContent = '';
        textElement.setAttribute('dir', currentText.direction);

        const typingInterval = setInterval(() => {
            if (charIndex < currentText.content.length) {
                textSpan.textContent = currentText.content.substring(0, charIndex + 1);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    textIndex = (textIndex + 1) % texts.length;
                    typeText();
                }, 3000);
            }
        }, 150);
    }

    typeText(); // Start the typing animation
});

// Function to toggle quick thoughts visibility
function toggleThought(element) {
    // Find the next sibling that has the quick-thought-content class
    const thoughtContent = element.nextElementSibling;

    // Toggle the visibility
    if (thoughtContent.style.display === 'block') {
        thoughtContent.style.display = 'none';
    } else {
        thoughtContent.style.display = 'block';
    }
}

