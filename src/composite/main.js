import { MenuOption } from "./component"
import MenuSection from "./composite"

let op1 = new MenuOption("Côtes levées", "1/2 Côtes levées, sauce BBQ avec frites", 6.9)
let op2 = new MenuOption("Bifteck à l'oriental", "Boeuf haché, oignons, poivrons, sauce", 6.9)

let section = new MenuSection("Vos Classiques")
let subsection = new MenuSection("Extras")

let op3 = new MenuOption("Surplus de sauce", "BBQ, maison ou moutarde", 1.0)
let op4 = new MenuOption("Surplus de frites", "Régulières, épicées", 1.0)


section.add(op1)
section.add(op2)
subsection.add(op3)
subsection.add(op4)
section.add(subsection)

section.print()
