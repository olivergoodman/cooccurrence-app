$(document).ready(function() {
	console.log("PAGE LOADED")

	$("#but-search").click(function(){
		var input_word = document.getElementById("wordInput").value;
		var data = {"input_word": input_word}

		$.ajax({
			type: 'POST',
			url: '/_get_input_word',
			data: JSON.stringify(data, null, '\t'), //http://stackoverflow.com/questions/14908864/how-can-i-use-data-posted-from-ajax-in-flask
			contentType: 'application/json;charset=UTF-8',
			dataType : "json",
			success: function(response) {
	        	console.log(response);
	        	console.log("Successfully passed data to server");
	        },
	        error: function(response) { //why still returning error status on successful request?
	        	console.log(response.status + ": could not pass data to server");  
	        }
	    });	
    }); 


})

