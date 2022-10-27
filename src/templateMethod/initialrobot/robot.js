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
    console.log("Collecting " + amount + " parts...")
  }

  mountParts() {
    console.log("Mounting parts...")
  }

  test() {
    console.log("Testing ...")
  }

  reset() {
    console.log("Reseting...")
  }
}