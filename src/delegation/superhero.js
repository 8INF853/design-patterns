export default class SuperHero {
    constructor(superPower) {
        this.superPower = superPower
    }

    useSuperPower(){
        this.superPower.execute()
    }
}