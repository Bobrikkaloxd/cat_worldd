const cats = [
    {
        name: "Гордюша 🩶",
        image: "gordyusha.jpg",
        description: "Главный пушистый житель Котополиса. Любит уют, внимание и хорошие места для сна."
    },
    {
        name: "Симба 🧡",
        image: "simba.jpg",
        description: "Рыжий непоседа и любитель приключений. Особенный котик, который навсегда останется частью нашей истории."
    },
    {
        name: "Филя 🖤",
        image: "filia.jpg",
        description: "Немного загадочный, очень красивый и внимательный кот с невероятными глазами."
    }
];


// 🎲 СЛУЧАЙНЫЙ КОТИК

const randomButton = document.getElementById("randomCat");
const result = document.getElementById("result");

randomButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * cats.length);

    result.textContent =
        "🐾 " +
        cats[randomIndex].name +
        " — " +
        cats[randomIndex].description;
});


// 🐱 ОКОШКО С ИНФОРМАЦИЕЙ

const modal = document.getElementById("catModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        const cat = cats[index];

        modalImage.src = cat.image;
        modalImage.alt = cat.name;

        modalName.textContent = cat.name;
        modalDescription.textContent = cat.description;

        modal.classList.add("show");
    });

});


// ❌ ЗАКРЫТЬ ОКОШКО

closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
});


// 🌸 КЛИК ПО ЗАТЕМНЕНИЮ

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


// ❤️ ЛЮБИМЫЕ КОТИКИ

const hearts = document.querySelectorAll(".heart");

hearts.forEach(function (heart) {

    heart.addEventListener("click", function () {

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {
            heart.textContent = "♥";
        } else {
            heart.textContent = "♡";
        }

    });

});


// 🌙 НОЧНОЙ РЕЖИМ

const themeToggle = document.getElementById("themeToggle");

// Начальное состояние
document.body.classList.remove("dark-mode");
themeToggle.textContent = "🌙";


// Переключение темы
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});

// 🐾 СЕКРЕТНАЯ ПАСХАЛКА
const easterEgg = document.getElementById("easterEgg");
const closeEasterEgg = document.getElementById("closeEasterEgg");

let easterClicks = 0;

const logo = document.querySelector(".logo");

if (logo && easterEgg) {
    logo.addEventListener("click", function () {
        easterClicks++;

        if (easterClicks >= 7) {
            easterEgg.classList.add("show");
            easterClicks = 0;
        }
    });
}

if (closeEasterEgg && easterEgg) {
    closeEasterEgg.addEventListener("click", function () {
        easterEgg.classList.remove("show");
    });
}
