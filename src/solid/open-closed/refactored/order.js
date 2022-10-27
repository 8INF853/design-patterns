class Order {
  constructor(lineItens, shipping) {
    this.lineItens = lineItens
    this.shipping = shipping
  }

  getTotal(){}
  getTotalWeight(){}
  setShippingTypes(){}
  getShippingDate(){}

  getShippingCost(){
    return this.shipping.getCost(this)
  }
}

class Shipping {
  getDate(order) {}
  getCost(order) {}
}

class Ground extends Shipping {
  
  getDate(order) {}
  getCost(order) {
    //Livraison gratuite par la route
    //pour les grosses commandes
    if(order.getTotal() > 100) {
      return 0
    }
    //1.5 $ par kilo, mais 10 $ minimum
    return Math.max(10, 
                    order.getTotalWeight() * 1.5)
  }
}

class Air extends Shipping {

  getDate(order) {}
  getCost(order) {
    //3 $ par kilo, mais 20 $ minimum
    return Math.max(20,
                    order.getTotalWeight() * 3)
  }
}