import Pizzeria from "./pizzeria"
import SimplePizzaFactory from "./simplePizzaFactory"

let simplePizzaFactory = new SimplePizzaFactory()
let pizzeria = new Pizzeria(simplePizzaFactory)

pizzeria.orderPizza("cheese")
pizzeria.orderPizza("pepperoni")
pizzeria.orderPizza("veggie")


