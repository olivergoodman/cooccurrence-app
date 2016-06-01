$(document).ready(function() {

	$("#but-search").click(function(){
		var input_word = document.getElementById("wordInput").value;
		var data = {"input_word": input_word};

		$.ajax({
			type: 'POST',
			url: '/_get_input_word',
			data: JSON.stringify(data, null, '\t'), //http://stackoverflow.com/questions/14908864/how-can-i-use-data-posted-from-ajax-in-flask
			contentType: 'application/json;charset=UTF-8',
			dataType : "json",
			success: function(response) {
				$('.output-words').text("");
	        	var o_cooccurrences = response.obama;
	        	var t_cooccurrences = response.trump;
	        	if (o_cooccurrences[0] == "T") {
	        		$('#words-o').append("Word not in text. Try another word.");
	        	}
	        	else {
	        		for (var i=0; i<3; i++){
		        		if (i == 2) {
		        			$('#words-o').append(o_cooccurrences[i]);
		        		}
		        		else {
			        		$('#words-o').append(o_cooccurrences[i]+", ");
			        	}}}
	        	if (t_cooccurrences[0] == "T") {
	        		console.log("words-t empty");
	        		$('#words-t').append("Word not in text. Try another word.");
	        	}
	        	else {
	        		for (var i=0; i<3; i++){
		        		if (i == 2) {
			        		$('#words-t').append(t_cooccurrences[i]);
		        		}
		        		else {
			        		$('#words-t').append(t_cooccurrences[i]+", ");
			        	}}}	
	        },
	        error: function(response) { 
	        	console.log(response.status + ": could not pass data to server");  
	        }
	    });	
    }); 


})

