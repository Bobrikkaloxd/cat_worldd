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
    },
    {
        name: "Мими 🖤",
        image: "mimi.jpg",
        description: "Кошечка Ксюши Кобы и соседка Завертина. Мими — девон-рекс, очень любит внимание и быть рядом с Ксюшей. 🐾❤️",
        fullDescription: "Мими — кошечка Ксюши Кобы и соседка Завертина. Она живёт вместе с ними и уже стала настоящей любимицей аудитории. Мими — девон-рекс, любит внимание и часто бывает рядом с Ксюшей и Ильей даже во время стримов. 🐾❤️"
    },
    {
        name: "Нагетс 🧡",
        image: "nagets.jpg",
        description: "Любимый котик стримера Макса Stint. Настоящий рыжий красавчик и важная часть его домашней жизни.",
        fullDescription: "Нагетс — котик стримера Макса Stint. Рыжий, любопытный и очень обаятельный кот, который стал любимцем его аудитории. 🧡"
    },
    {
        name: "Соня 🩷",
        image: "sonya.jpg",
        description: "Милая кошечка мамы T2x2 и настоящая любимица. 🐱💗",
        fullDescription: "Соня — кошечка мамы T2x2. Она давно знакома аудитории Антона и стала одной из любимых героинь его рассказов о домашней жизни. 🩷\n\nОчень милая и любимая кошечка, о которой заботятся всей семьёй. 🐾"
    },
    {
        name: "Миса 🖤",
        image: "misa.jpg",
        description: "Чёрная вислоухая кошечка стримера Дрейка. Очень спокойная и любопытная любимица. 🖤",
        fullDescription: "Миса — чёрная шотландская вислоухая кошечка стримера Дрейка (drakeoffc). Она очень спокойная, любопытная и сильно привязана к своему хозяину. 🖤\n\nНа стримах Миса иногда появляется в кадре и, конечно же, успела стать любимицей его аудитории. 🐈‍⬛"
    },
    {
        name: "Маруся 🩷",
        image: "marusya.jpg",
        description: "Ленивая кошечка, предпочитающая лежать и ничего не делать. Не любит незнакомцев в доме и тех, кто мешает её комфорту и сну.",
        fullDescription: "Маруся — ленивая кошечка, предпочитающая лежать и ничего не делать. Она не любит незнакомцев в доме и тех, кто мешает её комфорту и сну. 🩷"
}
];


// ========================================
// 🎲 СЛУЧАЙНЫЙ КОТИК
// ========================================

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


// ========================================
// 🐱 ОКОШКО «ПОДРОБНЕЕ»
// ========================================

const modal = document.getElementById("catModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        if (!modal) return;

        const cat = cats[index];

        if (modalImage) {
            modalImage.src = cat.image;
            modalImage.alt = cat.name;
        }

        if (modalName) {
            modalName.textContent = cat.name;
        }

        if (modalDescription) {
            modalDescription.textContent = cat.fullDescription;
        }

        modal.classList.add("show");
    });

});


// ========================================
// ❌ ЗАКРЫТИЕ ОКОШКА
// ========================================

if (closeModal && modal) {

    closeModal.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.classList.remove("show");
        }

    });
}


// ========================================
// ❤️ СЕРДЕЧКИ
// ========================================

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


// ========================================
// 🌙 ТЕМА
// ========================================

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


// ========================================
// 🐾 СЕКРЕТНАЯ ПАСХАЛКА
// ========================================

const secretLogo = document.getElementById("secretLogo");
const easterEgg = document.getElementById("easterEgg");
const closeEasterEgg = document.getElementById("closeEasterEgg");

let easterClicks = 0;
let easterTimer = null;

if (secretLogo && easterEgg) {

    secretLogo.style.cursor = "pointer";

    secretLogo.addEventListener("click", function () {

        easterClicks++;

        clearTimeout(easterTimer);

        easterTimer = setTimeout(function () {
            easterClicks = 0;
        }, 2000);

        if (easterClicks === 7) {

            easterClicks = 0;
            clearTimeout(easterTimer);

            easterEgg.classList.add("show");
        }

    });
}


// ========================================
// ❌ ЗАКРЫТЬ ПАСХАЛКУ
// ========================================

if (closeEasterEgg && easterEgg) {

    closeEasterEgg.addEventListener("click", function () {
        easterEgg.classList.remove("show");
    });

    easterEgg.addEventListener("click", function (event) {

        if (event.target === easterEgg) {
            easterEgg.classList.remove("show");
        }

    });
}
