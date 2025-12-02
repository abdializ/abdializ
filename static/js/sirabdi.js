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

// Custom Audio Player Logic
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('.custom-audio-player');

    audioPlayers.forEach(player => {
        const audio = player.querySelector('audio');
        const playBtn = player.querySelector('.play-pause-btn');
        const playIcon = player.querySelector('.play-icon');
        const pauseIcon = player.querySelector('.pause-icon');
        const progressBar = player.querySelector('.progress-bar');
        const progressFill = player.querySelector('.progress-fill');
        const currentTimeDisplay = player.querySelector('.current-time');
        const durationDisplay = player.querySelector('.duration');
        const progressContainer = player.querySelector('.progress-container');

        // Format time in MM:SS
        function formatTime(seconds) {
            if (isNaN(seconds)) return "0:00";
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }

        // Toggle Play/Pause
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
                player.classList.add('playing'); // Add playing class
            } else {
                audio.pause();
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
                // Don't remove playing class immediately on pause to keep layout stable
                // player.classList.remove('playing'); 
            }
        });

        // Dragging Logic
        let isDragging = false;

        function updateProgress(e) {
            const width = progressContainer.clientWidth;
            // Get X coordinate relative to the container
            const rect = progressContainer.getBoundingClientRect();
            let clickX = e.clientX - rect.left;
            
            // Clamp between 0 and width
            clickX = Math.max(0, Math.min(clickX, width));
            
            const duration = audio.duration;
            if (duration) {
                const percent = (clickX / width) * 100;
                progressFill.style.width = `${percent}%`;
                const time = (clickX / width) * duration;
                currentTimeDisplay.textContent = formatTime(time);
            }
        }

        progressContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateProgress(e);
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                updateProgress(e);
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (isDragging) {
                // Commit the final time
                const width = progressContainer.clientWidth;
                const rect = progressContainer.getBoundingClientRect();
                let clickX = e.clientX - rect.left;
                
                clickX = Math.max(0, Math.min(clickX, width));
                
                const duration = audio.duration;
                if (duration) {
                    let newTime = (clickX / width) * duration;
                    audio.currentTime = newTime;
                }
                isDragging = false;
            }
        });

        // Set Duration Helper
        const setDuration = () => {
             if(audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
                 durationDisplay.textContent = formatTime(audio.duration);
                 return true;
             }
             return false;
        };

        // Event listener for metadata
        audio.addEventListener('loadedmetadata', setDuration);
        
        // Check immediately and poll if needed (fixes "--:--" issue on some browsers)
        if (!setDuration()) {
            const checkDuration = setInterval(() => {
                if (setDuration()) {
                    clearInterval(checkDuration);
                }
            }, 100);
            // Stop checking after 5 seconds to prevent infinite polling
            setTimeout(() => clearInterval(checkDuration), 5000);
        }

        // Update Progress and Time (only if not dragging)
        audio.addEventListener('timeupdate', () => {
            if (!isDragging) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = `${percent}%`;
                currentTimeDisplay.textContent = formatTime(audio.currentTime);
            }
        });

        // Reset on End
        audio.addEventListener('ended', () => {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            progressFill.style.width = '0%';
            currentTimeDisplay.textContent = '0:00';
            player.classList.remove('playing'); // Remove playing class on end (resets animation)
        });
    });
});
