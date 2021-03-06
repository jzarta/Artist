// Initial of arts

var artist =['Andy Warhol', 'Pablo Picasso', 'vincent van gogh', 'leonardo da vinci',];

//===================

//Artist funcion

function displayArtistInfo(){
	var artist = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ artist +"&api_key=dc6zaTOxFJmzC&limit=8";

// AJAX call for the specific  artist 

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

		console.log(response);

		$('#artistView').empty();

		for(var i = 0; i < response.data.length; i++) {
			//Make a generic div to hold the artist 
			var artistDiv = $('#artistView')
			
			//Rating Data
			var rating = response.data[i].rating;

			//Element to have the rating data
			var pOne = $('<p>').text("Rating: " + rating);

			//Display 
			artistDiv.append(pOne);

			//make an element to show up the image
			var image = $('<img>').attr("src", response.data[i].images.fixed_height_still.url);
			image = $(image).attr("data-still", response.data[i].images.fixed_height_still.url);
			image = $(image).attr("data-animate", response.data[i].images.fixed_height.url);
			image = $(image).attr("data-state", "still");
			image = $(image).attr("class", "FCImage");

			artistDiv.append(image);
			//
			$('#artistDiv').append(artistDiv);
		}


		
	});
}
// =================================================

function renderButtons(){
	//clean buttons 
	$('#buttonsView').empty();

	//loops through artist 

	for (var i = 0; i < artist.length; i++){

		var a = $('<button>')
		a.addClass('artist');
		a.attr('data-name', artist[i]);
		a.text(artist[i]);
		$('#buttonsView').append(a);
	}
}

$(document).on('click', '.FCImage' , function() {

	var state = $(this).attr("data-state");


    if(state == 'still')
    {

        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "animate");
    }
    else
    {

        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "still");
    }

});

	// This function handles events where one button is clicked
$('#addArtist').on('click', function(){

	// This line of code will grab the input from the textbox
	var artist = $('#artist-input').val().trim();

	// The artist from the textbox is then added to our array
	artist.push(artist);
	
	// Our array then runs which handles the processing of our artist array
	renderButtons();

	return false;
});

	// ========================================================

	// Generic function for displaying the clubInfo
$(document).on('click', '.artist', displayArtistInfo); 


	// ========================================================

	// This calls the renderButtons() function
		renderButtons();
	

