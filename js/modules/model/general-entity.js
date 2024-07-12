export class GeneralEntity {
    name;
    description;
    cost;
    unlocked;

    setName(name) {
        this.name = name;
    }
    setDescription(description) {
        this.description = description;
    }
    setCost(cost) {
        this.cost = cost;
    }
    setUnlocked(unlocked) {
        this.unlocked = unlocked;
    }
}
