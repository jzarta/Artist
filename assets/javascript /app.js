// Initial of arts

var artist =['Warhol', 'Picaso', 'Vincent', 'Leonardo',];

//===================

//Artist funcion

function displayArtistInfo(){
	var artist = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ artist +"&api_key=dc6zaTOxFJmzC&limit=10";
}