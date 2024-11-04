const wordsData = [
    {
        name: "Motherboard",
        translation: "主板",
        transcription: "zhú bǎn",
        image: "motherboard.jpg",
        gifs: ["motherboard1.gif", "motherboard2.gif"]
    },
    {
        name: "Monitor",
        translation: "显示器",
        transcription: "xiǎn shì qì",
        image: "monitor.jpg",
        gifs: ["monitor1.gif", "monitor2.gif","monitor3.gif"]
    },
    {
        name: "Mouse",
        translation: "鼠标 ",
        transcription: "shǔbiāo",
        image: "mouse.jpg",
        gifs: ["mouse1.gif", "mouse2.gif"]
    },
    {
        name: "Case",
        translation: "机箱",
        transcription: "jīxiāng",
        image: "case.jpg",
        gifs: ["case1.gif", "case2.gif"]
    },
    {
        name: "Keyboard",
        translation: "键盘",
        transcription: "jiànpán",
        image: "keyboard.jpg",
        gifs: ["keyboard1.gif", "keyboard2.gif"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const word = document.querySelector(".word");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            document.querySelector(".card-container").style.display = "none";
            word.style.display = "block";

            const name = card.getAttribute("data-name");
            const wordInfo = wordsData.find(word => word.name === name);

            if (wordInfo) {
                word.innerHTML = `
                    <div class="close-container">
                        <button class="close-button">Назад</button>
                    </div>
                    <h1 class="title-of-word">${wordInfo.name}</h1>
                    <div class="section-container">
                        <div class="section">
                            <div class="section-content">
                                <div class="section-image">
                                    <img src="pictures/${wordInfo.image}" alt="${wordInfo.name}">
                                </div>
                                <div class="section-title">${wordInfo.translation}</div>
                                <div class="section-transcription">${wordInfo.transcription}</div>
                                <div class="gif-container">
                                    ${wordInfo.gifs.map(gif => `
                                        <div class="section-gif">
                                            <img src="videos/${gif}" alt="${wordInfo.name} GIF" class="gif-image">
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Обработчик для кнопки "Назад"
                const closeButton = document.querySelector(".close-button");
                closeButton.addEventListener("click", () => {
                    word.style.display = "none";
                    document.querySelector(".card-container").style.display = "flex"; // Возвращаем карточки
                });
            }
        });
    });
});




