export default class AbstractClass {
  constructor() {}

  templateMethod() {
    step1()
    step2()
    step3()
    hook()
  }

  step1() { 
    throw new Error('Implementation required') 
  }
  step2() { 
    throw new Error('Implementation required') 
  }

  step3() {
    console.log("A concrete method...")
  }

  hook() {}
}