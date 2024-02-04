var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector("#add");
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "358faa7b765c3ca29551d9526422a968";

function convertion(val) {
    return (val - 273.15).toFixed(2); // Conversion from Kelvin to Celsius
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            console.log(data); // Log the data to see its structure
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description']; // Corrected index
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = 'Weather of <span>' + nameval + '</span>';
            temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + '°C</span>';
            description.innerHTML = 'Sky Conditions: <span>' + descripVal + '</span>'; // Corrected variable name
            wind.innerHTML = 'Wind Speed: <span>' + windspeed + ' km/h</span>'; // Corrected variable name
        })
        .catch(err => alert("You entered the wrong city name."));
});