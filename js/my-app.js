var myApp = new Framework7({
});

var $$ = Dom7;

// Select Template and define it
var template = document.getElementById('city-template').innerHTML;

// Compile and render
var compiledTemplate = Template7.compile(template);

// our function
function getcity() {
	
	// Get JSON Data from Geobytes API
	// add our input at the end of the API call
	$$.getJSON ('http://gd.geobytes.com/AutoCompleteCity?callback=city&q='+ document.getElementById("inputcity").value, function (json) {
			
	// Insert rendered template
	document.getElementById('content-wrap').innerHTML = compiledTemplate(json);
	});
}

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});