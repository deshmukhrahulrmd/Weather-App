let key = '0583090b17eb7d553f599138bd2fb1a8';
let city = document.getElementById('city');
let desc = document.getElementById('desc');
let windspeed = document.getElementById('windspeed');
let temp = document.getElementById('temp');
let hum = document.getElementById('hum');

function fetchData() {
	let cityname = document.getElementById('cityname').value;
	let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`

	fetch(api)
	.then(response=>response.json())
	.then(data=>{
		city.innerHTML = data.name;
		desc.innerHTML = data.weather[0].description;
		windspeed.innerHTML = data.wind.speed;
		temp.innerHTML = Math.round(data.main.temp-273);
		hum.innerHTML = data.main.humidity;
	})
}