
(function (window) {
	var cesarGreeter = {};
	cesarGreeter.name = "Cesar";
	
	var greeting = "Hello "
	
	cesarGreeter.sayHello = function() {
		console.log(greeting  + cesarGreeter.name)
	}

	window.cesarGreeter = cesarGreeter;

})(window);