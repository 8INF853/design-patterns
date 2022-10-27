export default class Processor {
  constructor(data) {
    this.data = data
  }

  execute() {
    console.log("Processing data...")
    return this.data + "--preprocessed"
  }
}