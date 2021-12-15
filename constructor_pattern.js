function Person(name,age,occupation) {

  this.name = name
  this.age = age
  this.occupation = occupation;
  
  this.printdata = function()
    {
     console.log(`${this.name} is a ${this.age} year old ${this.occupation}`);
    }
  }

var human = new Person("name1",32,"Fullstack Developer")

human.printdata();
