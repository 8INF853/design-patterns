export default class Collection {
  constructor(name) {
    this.name = name
    this.collection = []
  }

  writeTo(writer) {
    writer.writing(this.toString())
  }

  toString() {
    return this.name
  }

  add(object) {
    this.collection.add(object)
  }

  size() {
    return this.collection.length
  }
}