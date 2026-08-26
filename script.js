const cats = [ { name: "Барсик", emoji: "🐱", description: "Любит спать на клавиатуре и мешать хозяину работать." }, { name: "Гордюша", emoji: "😺", description: "Профессиональный специалист по выпрашиванию вкусняшек." }, { name: "Симба", emoji: "🐈", description: "Храбрый кот, который уверен, что весь дом принадлежит ему." }, { name: "Луна", emoji: "🌙", description: "Ночная охотница за шорохами и невидимыми призраками." } ];
const button = document.querySelector("button");
button.addEventListener("click", function () { const randomCat = cats[Math.floor(Math.random() * cats.length)];
alert(
    `${randomCat.emoji} ${randomCat.name}\n\n${randomCat.description}`
);});
