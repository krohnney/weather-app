import { timeStampToTime } from './general';

export default function(weatherData) {

    return {
        humidity: weatherData.main.humidity,
        temp: weatherData.main.temp,
        windSpeed: weatherData.wind.speed,
        windDirection: weatherData.wind.deg - 90,
        sunrise: timeStampToTime(weatherData.sys.sunrise),
        sunset: timeStampToTime(weatherData.sys.sunset),
        status: {
            icon: weatherData.weather[0].icon,
            main: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
        }
    };

};
