import ManageData from "./manageData"
import Filter from "./filter"
import Parser from "./parser"
import TrainerFacade from "./TrainerFacade"

let manageData = new ManageData()
let filter = new Filter()
let parser = new Parser()

let trainer = new TrainerFacade(manageData, filter, parser)

let modelTrained = trainer.trainSupervisedModel("data.csv")

console.log(modelTrained.toString())