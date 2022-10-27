export class Beverage {
    constructor(description) {
        if (description) {
            this.description = description
        }
    }

    getDescription() {
        return this.description
    }

    cost() {
        throw new Error('Implementation required');
    }
}

export class Espresso extends Beverage {
    constructor() {
        super("Espresso Coffee")
    }

    cost() {
        return 1.0
    }
}