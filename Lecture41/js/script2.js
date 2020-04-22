(function(window) {
	var alfonsoGreeter = {};
	alfonsoGreeter.name = "Alfonso";

	var greeting = "Hi "; 

	alfonsoGreeter.sayHi = function () {
	console.log(greeting + alfonsoGreeter.name)
	}

	window.alfonsoGreeter = alfonsoGreeter;

})(window);


