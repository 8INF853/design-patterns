export default class Pizzeria {   
    constructor(factory) {
      this.factory = factory
    }
    
    orderPizza(type) {
      let pizza = this.factory.createPizza(type)
      console.log("Created " + pizza.description)

      pizza.prepare()
      pizza.bake()
      pizza.cut()
      pizza.pack()
      
      return pizza
    }
  }