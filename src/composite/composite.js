import MenuComponent from "./component"

export default class MenuSection extends MenuComponent {
  constructor(title) {
    super(title)
    this.options = []
  }

  add(option) {
    this.options.push(option)
  }

  print() {
    let text = ""

    text = text + "=============" +  this.title.toUpperCase() + "============="
    console.log(text)

    this.options.forEach(option => option.print())
  }
}