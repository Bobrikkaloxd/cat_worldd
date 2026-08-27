// ===============================
// 🐱 КОТОПОЛИС — SCRIPT.JS
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    
const cats = [
    {
        name: "Гордюша 🤍",
        image: "gordyusha.jpg",
        description: "Главный пушистый житель Котополиса. Любит уют, внимание и хорошие места для сна.",
        fullDescription: "Гордюша — главный пушистый житель Котополиса. Любит уют, внимание и хорошие места для сна. Изящный белый шотландец, добрый и никогда не кусается."
    },
    {
        name: "Симба 🧡",
        image: "simba.jpg",
        description: "Рыжий непоседа и любитель приключений. Особенный котик, который навсегда останется частью нашей истории.",
        fullDescription: "Симба — настоящий рыжий непоседа и любитель приключений. Особенный котик, который навсегда останется частью нашей истории. Любил много играть, мурчать и уютные местечки."
    },
    {
        name: "Филя 🖤",
        image: "filia.jpg",
        description: "Немного загадочный, очень красивый и внимательный кот с невероятными глазами.",
        fullDescription: "Филя — немного загадочный, очень красивый и внимательный кот с невероятными глазами. Громко мяукает и любит своего хозяина Славу!"
    },
    {
        name: "Завертин 🐱",
        image: "zavertin.jpg",
        description: "Кот Ильи Мазелова и настоящий любимец его аудитории. ❤️",
        fullDescription: "Завертин — кот Ильи Мазелова и настоящий любимец его аудитории. ❤️\n\nЗавертину исполнилось 3 года. А ещё известно, что он иногда устаёт и предпочитает просто забраться на ручки и уснуть. 💤"
    },
    {
        name: "Кася 🐱",
        image: "kasya.jpg",
        description: "Маленькая любительница поспать, вкусно поесть и понюхать кошачью мяту. 🌿",
        fullDescription: "Кася попала в новый дом совсем маленькой. Её будущая хозяйка встретила её у женщины, которая отдавала котят вместе с переноской.\n\nА ещё Кася очень любит внимание: иногда ходит за хозяйкой хвостиком, чтобы её погладили или взяли на руки. ❤️\n\nИзначально её звали Кассандра, но со временем имя превратилось в «Кася»."
    }
];


// ===============================
// 🎲 СЛУЧАЙНЫЙ КОТИК
// ===============================

const randomButton = document.getElementById("randomCat");
const result = document.getElementById("result");

if (randomButton && result) {
    randomButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * cats.length);
        const cat = cats[randomIndex];

        result.textContent =
            "🐾 " + cat.name + " — " + cat.description;
    });
}


// ===============================
// 🐱 ОКОШКО «ПОДРОБНЕЕ»
// ===============================

const modal = document.getElementById("catModal");

if (modal) {

    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalDescription = document.getElementById("modalDescription");

    const detailsButtons = document.querySelectorAll(".details-button");

    detailsButtons.forEach(function (button, index) {

        button.addEventListener("click", function () {

            const cat = cats[index];

            if (!cat) return;

            if (modalImage) {
                modalImage.src = cat.image;
                modalImage.alt = cat.name;
            }

            if (modalName) {
                modalName.textContent = cat.name;
            }

            if (modalDescription) {
                modalDescription.textContent =
                    cat.fullDescription || cat.description;
            }

            modal.classList.add("show");
        });

    });


    // ❌ Закрытие модального окна

    const closeButtons = modal.querySelectorAll(
        "#closeModal, .close-modal"
    );

    closeButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            modal.classList.remove("show");
        });

    });


    // Клик по затемнению

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.classList.remove("show");
        }

    });

}


// ===============================
// ❤️ ЛЮБИМЫЕ КОТИКИ
// ===============================

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


// ===============================
// 🌙 НОЧНОЙ РЕЖИМ
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.textContent = "🌙";

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

    });

}


// ===============================
// 🐾 СЕКРЕТНАЯ ПАСХАЛКА
// ===============================

const easterEgg = document.getElementById("easterEgg");
const closeEasterEgg = document.getElementById("closeEasterEgg");
const logo = document.querySelector(".logo");

let easterClicks = 0;

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

if (easterEgg) {

    easterEgg.addEventListener("click", function (event) {

        if (event.target === easterEgg) {
            easterEgg.classList.remove("show");
        }

    });

}
    
});
