let numbers = document.querySelector(".binaryNumber");
let numString = numbers.textContent;
let splitNum = numString.split("");

numbers.textContent = "";
for (let i = 0; i < splitNum.length; i++) {
    numbers.innerHTML += "<span>"+splitNum[i]+"</span>"
}