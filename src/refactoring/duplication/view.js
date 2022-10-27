export default class View {
  constructor(file) {
    console.log("Creating view")
    this.file = file
  }

  getFile() {
    return this.file
  }
}