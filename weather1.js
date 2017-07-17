$(document).ready(function() {
	$('#submitCity').click(function(){
		return getWeather();
	});

	function displayTemp(F,C){
        if(C) return Math.round((F-32)*(5/9)) + '&deg; C';
    return Math.round(F) + '&deg; F';
  }
});

function getWeather(){
	var city = $('#city').val();

	if(city != ''){

		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=93503078803b2256419177ea0c2dafec',
			type: 'GET',
			dataType: 'jsonp',
			success: function(data){
			var widget = showResults(data);	

			$('#showWeather').html(widget);

			$('#city').val(' ');
			}
			
		});
		

	}else{
		$('#error').html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-desmiss='alert' aria-label=close'>&times;</a>City field cannot be blank</div>");
	}
}

function showResults(data){
	return 	'<h2>Current Weather for ' + data.name + ', ' + data.sys.country + '</h2>' +
			"<p>Weather: " + data.weather[0].main+  "</p>" +
			"<p>Weather Description:<img src='http://openweathermap.org/img/w/" +data.weather[0].icon+ ".png'>" + data.weather[0].description +  "</p>" +
			"<p>Temperature: " + data.main.temp +  " &deg;C</p>" +
			"<p>Humidity: " + data.main.humidity + " %</p>" +
			"<p>High: " + data.main.temp_max + " &deg;C</p>" +
			"<p>Low: " + data.main.temp_min + " &deg;C</p>" +
			"<p>Wind Speed: " + data.wind.speed + " m/s</p>" +
			"<p>Wind Direction: " + data.wind.deg + "</p>";
			
}








