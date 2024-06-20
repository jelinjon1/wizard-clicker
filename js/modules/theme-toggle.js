const themeToggle = document.getElementById("theme-toggle");
const themeStylesheet = document.getElementById("theme-stylesheet");

themeToggle.addEventListener("click", () => {
    if (
        themeStylesheet.getAttribute("href") === "./css/themes/light-theme.css"
    ) {
        themeStylesheet.setAttribute("href", "./css/themes/dark-theme.css");
    } else {
        themeStylesheet.setAttribute("href", "./css/themes/light-theme.css");
    }
});
