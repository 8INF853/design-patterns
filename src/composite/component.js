export default class MenuComponent {
  constructor(title = "", description = "", price = 0.0) {
    this.title = title
    this.description = description
    this.price = price
  }

  add(component){ 
    throw new Error('Implementation required') 
  }
  
  print() {
    throw new Error('Implementation required')
  }
}

export class MenuOption extends MenuComponent {
  constructor(title, description, price) {
    super(title, description, price)
  }

  print() {
    let text = ""

    text = text + this.title
    text = text + ", $ "  + this.price
    text = text + "\n -- "  + this.description
    
    console.log(text)
  }
}
