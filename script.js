const cats = [
    "🐱 Сегодня твой котик — Гордюша! 🩶",
    "🧡 Сегодня твой котик — Симба!",
    "🖤 Сегодня твой котик — Филя!"
];

const button = document.getElementById("randomCat");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * cats.length);

    result.textContent = cats[randomIndex];

});
