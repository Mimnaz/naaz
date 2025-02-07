document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseMessage = document.getElementById('responseMessage');
    const musicSection = document.getElementById('musicSection');

    // Sliding Hearts Animation
    function createSlidingHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.classList.add('sliding-hearts-container');
        document.body.appendChild(heartsContainer);

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('sliding-heart');
            
            // Random heart emojis
            const heartEmojis = ['❤️', '💕', '💖', '💗', '💓'];
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            
            // Randomize horizontal position
            const startPosition = Math.random() * 100;
            heart.style.left = startPosition + 'vw';
            
            // Randomize size 
            const size = Math.random() * 25 + 15;
            heart.style.fontSize = size + 'px';
            
            // Increase animation duration for slower movement
            heart.style.animationDuration = (Math.random() * 10 + 8) + 's';
            
            heartsContainer.appendChild(heart);

            // Remove heart after animation
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

        // Create hearts less frequently and for a longer duration
        const heartInterval = setInterval(createHeart, 1000);

        // Stop creating hearts after a longer while
        setTimeout(() => {
            clearInterval(heartInterval);
        }, 20000);
    }

    // Romantic background animation
    function createHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.classList.add('hearts-container');
        document.body.appendChild(heartsContainer);

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heartsContainer.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

        setInterval(createHeart, 300);
    }

    // Proposal button interactions
    let noClickCount = 0;
    const noResponses = [
        "Are you sure?",
        "Pretty please?",
        "Think again!",
        "But we're perfect together!",
        "One more chance?",
        "Don't break my heart! 💔"
    ];

    noButton.addEventListener('click', function() {
        // Make the no button move around and change text
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + 'px';
        noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + 'px';
        
        // Change button text
        if (noClickCount < noResponses.length) {
            noButton.textContent = noResponses[noClickCount];
            noClickCount++;
        }
    });

    yesButton.addEventListener('click', function() {
        // Grow the yes button
        yesButton.style.transform = 'scale(1.2)';
        yesButton.style.backgroundColor = '#28a745';
        
        // Show response message
        responseMessage.classList.remove('d-none');
        responseMessage.querySelector('h2').textContent = "Yay! Our Love Story Begins! 💕";
        
        // Reveal music section
        musicSection.classList.remove('d-none');
        
        // Create confetti effect
        createConfetti();
    });

    // Confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confettiContainer.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    // Initialize heart animation
    createHearts();

    // Initialize sliding hearts animation
    createSlidingHearts();

    // Highlight current day
    function highlightCurrentDay() {
        const today = new Date();
        const startDate = new Date(2025, 1, 7); // February 7, 2025
        const daycards = document.querySelectorAll('.day-card');

        daycards.forEach((card, index) => {
            const cardDate = new Date(startDate);
            cardDate.setDate(startDate.getDate() + index);

            if (cardDate.toDateString() === today.toDateString()) {
                card.classList.add('current-day');
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 0 20px rgba(255, 77, 109, 0.5)';
            }
        });
    }

    // Call the function to highlight current day
    highlightCurrentDay();

    // Get current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();

    // If it's February
    if (currentMonth === 1) {
        // Find all day cards
        const dayCards = document.querySelectorAll('.day-card');
        
        // Highlight current day
        dayCards.forEach((card) => {
            const dateText = card.querySelector('.date').textContent;
            const cardDay = parseInt(dateText.match(/\d+/)[0]);
            
            if (cardDay === currentDay) {
                card.classList.add('current-day');
                // Scroll to current day
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Add hover effect for music players
    const musicPlayersHover = document.querySelectorAll('.music-player');
    musicPlayersHover.forEach(player => {
        player.addEventListener('mouseenter', () => {
            player.style.transform = 'scale(1.02)';
            player.style.transition = 'transform 0.3s ease';
        });
        
        player.addEventListener('mouseleave', () => {
            player.style.transform = 'scale(1)';
        });
    });

    // Add CSS for heart animation
    const style = document.createElement('style');
    style.textContent = `
        .hearts-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        .heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff4d6d"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>') no-repeat center/cover;
            animation: fall linear infinite;
            opacity: 0.7;
        }
        @keyframes fall {
            0% {
                transform: translateY(-100%) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        .sliding-hearts-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        .sliding-heart {
            position: absolute;
            font-size: 20px;
            color: #ff4d6d;
            animation: slideHearts linear infinite;
        }
        @keyframes slideHearts {
            0% {
                transform: translateY(100%) translateX(0);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100%) translateX(10vw);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});