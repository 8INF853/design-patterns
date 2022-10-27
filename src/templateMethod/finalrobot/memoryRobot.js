import Robot from "./robot"

export default class MemoryRobot extends Robot {
  constructor() {}

  collectParts(amount) {
    console.log("Collecting " + amount + " chips...")
  }

  mountParts() {
    console.log("Mounting chips...")
  }

  test() {
    console.log("Testing storage...")
  }
}