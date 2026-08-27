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
    {
    name: "Завертино 🐱",
    image: "zavertin.jpg",
    description: "Любопытный и замечательный котик Котополиса. Здесь обязательно появится его история! 💕"
},
{
    name: "Кася 🐱",
    image: "kasya.jpg",
    description: "Маленькая любительница поспать, вкусно поесть и понюхать кошачью мяту. 🌿"
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
// 🐾 СЕКРЕТНАЯ ПАСХАЛКА
(function () {
    const logo = document.getElementById("secretLogo");

    if (!logo) return;

    let clicks = 0;
    let timer;

    logo.style.cursor = "pointer";

    logo.addEventListener("click", function () {
        clicks++;

        clearTimeout(timer);

        // Если между кликами прошло слишком много времени — начинаем сначала
        timer = setTimeout(function () {
            clicks = 0;
        }, 2000);

        if (clicks === 7) {
            clicks = 0;
            showSecretEasterEgg();
        }
    });

    function showSecretEasterEgg() {
        // Если пасхалка уже открыта — ничего не делаем
        if (document.getElementById("secretEasterEgg")) return;

        const overlay = document.createElement("div");
        overlay.id = "secretEasterEgg";

        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: rgba(20, 10, 35, 0.88);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
            box-sizing: border-box;
        `;

        overlay.innerHTML = `
            <div style="
                position: relative;
                max-width: 850px;
                width: 100%;
                background: #fff;
                border-radius: 28px;
                padding: 18px;
                box-sizing: border-box;
                text-align: center;
                box-shadow: 0 20px 80px rgba(0,0,0,0.5);
            ">
                <button id="closeSecretEasterEgg" style="
                    position: absolute;
                    right: 14px;
                    top: 12px;
                    width: 38px;
                    height: 38px;
                    border: none;
                    border-radius: 50%;
                    background: #9b63e6;
                    color: white;
                    font-size: 22px;
                    cursor: pointer;
                    z-index: 2;
                ">×</button>

                <div style="
                    font-size: 22px;
                    font-weight: bold;
                    color: #8b55d9;
                    margin: 8px 45px 14px;
                ">
                    ✨ Секретная пасхалка ✨
                </div>

                <img
                    src="easter-egg.jpg"
                    alt="Секретная пасхалка"
                    style="
                        display: block;
                        width: 100%;
                        max-height: 70vh;
                        object-fit: contain;
                        border-radius: 20px;
                    "
                >

                <div style="
                    margin-top: 12px;
                    font-size: 16px;
                    color: #555;
                ">
                    🐾 Ты нашёл секрет Котополиса! ❤️
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        document
            .getElementById("closeSecretEasterEgg")
            .addEventListener("click", function () {
                overlay.remove();
            });

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                overlay.remove();
            }
        });
    }
})();
