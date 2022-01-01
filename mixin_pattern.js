// mixin
let printFromMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, printFromMixin);
//Execute method
new User("Dude").sayHi();
