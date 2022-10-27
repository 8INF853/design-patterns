import Processor from "./processor"
import ModelFactory from "./modelFactory"

export default class TrainerFacade {
  constructor(manageData, filter, parser){
    this.manageData = manageData
    this.filter = filter
    this.parser = parser
  }

  trainSupervisedModel(file) {
    console.log("Train")
    let records = this.manageData.loadData(file)
    let filteredData = this.filter.filterRecords(records)
    let parsedData = this.parser.parseData(filteredData)
    let processor = new Processor(parsedData)
    let dataProcessed = processor.execute()
    let model = ModelFactory.createModel("supervised", dataProcessed)

    return model
  }
  
}