//This doesn't work and has issues - modified default example out of the book "Learning Javascript Design Patterns"


let counter = 0

const exampleModule = {
	incrementCounter(){
	 return counter++
	},
	console.log(`counter value prior to reset: ${counter}`);
	//console.log(`counter value prior to reset: ${counter}`);
	counter = 0;
	},
};

export default exampleModule;

import exampleModule from './exampleModule';
exampleModule.incrementCounter();
exampleModule.resetCounter();

