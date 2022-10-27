class HelloWorld {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  gretting() {
    return "Hello, " + this.firstName + " " + this.lastName
  }
}

class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class HelloWorld2 {
  constructor(greeting, question) {
    this.greeting = greeting
    this.question = question
  }

  gretting(person) {
    return this.greeting + person.getName() + ". " + this.question
  }
}

