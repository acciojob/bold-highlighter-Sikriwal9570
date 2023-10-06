// script.js
document.addEventListener("DOMContentLoaded", function () {
    const highlightLink = document.getElementById("highlightLink");
    const paragraph = document.querySelector("p");

    // Function to highlight bold words
    function highlight() {
        const boldElements = paragraph.querySelectorAll("strong");
        for (const boldElement of boldElements) {
            boldElement.classList.add("bold-highlight");
        }
    }

    // Function to return to normal text color
    function return_normal() {
        const highlightedElements = paragraph.querySelectorAll(".bold-highlight");
        for (const highlightedElement of highlightedElements) {
            highlightedElement.classList.remove("bold-highlight");
        }
    }

    // Add mouseover and mouseout event listeners to the link
    highlightLink.addEventListener("mouseover", highlight);
    highlightLink.addEventListener("mouseout", return_normal);
});
