// Theme toggle functionality - should run immediately
function initThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    if (themeToggleButton) {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light-mode') {
            document.body.classList.add('light-mode');
        }

        // Add click event listener to toggle theme
        themeToggleButton.addEventListener('click', function() {
            if (document.body.classList.contains('light-mode')) {
                document.body.classList.remove('light-mode');
                localStorage.removeItem('theme');
            } else {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }
}

// Initialize theme before DOM is fully loaded
initThemeToggle();

// Typing animation - should run after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('p-text');
    if (!textElement) return; // Only run on pages with p-text element

    const texts = [
        { content: '在建中', direction: 'ltr' },
        { content: 'In costruzione', direction: 'ltr' },
        { content: 'قيد الإنشاء', direction: 'rtl' },
        { content: 'Socodka dhismaha', direction: 'ltr' },
        { content: 'Under Construction', direction: 'ltr' }
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        const currentText = texts[textIndex];
        textElement.setAttribute('dir', currentText.direction);

        if (charIndex < currentText.content.length) {
            textElement.innerHTML += currentText.content.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(changeText, 3000);
        }
    }

    function changeText() {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        textElement.innerHTML = '';
        typeText();
    }

    typeText();
});
