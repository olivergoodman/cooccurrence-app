$(document).ready(function() {
	console.log("PAGE LOADED")

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
	        	var o_cooccurrences = response.obama;
	        	var t_cooccurrences = response.trump;
	        	
	        	
	        	$('.output-words').text("");
	        	for (var i=0; i<3; i++){
	        		if (i == 2) {
	        			$('#words-o').append(o_cooccurrences[i]);
		        		$('#words-t').append(t_cooccurrences[i]);
	        		}
	        		else {
		        		$('#words-o').append(o_cooccurrences[i]+", ");
		        		$('#words-t').append(t_cooccurrences[i]+", ");
		        	}
	        	}
	        	// console.log("obama: " + o_cooccurrences);
	        	// console.log("trump: " + t_cooccurrences);
	        },
	        error: function(response) { 
	        	console.log(response.status + ": could not pass data to server");  
	        }
	    });	
    }); 


})

