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
