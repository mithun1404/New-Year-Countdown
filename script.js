// Countdown Timer
const countdown = () => {
    const now = new Date();
    const newYear = new Date('January 1, 2025 00:00:00');
    const diff = newYear - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  
    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById('timer').innerHTML = '🎆 Happy New Year 2025! 🎆';
      document.getElementById('celebrate-btn').classList.remove('hidden');
    }
  };
  
  const timer = setInterval(countdown, 1000);
  
  // Fireworks Celebration
  document.getElementById('celebrate-btn').addEventListener('click', () => {
    gsap.to("body", {
      backgroundColor: "#ff0000",
      duration: 0.5,
      repeat: 5,
      yoyo: true
    });
    alert("🎇 Happy New Year 2025! 🎇");
  });
  
  // Theme Toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
  
  