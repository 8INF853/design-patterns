export default class Robot {
  constructor() {}

  buildComponent(amount) {
    this.initializeConfiguration()
    this.collectParts(amount)
    this.mountParts()
    this.test()
    this.reset()
  }

  initializeConfiguration() {
    console.log("Initializing configuration...")
  }

  collectParts(amount) {
    throw new Error('Implementation required');
  }

  mountParts() {
    throw new Error('Implementation required');
  }

  test() {
    throw new Error('Implementation required');
  }

  reset() {
    console.log("Reseting...")
  }
}