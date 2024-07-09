class Production {
    constructor() {
        this.innerCounter = 0;
        this.passiveProd = 0; // pasasive production per second
        this.passiveProdMultiplier = 1; // inceases passive production (passive prod * multiplier)
        this.passiveProdAddition = 0; // increases passive production (passive prod + addition)
        this.totalPassiveProd = 0; // calculated as (passive prod + addition) * multiplier

        this.clickProd = 1;
        this.clickProdMultiplier = 1;
        this.clickProdAddition = 0;
        this.totalClickProd = 0;

        this.counterElement = document.getElementById("counter");
        this.ballElement = document.getElementById("crystal-ball");

        this.ballElement.addEventListener("click", (e) => {
            this.updateTotalClickProduction();
            this.incrementProduction(this.totalClickProd);
            console.log("click on ball has happened");
        });

        document.addEventListener("DOMContentLoaded", function () {
            setInterval(this.incrementPassiveProduction, 1000);
        });
    }

    updatePassiveProdAddition(amount) {
        this.passiveProdAddition += amount;
    }

    updatePassiveProdMultiplier(amount) {
        this.passiveProdMultiplier += amount;
    }

    updateTotalPassiveProduction() {
        this.totalPassiveProd =
            (this.passiveProd + this.passiveProdAddition) *
            this.passiveProdMultiplier;
    }

    updateClickProdAddition(amount) {
        this.clickProdAddition += amount;
    }

    updateClickProdMultiplier(amount) {
        this.passiveProdAddition += amount;
    }

    updateTotalClickProduction() {
        this.totalClickProd =
            (this.clickProd + this.clickProdAddition) *
            this.clickProdMultiplier;
    }

    updateCounterElement() {
        this.counterElement.textContent = this.innerCounter;
    }

    // use negative for purchases of items
    updateInnerCounter(increment) {
        this.innerCounter += increment;
    }

    incrementProduction(amount) {
        this.updateInnerCounter(amount);
        this.updateCounterElement();
    }
}

function incrementPassiveProduction() {
    console.log("Dsada");
    this.updateTotalPassiveProduction();
    this.updateInnerCounter(this.totalPassiveProd);
    this.updateCounterElement();
}

const prodController = new Production();
