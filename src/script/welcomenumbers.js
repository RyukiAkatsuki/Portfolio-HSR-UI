document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelector(".binaryNumber");
    const numString = numbers.textContent.trim();
    const splitNum = numString.split("");

    const fragment = document.createDocumentFragment();
    splitNum.forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        fragment.appendChild(span);
    });
    numbers.textContent = ""; 
    numbers.appendChild(fragment);

    const spans = document.querySelectorAll(".binaryNumber span");
    function randomShine() {
        const randomIndex = Math.floor(Math.random() * spans.length);
        const span = spans[randomIndex];
        span.classList.add("shine");

        setTimeout(() => {
            span.classList.remove("shine");
        }, 1000);
    }
    setInterval(randomShine, 500); 


    const textArray = ["Bienvenue", "Welcome", "Bienvenidos", "欢迎光临", "ようこそ"];
    const typingElement = document.querySelector(".welcome");
    let currentIndex = 0;

    function typeText() {
        typingElement.textContent = textArray[currentIndex];
        typingElement.style.animation = "none";
        void typingElement.offsetWidth;
        typingElement.style.animation = "typing 2s steps(20) forwards, blink 0.5s step-end infinite alternate";

        currentIndex = (currentIndex + 1) % textArray.length;
    }
    typeText();
    setInterval(typeText, 10000);

    
    const portfolioArray = ["Vers le Portfolio", "To the Portfolio", "Al Portafolio", "进入我的作品集", "ポートフォリオへ"];
    const portfolioElement = document.querySelector(".redirectPortfolio");
    let portfolioIndex = 0;

    function typePortfolio() {
        portfolioElement.textContent = portfolioArray[portfolioIndex];
        portfolioElement.style.animation = "none";
        void portfolioElement.offsetWidth; 
        portfolioElement.style.animation = "typing 2s steps(20) forwards, blink 0.5s step-end infinite alternate";

        portfolioIndex = (portfolioIndex + 1) % portfolioArray.length;
    }
    typePortfolio();
    setInterval(typePortfolio, 10000);
});
