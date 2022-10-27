export default class MySystem {
    constructor(component) {
        this.component = component
    }

    callSomething() {
        this.component.doSomething()
    }
}