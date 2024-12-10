document.addEventListener("DOMContentLoaded", function (event) {
    let circles = document.querySelectorAll('.circle');

    circles.forEach(function (progress) {
        let degree = 0;
        let targetDegree = parseInt(progress.getAttribute('data-degree')) || 0; // Default to 0 if empty
        let color = progress.getAttribute('data-color');
        let number = progress.querySelector('.number'); // Select the child element

        let interval = setInterval(function () {
            degree += 1;
            if (degree > targetDegree) {
                clearInterval(interval);
                return;
            }
            progress.style.backgroundImage = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + '<span>%</span>';
            number.style.color = color;
        }, 50);
    });
});
