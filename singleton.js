class Singleton {
  constructor(options = {})
  {
    this.name = 'SingletonTester';
    this.pointX = options.pointX || 10;
    this.pointY = options.pointY || 12
  }
}
//Single insance holder
let instance;

const SingletonTester = {
  name: 'SingletonTester',

  getInstance(options){
    if(instance === undefined)
    {
      instance = new Singleton(options);
    }
    return instance;
  }
}


  const singletonTest = SingletonTester.getInstance({
    pointX: 10,
    pointY: 15
  });

  // Log the output of pointX just to verify it is correct
  console.log(singletonTest.pointX + " " + singletonTest.pointY);
