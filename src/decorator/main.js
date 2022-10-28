import { Beverage, Espresso } from "./component.mjs"
import { ChocolateDecorator, MilkDecorator } from "./decorator.mjs"


let b = new Beverage("Teste")
console.log(b.getDescription())

let expresso = new Espresso("Expresso")
console.log(expresso.getDescription())
console.log("Price: $ " + expresso.cost())

let withChocolate = new ChocolateDecorator(expresso)
console.log(withChocolate.getDescription())
console.log("Price: $ " + withChocolate.cost())

let withMilk = new MilkDecorator(withChocolate)
console.log(withMilk.getDescription())
console.log("Price: $ " + withMilk.cost())
