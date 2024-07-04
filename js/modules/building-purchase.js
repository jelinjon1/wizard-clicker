import { updateAdditionIncrement } from "./iterator-loop.js";

let buildingsList = document.getElementsByClassName("building");

const buldingTypeDefinition = {
    types: [
        { name: "Mana Gem", bonus: 0.25 },
        { name: "Grimoire", bonus: 2.5 },
        { name: "Spell fountain", bonus: 14 },
        { name: "Enchanted tree", bonus: 126 },
        { name: "Alchemy Desk", bonus: 1468 },
        { name: "Circle Of Power", bonus: 16560 },
        { name: "Dimensional Rift", bonus: 142340 },
        { name: "The Nexus", bonus: 1298570 },
    ],
};

class Buildings {
    constructor(buildingsList) {
        this.buildings = buildingsList.map(
            (type) => new Building(type.name, 0, type.bonus)
        );
    }

    // Method to get the total bonus of all buildings
    getTotalBonus() {
        return this.buildings.reduce(
            (total, building) => total + building.getTotal(),
            0
        );
    }

    buyAmount(amount) {
        this.amount += amount;
    }
}

class Building {
    constructor(name, amount, bonus) {
        this.name = name; //displayed name
        this.amount = amount; //current amount of builldings os this type
        this.bonus = bonus; //the bonus provided by this type of building
    }

    getTotal() {
        //get the total bonus amout provided by this type of bulding
        return this.amount * this.bonus;
    }
}

// Create a Buildings instance from the list of types
const buildingsInstance = new Buildings(buldingTypeDefinition.types);

// Log the buildings instance to see the result
console.log(buildingsInstance);

// Example usage of getTotalBonus method
console.log("Total Bonus: ", buildingsInstance.getTotalBonus());

for (let index = 0; index < buildingsList.length; index++) {
    buildingsList[index].addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");

        buildingsInstance.buildings[index - 1].amount++;
        console.log(buildingsInstance);

        updateAdditionIncrement(buildingsInstance.getTotalBonus());
    });
}
