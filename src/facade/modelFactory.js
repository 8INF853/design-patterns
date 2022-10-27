export default class ModelFactory {

  static createModel(type, data) {
    let model = null

    if (type == 'supervised') {
      model = new SupervisedModel(data)
    } else if (type == 'unsupervised') {
      model = new UnsupervisedModel(data)
    }

    return model
  }
}

export class Model {
  constructor(data, type = "undefined") {
    this.data = data
    this.type = type
  }

  toString() {
    return this.type + " : " + this.data + "--trained"
  }
}

export class SupervisedModel extends Model {
  constructor(data) {
    super(data, "Supervised Model")
  }

}

export class UnsupervisedModel extends Model {
  constructor(data) {
    super(data, "Unsupervised Model")
  }
}