var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=ae1e26d3a511f5058a8fc9ff40ffe2ad';
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}

//http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&APPID=ae1e26d3a511f5058a8fc9ff40ffe2ad
//http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=ae1e26d3a511f5058a8fc9ff40ffe2ad&q=Kiev