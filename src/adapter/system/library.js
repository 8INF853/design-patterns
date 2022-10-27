export class Component {
  constructor() {}

  doSomething() {
      throw new Error('Implementation required');
  }
}

export class ConcreteComponent extends Component {
  constructor() {
      super()
  }

  doSomething() {
      console.log("Doing something...")
  }
}

export class NewComponent {
  constructor() {
  }

  doSomethingElse() {
      throw new Error('Implementation required');
  }
}

export class NewConcreteComponent extends NewComponent {
  constructor() {
      super()
  }

  doSomethingElse() {
      console.log("Doing something else...")
  }
}


