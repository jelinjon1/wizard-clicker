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
            this.updateCounterElement(this.totalClickProd);
            console.log("jello bro");
        });
    }

    updateTotalPassiveProduction() {
        this.totalPassiveProd =
            (this.passiveProd + this.passiveProdAddition) *
            this.passiveProdMultiplier;
    }

    updateTotalClickProduction() {
        this.totalClickProd =
            (this.clickProd + this.clickProdAddition) *
            this.clickProdMultiplier;
    }

    updateCounterElement(increment) {
        this.counterElement.textContent =
            parseInt(this.counterElement.textContent) + increment;
    }
}

const prodController = new Production();
