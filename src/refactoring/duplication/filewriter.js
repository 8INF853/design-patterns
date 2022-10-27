export default class FileWriter {
  constructor() {
    console.log("Creating filewriter...")
  }

  close() {
    console.log("Closing writer...")
  }

  writing(object) {
    console.log("Writing " + object)
  }
}