// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
htmlElement.className = savedTheme + '-theme';
updateThemeIcon();

themeBtn.addEventListener('click', () => {
    const isDark = htmlElement.classList.contains('dark-theme');
    htmlElement.className = isDark ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeIcon();
});

function updateThemeIcon() {
    const isDark = htmlElement.classList.contains('dark-theme');
    themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Username Click
document.getElementById('username').addEventListener('click', () => {
    window.open('https://t.me/wizonow', '_blank');
});

// Animated Counter
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.stats'));

// Background blur on interaction
document.addEventListener('click', (e) => {
    const bgBlur = document.getElementById('bgBlur');
    if (e.target.closest('.profile-card, .skills-section, .fun-facts')) {
        bgBlur.classList.add('active');
        setTimeout(() => bgBlur.classList.remove('active'), 300);
    }
});

// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.float-circle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * 20 * speed;
        const y = (mouseY - 0.5) * 20 * speed;
        element.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
    });
});

// Add ripple effect to interactive elements
document.addEventListener('click', (e) => {
    if (e.target.closest('.skill-item, .fact-item, .theme-btn')) {
        const element = e.target.closest('.skill-item, .fact-item, .theme-btn');
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
