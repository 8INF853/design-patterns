import Robot from "./robot"

export default class ProcessorRobot extends Robot {
  constructor() {}

  collectParts(amount) {
    console.log("Collecting " + amount + " cores...")
  }

  mountParts() {
    console.log("Mounting cores...")
  }

  test() {
    console.log("Testing processing...")
  }
}