/*
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://currency-exchange.p.rapidapi.com/listquotes",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "ebd2ffb493msh747291797010e20p1a9704jsn9e8b2a845364"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://v6.exchangerate-api.com/v6/bfae432d487360a5d7b11376/latest/USD",
	"method": "GET",
};

$.ajax(settings).done(function (response) {
	console.log(response);
	data = JSON.parse(response);
	conversion_rate= data["conversion_rates"];
	console.log(conversion_rate);
});
*/

function exchange(base, exchange) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://v6.exchangerate-api.com/v6/bfae432d487360a5d7b11376/latest/"+base,
      "method": "GET"
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
      data = JSON.parse(response);
      conversion_rate= data["conversion_rates"];
      console.log(conversion_rate);
      console.log(conversion_rate[exchange]);
    });
 }