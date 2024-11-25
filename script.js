let colorInterval;

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("input[type='button']");
    const resultField = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.value === "=") {
                resultField.value = "dumbass";
                startColorChanging();
            } else if (button.value === "C") {
                resultField.value = "";
                stopColorChanging();
                document.body.style.backgroundColor = ""; 
                document.getElementById("result").style.color = "";
            } else {
                resultField.value += button.value;
            }
        });
    });
});

function startColorChanging() {
    colorInterval = setInterval(changeColors, 200);
}

function stopColorChanging() {
    clearInterval(colorInterval);
}

function changeColors() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("result").style.color = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
