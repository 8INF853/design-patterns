export default class Account {
  constructor(accountType) {
    this.type = accountType
    this.balance = 0.0
    this.rewardPoints = 0
  }

  addTransaction(amount) {
    this.rewardPoints += this.calculateRewardsPoints(amount)
    this.balance += amount
  }

  calculateRewardsPoints(amount) {
    let points = 0

    switch(this.type) {
      case "SILVER" :
        points = amount/10
        break
      case "GOLD" :
        points = (this.balance / 10000 * 5) + amount / 5
        break
      case "PLATINUM" :
        points = (this.balance / 10000 * 10) + amount / 2
        break
      default :
        points = 0
        break
      
      return points
    }
  }  

}