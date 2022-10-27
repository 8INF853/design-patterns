import SuperHero from "./superhero"
import { SuperPower, Levitation } from "./superpower"

let superPower = new SuperPower()
let superHero = new SuperHero(superPower)

superHero.useSuperPower()

superHero.superPower = new Levitation()
superHero.useSuperPower()