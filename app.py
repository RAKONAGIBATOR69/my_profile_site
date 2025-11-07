from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    profile_data = {
        'name': 'wizonow',
        'telegram_url': 'https://t.me/wizonow',
        'avatar_url': 'https://ibb.co/ycLSBthj',
        'bio': 'Разработчик | Битмейкер | Настоящий игрок |',
        'skills': ['Python', 'Beatmaking', 'Cooking this shit'],
        'fun_facts': [
            'Могу сделать бит закрытыми глазами',
            'Превращаю сердца в лёд',
            'Творческий двигатель',
            'Я не люблю пиво'
        ]
    }
    return render_template('index.html', **profile_data)

if __name__ == '__main__':
    app.run(debug=True)
