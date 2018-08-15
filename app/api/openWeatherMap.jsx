var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=33c7e0a746ca7cacdbc4ffb0c5acb883&units=metric';


module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
        
        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            console.log(res);
            throw new Error(res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;;
        });
    }
}