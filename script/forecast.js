$(document).ready(function(){
	$('#submitForecast').click(function(){
		return getForecast();
	});
	
});

//Create the getForecast function
function getForecast(){
	var city = $("#city").val();
	var days = $("#days").val();

	if (city != '' && days != ''){
		
//Send AJAX request
		
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=imperial' + '&cnt' + days + '{ API KEY }',
			type: 'GET',
			dataType: 'jsonp',
			success: function(data){
				var table = '';

				var header = '<h2>Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>';

				for(var i = 0; i < data.list.length; i++){
					table += "<tr>";

						table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" + "</td>";
						table += "<td>" + data.list[i].weather[0].main + "</td>";
						table += "<td>" + data.list[i].weather[0].description + "</td>";
						table += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
						table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
						table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
						table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
						table += "<td>" + data.list[i].pressure + "hpa</td>";
						table += "<td>" + data.list[i].humidity + "%</td>";
						table += "<td>" + data.list[i].speed + "&m/s</td>";
						table += "<td>" + data.list[i].deg + "&deg;C</td>";

					table += "</tr>";
				}
				$('#header').html(header);
				$('#forecastWeather').html(table);
				var city = $('#city').val('');
				var days = $('#days').val('');

			}
		})
		
		

	}else{
		$('error').html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-desmiss='alert' aria-label=close'>&times;</a>City field cannot be blank</div>");
	}
}
