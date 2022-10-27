import { CheesePizza, PepperoniPizza, VeggiePizza } from '../pizza'

export default class SimplePizzaFactory {
    constructor(){}

    createPizza(type) {
        let pizza = null
        
        if (type == "cheese") {
          pizza = new CheesePizza()
        } else if (type == "pepperoni") {
          pizza = new PepperoniPizza()
        } else if (type == "veggie") {
            pizza = new VeggiePizza()
        }

        return pizza
    }
    
}