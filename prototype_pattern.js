
const myCar = {
	name: 'Car',
	drive (){
	console.log("driving car")
	},

	panic()
	{
	
	},
};

const car = Object.create(myCar);

console.log(car.name)
