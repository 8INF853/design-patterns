export default class Pizza {
    constructor(description) {
        this.description = description
    }

    prepare() {
        console.log('Preparing pizza...')
    }

    bake() {
        console.log('Baking pizza...')
    }

    cut() {
        console.log('Cutting pizza...')
    }

    pack() {
        console.log('Packing pizza...')
    }
}

export class CheesePizza extends Pizza {
    constructor() {
        super("Cheese Pizza")
    }
}

export class PepperoniPizza extends Pizza {
    constructor() {
        super("Pepperoni Pizza")
    }
}

export class VeggiePizza extends Pizza {
    constructor() {
        super("Veggie Pizza")
    }
}