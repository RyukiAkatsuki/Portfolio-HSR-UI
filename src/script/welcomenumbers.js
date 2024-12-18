let numbers = document.querySelector(".binaryNumber");
let numString = numbers.textContent;
let splitNum = numString.split("");

numbers.textContent = "";
for (let i = 0; i < splitNum.length; i++) {
    numbers.innerHTML += "<span>" + splitNum[i] + "</span>";
}

function randomShine() {
    let spans = document.querySelectorAll(".binaryNumber span");
    let randomIndex = Math.floor(Math.random() * spans.length); 

    spans[randomIndex].classList.add("shine"); 


    setTimeout(() => {
        spans[randomIndex].classList.remove("shine");
    }, 1000); 
}

setInterval(randomShine, 200);

const textArray = ["Bienvenue", "Welcome", "Bienvenidos", "欢迎光临", "ようこそ"];
const typingElement = document.querySelector('.welcome');
let currentIndex = 0;

function typeText() {
    typingElement.textContent = textArray[currentIndex]; 
    typingElement.style.animation = "none"; 
    void typingElement.offsetWidth; 
    typingElement.style.animation = "typing 2s steps(20) forwards, blink 0.5s step-end infinite alternate";

    currentIndex = (currentIndex + 1) % textArray.length;
}

typeText(); 
setInterval(typeText, 5000);

