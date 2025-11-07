* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
    --bg-color: #000000;
    --text-color: #ffffff;
    --card-bg: rgba(0, 0, 0, 0.3);
    --border-color: rgba(255, 255, 255, 0.3);
    --shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
    --neon-glow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5);
}

.light-theme {
    --bg-color: #0a0a0a;
    --text-color: #e0e0e0;
    --card-bg: rgba(255, 255, 255, 0.05);
    --border-color: rgba(255, 255, 255, 0.2);
    --shadow: 0 8px 32px rgba(255, 255, 255, 0.05);
}

body {
    font-family: 'Rajdhani', 'Segoe UI', sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    transition: all 0.3s ease;
    overflow-x: hidden;
    position: relative;
}

/* Анимированный фон с звездами */
.stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}

/* Контейнер */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* Переключатель темы */
.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.theme-btn {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: var(--neon-glow);
}

.theme-btn:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 0 20px rgba(0, 255, 255, 1);
}

/* Карточка профиля */
.profile-card {
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 40px;
    text-align: center;
    margin: 60px auto;
    max-width: 500px;
    box-shadow: var(--shadow), var(--neon-glow);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.profile-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: var(--secondary-gradient);
    opacity: 0.1;
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Аватарка */
.avatar-container {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
}

.avatar-wrapper {
    position: relative;
    width: 150px;
    height: 150px;
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid transparent;
    background: var(--secondary-gradient) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: all 0.3s ease;
    box-shadow: var(--neon-glow);
}

.avatar-fallback {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--secondary-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    border: 2px solid white;
    box-shadow: var(--neon-glow);
}

.avatar-glow {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: var(--secondary-gradient);
    filter: blur(15px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
}

.avatar-wrapper:hover .avatar-glow {
    opacity: 0.6;
}

.avatar-wrapper:hover .avatar {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
}

/* Имя пользователя */
.username {
    font-size: 2.5rem;
    margin-bottom: 15px;
    background: var(--secondary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.username:hover {
    transform: translateY(-2px);
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
}

.link-icon {
    font-size: 1rem;
    opacity: 0.7;
}

/* Биография */
.bio {
    font-size: 1.3rem;
    opacity: 0.9;
    margin-bottom: 30px;
    line-height: 1.6;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    font-family: 'Rajdhani', sans-serif;
}

/* Статистика */
.stats {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.2rem;
    font-weight: bold;
    background: var(--secondary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Orbitron', monospace;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.stat-label {
    font-size: 1rem;
    opacity: 0.8;
    margin-top: 5px;
    font-weight: 600;
    font-family: 'Rajdhani', sans-serif;
}

/* Секция навыков */
.skills-section {
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 30px;
    margin: 40px auto;
    max-width: 600px;
    box-shadow: var(--shadow), var(--neon-glow);
}

.skills-section h2 {
    text-align: center;
    margin-bottom: 25px;
    background: var(--secondary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.skills-grid {
    display: grid;
    gap: 15px;
}

.skill-item {
    position: relative;
    padding: 18px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    overflow: hidden;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
}

.skill-item:hover {
    transform: translateX(10px);
    border-color: transparent;
    background: var(--secondary-gradient);
    box-shadow: var(--neon-glow);
}

.skill-progress {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.skill-item:hover .skill-progress {
    left: 100%;
}

/* Забавные факты */
.fun-facts {
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 30px;
    margin: 40px auto;
    max-width: 600px;
    box-shadow: var(--shadow), var(--neon-glow);
}

.fun-facts h2 {
    text-align: center;
    margin-bottom: 25px;
    background: var(--secondary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.facts-carousel {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.fact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 18px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
}

.fact-item:hover {
    transform: translateY(-3px);
    border-color: transparent;
    background: var(--secondary-gradient);
    box-shadow: var(--neon-glow);
}

.fact-item i {
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

/* Плавающие элементы */
.floating-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.float-circle {
    position: absolute;
    border-radius: 50%;
    background: var(--secondary-gradient);
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
}

.circle-1 {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.circle-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
}

.circle-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

/* Размытие фона */
.bg-blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0px);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 999;
}

.bg-blur.active {
    backdrop-filter: blur(10px);
    opacity: 1;
}

/* Адаптивность */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    .profile-card {
        margin: 30px auto;
        padding: 30px 20px;
    }
    
    .username {
        font-size: 2rem;
    }
    
    .bio {
        font-size: 1.1rem;
    }
    
    .stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .theme-toggle {
        top: 10px;
        right: 10px;
    }
    
    .theme-btn {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
}

/* Анимации появления */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.profile-card, .skills-section, .fun-facts {
    animation: fadeInUp 0.6s ease-out;
}

.skills-section {
    animation-delay: 0.2s;
    animation-fill-mode: both;
}

.fun-facts {
    animation-delay: 0.4s;
    animation-fill-mode: both;
      }
