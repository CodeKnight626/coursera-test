(function() {

	//Same as document.querySelector("#navbarToggle").addEventListener
	$("#navbar-toggler").blur(function (event) {
		var screenWidth = window.innerWidth;
		console.log(screenWidth);
		if (screenWidth < 768) {
			$("#navbarText").colapse('hide');
		}
	});
});