class Person {
  constructor (firstanme="John",lastName="Doe",age=0,gender="Male"){
    this.firstName=firstanme;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender
  }
  sayFullName(){
    return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${raceName}`
  }
  // Get coding in ES6 :D,
}
