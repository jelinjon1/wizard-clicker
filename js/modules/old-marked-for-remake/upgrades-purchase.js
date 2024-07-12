let upgradesElement = document.getElementById("upgrades");

let upgradesData;

fetch("../../res/upgrades.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        upgradesData = data;
        processUpgrades();
    })
    .catch((error) => console.error("Unable to fetch data:", error));

function processUpgrades() {
    if (upgradesData) {
        const upgradesList = upgradesData["upgrades"];
        for (let i = 0; i < upgradesList.length; i++) {
            const upgradeObject = upgradesList[i];

            // base upgrade wrapper
            const upgradeElement = document.createElement("div");
            upgradeElement.classList.add("upgrade");

            // upgrade name label
            const nameDiv = document.createElement("div");
            nameDiv.classList.add("name");
            const nameNode = document.createTextNode(upgradeObject.name);
            nameDiv.appendChild(nameNode);
            upgradeElement.appendChild(nameDiv);

            // upgrade cost label
            const costDiv = document.createElement("div");
            costDiv.classList.add("cost");
            const costNode = document.createTextNode(upgradeObject.cost);
            costDiv.appendChild(costNode);
            upgradeElement.appendChild(costDiv);

            upgradesElement.appendChild(upgradeElement);
        }

        console.log("Processing upgrades:", upgradesData);
    } else {
        console.log("Data is not yet available.");
    }
}
