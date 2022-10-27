import MySystem from './system'
import { ConcreteComponent, NewConcreteComponent } from './library'
import ComponentAdapter from './adapter'

let component = new NewConcreteComponent()
component = new ConcreteComponent()
let system = new MySystem(component)
system.callSomething()

let newComponent = new NewConcreteComponent()
let componentAdapter = new ComponentAdapter(newComponent)
let newSystem = new MySystem(componentAdapter)
newSystem.callSomething()