
//*******************************************************//
// The Module Pattern
//*******************************************************//

// ES2015+ keywords used: import, export, let, const

let counter = 0;

const testModule = {
  incrementCounter() {
    return counter++;
 // },
   // console.log(`counter value prior to reset: ${counter}`);
   // counter = 0;
  },
};

// Default export module, without name
export default testModule;

// Usage:

// Import module from path
import testModule from './testModule';

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();


