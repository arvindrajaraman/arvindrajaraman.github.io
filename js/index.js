AOS.init()

const app = document.getElementById('hello')

let typewriter = new Typewriter(app, {
  loop: true
})

const mornings = ['Good morning!', 'Bonjour!', '¡Buenos días!', 'Доброе утро!', '早上好!', 'शुभ प्रभात!', 'காலை வணக்கம்!', 'おはようございます!']
const afternoons = ['Good afternoon!', 'Bonne après-midi!', '¡Buenas tardes!', 'Добрый день!', '下午好!', 'नमस्कार!', 'மதிய வணக்கம்!', 'こんにちは!']
const evenings = ['Good evening!', 'Bonsoir!', '¡Buenas noches!', 'Добрый вечер!', '晚上好!', 'सुसंध्या!', 'மாலை வணக்கம்!', 'こんばんは!']
const nights = ['Good night!', 'Bonne nuit!', '¡Buenas noches!', 'Спокойной ночи!', '晚安!', 'शुभ रात्रि!', 'இனிய இரவு!', 'おやすみ!']

let messages;
const hour = new Date().getHours()

if (hour >= 6 && hour <= 11) {
  messages = mornings;
}
else if (hour >= 12 && hour <= 16) {
  messages = afternoons;
}
else if (hour >= 17 && hour <= 20) {
  messages = evenings;
}
else {
  messages = nights;
}

for (let message of messages) {
  typewriter = typewriter.typeString(message)
    .pauseFor(1500)
    .deleteAll()
}
typewriter.start()
