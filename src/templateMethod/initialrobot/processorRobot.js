export default class ProcessorRobot {
  constructor() {}

  buildComponent(amount) {
    this.initializeConfiguration()
    this.collectCores(amount)
    this.mountCores()
    this.testProcessing()
    this.reset()
  }

  initializeConfiguration() {
    console.log("Initializing configuration...")
  }

  collectCores(amount) {
    console.log("Collecting " + amount + " cores...")
  }

  mountCores() {
    console.log("Mounting cores...")
  }

  processingTest() {
    console.log("Testing processing...")
  }

  reset() {
    console.log("Reseting...")
  }
}