document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 🐱 КОТИКИ
    // =========================

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


    // =========================
    // 🎲 СЛУЧАЙНЫЙ КОТИК
    // =========================

    const randomButton = document.getElementById("randomCat");
    const result = document.getElementById("result");

    // ВАЖНО:
    // Если этой кнопки нет на странице — ничего страшного.
    if (randomButton && result) {

        randomButton.addEventListener("click", function () {

            const randomIndex = Math.floor(Math.random() * cats.length);
            const cat = cats[randomIndex];

            result.textContent =
                "🐾 " +
                cat.name +
                " — " +
                cat.description;
        });

    }


    // =========================
    // 🌙 НОЧНОЙ РЕЖИМ
    // =========================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️";
            } else {
                themeToggle.textContent = "🌙";
            }

        });

    }


    // =========================
    // ❤️ ЛЮБИМЫЕ КОТИКИ
    // =========================

    document.querySelectorAll(".heart").forEach(function (heart) {

        heart.addEventListener("click", function (event) {

            event.stopPropagation();

            heart.classList.toggle("liked");

            if (heart.classList.contains("liked")) {
                heart.textContent = "♥";
            } else {
                heart.textContent = "♡";
            }

        });

    });


    // =========================
    // 🐱 ОКОШКО "ПОДРОБНЕЕ"
    // =========================

    const modal = document.querySelector(".modal");

    if (modal) {

        const modalImage = modal.querySelector(".modal-content img");
        const modalTitle = modal.querySelector(".modal-text h2");
        const modalText = modal.querySelector(".modal-text p");

        // Кнопки "Подробнее"
        document.querySelectorAll(".details-button").forEach(function (button, index) {

            button.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                const card = button.closest(".cat-card");

                // Если карточка существует — берём данные прямо из неё
                if (card) {

                    const image = card.querySelector("img");
                    const title = card.querySelector("h3");
                    const description = card.querySelector("p");

                    if (modalImage && image) {
                        modalImage.src = image.src;
                    }

                    if (modalTitle && title) {
                        modalTitle.textContent = title.textContent;
                    }

                    if (modalText && description) {
                        modalText.textContent = description.textContent;
                    }

                } else {

                    // Запасной вариант — данные из массива cats
                    const cat = cats[index];

                    if (cat) {

                        if (modalImage) {
                            modalImage.src = cat.image;
                        }

                        if (modalTitle) {
                            modalTitle.textContent = cat.name;
                        }

                        if (modalText) {
                            modalText.textContent =
                                cat.fullDescription || cat.description;
                        }

                    }

                }

                modal.classList.add("show");

            });

        });


        // ❌ Закрытие модального окна
        document.querySelectorAll(".close-modal").forEach(function (button) {

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


    // =========================
    // 🐾 СЕКРЕТНАЯ ПАСХАЛКА
    // =========================

    const easterEgg = document.getElementById("easterEgg");
    const closeEasterEgg = document.getElementById("closeEasterEgg");

    const logo =
        document.getElementById("secretLogo") ||
        document.querySelector(".logo");

    let easterClicks = 0;
    let easterTimer = null;

    if (logo && easterEgg) {

        logo.style.cursor = "pointer";

        logo.addEventListener("click", function () {

            easterClicks++;

            clearTimeout(easterTimer);

            easterTimer = setTimeout(function () {
                easterClicks = 0;
            }, 2000);


            if (easterClicks === 7) {

                easterClicks = 0;

                easterEgg.classList.add("show");

            }

        });

    }


    // Закрытие пасхалки
    if (closeEasterEgg && easterEgg) {

        closeEasterEgg.addEventListener("click", function () {
            easterEgg.classList.remove("show");
        });

    }


    // Клик по затемнению пасхалки
    if (easterEgg) {

        easterEgg.addEventListener("click", function (event) {

            if (event.target === easterEgg) {
                easterEgg.classList.remove("show");
            }

        });

    }

});
