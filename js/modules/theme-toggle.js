const themeToggle = document.getElementById("theme-toggle");
const themeStylesheet = document.getElementById("theme-stylesheet");

themeToggle.addEventListener("click", () => {
    if (
        themeStylesheet.getAttribute("href") === "css/themes/_light-theme.css"
    ) {
        themeStylesheet.setAttribute("href", "css/themes/_dark-theme.css");
    } else {
        themeStylesheet.setAttribute("href", "css/themes/_light-theme.css");
    }
});
