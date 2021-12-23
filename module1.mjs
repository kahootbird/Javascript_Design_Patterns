define('aModule',
['foo', 'bar'],
function (foo, bar) {
var aModule = { 
	doStuff:function(){
		console.log("YAY STUFF");
		}
	}
	return aModule
}
