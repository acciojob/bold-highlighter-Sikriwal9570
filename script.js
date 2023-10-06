// script.js
function highlight() {
    const strongElements = document.querySelectorAll("strong");
    for (const strongElement of strongElements) {
        strongElement.style.color = "green";
    }
}

function return_normal() {
    const strongElements = document.querySelectorAll("strong");
    for (const strongElement of strongElements) {
        strongElement.style.color = "initial";
    }
}
