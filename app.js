const express = require('express')
const https = require('https')

const app = express()

app.get('/', function (req, res) {
	const url =
		'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6b0c55ffbc450cf1b8b5ff53cbd64f6b&units=metric'
	https.get(url, function (response) {
		console.log(response.statusCode)

		response.on('data', function (data) {
			const weatherData = JSON.parse(data)
			const temp = weatherData.main.temp
			const weatherDescription = weatherData.weather[0].description
			console.log(weatherDescription)
		})
	})
	res.send('Server is up and running')
})

app.listen(3000, function () {
	console.log('Server is running on port 3000.')
})
