// Создание фиолетовых звезд
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starsCount = 150;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Случайные параметры звезд
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.7 + 0.3;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `-${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        star.style.opacity = opacity;
        
        // Случайный фиолетовый оттенок
        const purpleShades = ['#BB8FCE', '#A569BD', '#8E44AD', '#7D3C98'];
        const randomColor = purpleShades[Math.floor(Math.random() * purpleShades.length)];
        star.style.background = randomColor;
        
        starsContainer.appendChild(star);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    
    // Клик по username для перехода в Telegram
    document.getElementById('username').addEventListener('click', () => {
        window.open('https://t.me/wizonow', '_blank');
    });

    // Анимированные счетчики
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

    // Эффект размытия фона
    document.addEventListener('click', (e) => {
        const bgBlur = document.getElementById('bgBlur');
        if (e.target.closest('.profile-card, .skills-section, .fun-facts')) {
            bgBlur.classList.add('active');
            setTimeout(() => bgBlur.classList.remove('active'), 300);
        }
    });

    // Ripple эффект
    document.addEventListener('click', (e) => {
        if (e.target.closest('.skill-item, .fact-item')) {
            const element = e.target.closest('.skill-item, .fact-item');
            const ripple = document.createElement('span');
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(187, 143, 206, 0.6);
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

    // Добавление CSS для ripple анимации
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
});
