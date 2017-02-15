var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1a7e2e3ecdd4aa3685964b43ad913e2e&units=metric';


//http://api.openweathermap.org/data/2.5/weather?appid=1a7e2e3ecdd4aa3685964b43ad913e2e&units=metric&q=1234

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function(res){
          debugger;
           if (res.cod && res.message) {
                throw new Error (res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.message);
        });
    }
};