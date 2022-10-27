import {Beverage} from "./component"

export class IngredientDecorator extends Beverage {
    constructor(beverage) {
        super()
        this.beverage = beverage
    }

    getDescription() {
        throw new Error('Implementation required');
    }
}

export class ChocolateDecorator extends IngredientDecorator {
    constructor(beverage) {
        super(beverage)
    }

    getDescription() {
        return this.beverage.getDescription() 
                + ", with Chocolate"
    }

    cost() {
        return 0.5 + this.beverage.cost()
    }
}

export class MilkDecorator extends IngredientDecorator {
    constructor(beverage) {
        super(beverage)
    }

    getDescription() {
        return this.beverage.getDescription() 
                + ", with Milk"
    }

    cost() {
        return 0.2 + this.beverage.cost()
    }
}