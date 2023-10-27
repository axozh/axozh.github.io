// JavaScript to toggle the "scroll" class on the button
window.addEventListener("scroll", function() {
    var button = document.querySelector(".dark-mode-button");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        button.classList.add("scroll");
    } else {
        button.classList.remove("scroll");
    }
});

// JavaScript to toggle dark mode
function toggleDarkMode() {
    var body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}
