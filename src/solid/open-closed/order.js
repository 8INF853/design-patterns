class Order {
  constructor(lineItens, shiping) {
    this.lineItens = lineItens
    this.shipping = shipping
  }

  getTotal(){}
  getTotalWeight(){}
  setShippingTypes(){}
  getShippingDate(){}

  getShippingCost(){
    if(this.shipping == 'ground') {
      //Livraison gratuite par la route
      //pour les grosses commandes
      if(this.getTotal() > 100) {
        return 0
      }
      //1.5 $ par kilo, mais 10 $ minimum
      return Math.max(10, this.getTotalWeight() * 1.5)
    }

    if(this.shipping == 'air') {
      //3 $ par kilo, mais 20 $ minimum
      return Math.max(20, this.getTotalWeight() * 3)
    }
  }

}