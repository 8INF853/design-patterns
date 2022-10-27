export default class Filter {
  constructor() {
  }

  filterRecords(records) {
    console.log("Filtering records...")
    return records + "--filtered"
  }
}