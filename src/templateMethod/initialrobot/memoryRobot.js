export default class MemoryRobot {
  constructor() {}

  buildComponent(amount) {
    this.initializeConfiguration()
    this.collectChips(amount)
    this.mountChips()
    this.storageTest()
    this.reset()
  }

  initializeConfiguration() {
    console.log("Initializing configuration...")
  }

  collectChips(amount) {
    console.log("Collecting " + amount + " chips...")
  }

  mountChips() {
    console.log("Mounting chips...")
  }

  storageTest() {
    console.log("Testing storage...")
  }

  reset() {
    console.log("Reseting...")
  }
}