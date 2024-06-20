const counterElement = document.getElementById("counter");
const productionElement = document.getElementById("production");

let counterValue = 0;
let additionIncrement = 0;
const baseIncrement = 0;
const additionModifier = 1;

export function updateAdditionIncrement(amount) {
    additionIncrement = amount;

    updateProductionDisplay(formatNum(amount));
}

function updateTotalCounter() {
    const total = (baseIncrement + additionIncrement) * additionModifier;

    counterValue += total;
    counterElement.textContent = formatNum(counterValue);
}

function updateProductionDisplay(total) {
    productionElement.textContent = total + " /s";
}

function formatNum(num) {
    if (num >= 10000) {
        return num.toExponential(2); // format to scientific notation with 2 decimal places
    }
    return num;
}

// loop total counter updates
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateTotalCounter, 1000);
});
