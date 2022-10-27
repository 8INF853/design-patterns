import { Component } from './library'

export default class ComponentAdapter extends Component {
  constructor(component){
    super()
    this.component = component
  }

  doSomething() {
    this.component.doSomethingElse()
  }
}