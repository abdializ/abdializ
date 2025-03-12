// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            const body = document.body;
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                localStorage.removeItem('theme');
            } else {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });

        // Set initial theme
        if (localStorage.getItem('theme') === 'light-mode') {
            document.body.classList.add('light-mode');
        }
    }
});

// Typing animation - only on pages with p-text element
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('p-text');
    if (!textElement) return;

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
