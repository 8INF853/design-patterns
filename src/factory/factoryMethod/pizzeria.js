import { QuebecPepperoniPizza, BoivinCheesePizza, QuebecVeggiePizza } from './quebecPizza'
import { CoalhoCheesePizza, BrazilPepperoniPizza, BrazilVeggiePizza } from './brazilPizza'

export default class Pizzeria {   
    constructor() {
    }
    
    orderPizza(type) {
      let pizza = this.createPizza(type)
      console.log("Created " + pizza.description)

      pizza.prepare()
      pizza.bake()
      pizza.cut()
      pizza.pack()
      
      return pizza
    }

    createPizza(type) {}
  }

  export class QuebecPizzeria extends Pizzeria {   
    constructor() {
        super()
    }
    
    createPizza(type) {
        let pizza = null
        
        if (type == "cheese") {
            pizza = new BoivinCheesePizza();
        } else if (type == "pepperoni") {
            pizza = new QuebecPepperoniPizza();
        } else if (type == "veggie") {
            pizza = new QuebecVeggiePizza();
        }
        return pizza
    }
}

export class BrazilPizzeria extends Pizzeria {  
    constructor() {
        super()
    }
    
    createPizza(type) {
        let pizza = null
        if (type == "cheese") {
            pizza = new CoalhoCheesePizza();
        } else if (type == "pepperoni") {
            pizza = new BrazilPepperoniPizza();
        } else if (type == "veggie") {
            pizza = new BrazilVeggiePizza();
        }
        return pizza    
    }
}