class Employee {
  constructor(name, salary, job) {
    this.name = name
    this.salary = salary
    this.job = job
  }

  getName(){}
  getSalary(){}
  getJob(){}
}

class TimeSheetReport {
  printTimeSheetReport(formatType, employee) {
    report = ""
    switch(formatType) {
      case 'JSON':
        // implement JSON formatting here
        return report
        break
      default:
        // implement default formatting here
        return report
        break
    }
  }
}