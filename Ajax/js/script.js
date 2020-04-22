//Get response from a 
//Event Handling
 /*
document.addEventListener("DOMContentLoaded",
	function (event) {

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click", function(){

			//Call server to get the name
			$ajaxUtils.sendGetRequest("/data/name.json", function (request){
				name = request.responseText;
				document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
			});
		});
	}
);
*/

//Get response from a json file 
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json", function (res) {
              var message = res.firstName + " " + res.lastName
              if (res.likesPizza) {
                message += " likes Pizza";
              }
              else {
                message += " doesn't like pizza";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);