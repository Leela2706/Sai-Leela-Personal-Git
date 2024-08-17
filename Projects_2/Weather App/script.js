const apikey = "6b12112560727bde9e627df5d63af271";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?untis=matric$q=bangalotre";
async function checkweather() {
    const response = await fetch(apiUrl + 'appid=&{apikey}');
    var data = await response.json();
    console.log(data)
}
checkweather();

