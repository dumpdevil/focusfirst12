// Timer State
let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval = null;
let isRunning = false;
let sessionCount = 0;

// DOM Elements
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update timer display
function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

// Start timer
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            completeSession();
        }
    }, 1000);
}

// Pause timer
function pauseTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset timer
function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Complete session
function completeSession() {
    pauseTimer();
    sessionCount++;
    alert('Session complete! 🎉');
    resetTimer();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#contact' && href !== '#support') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// CTA Button scroll to timer
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const timerSection = document.querySelector('.timer-demo');
        if (timerSection) {
            timerSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
}

// Initialize display
updateDisplay();
