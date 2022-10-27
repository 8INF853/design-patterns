import Collection from "./collection"
import FileWriter from "./filewriter"
import View from "./view"

export default class WithDuplication {
  constructor(outputFile = null){
    this.outputFile = outputFile
    this.movies = new Collection()
    this.view = new View("My file...")
  }

  save() {
    if(this.outputFile == null) {
      return false
    }

    let writer = new FileWriter(this.outputFile)  
    this.movies.writeTo(writer)
    writer.close()
    return true
  }

  saveAs() {
    this.outputFile = this.view.getFile()
    this.save()
  }
}