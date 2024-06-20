document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const productionElement = document.getElementById("production");

    let counterValue = 0;

    function updateCounter() {
        const baseIncrement = 1;
        const additionIncrement = 0;
        const additionModifier = 1;
        const total = (baseIncrement + additionIncrement) * additionModifier;

        counterValue += total;
        counterElement.textContent = counterValue;
        productionElement.textContent = total + " /s";
    }

    setInterval(updateCounter, 1000);
});
