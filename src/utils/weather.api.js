import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const TOKEN = 'f29698f288ce54f46877a29113066394';
const UNITS = 'metric';

export { getWeatherDataByCity, getWeatherDataByCoords, getForecastDataByCity, getForecastDataByCoords };

function getWeatherDataByCity(search) {
    const url = `${BASE_URL}/weather?q=${search}&units=${UNITS}&appid=${TOKEN}`;
    return makeRequest(url);
}

function getWeatherDataByCoords(latitude, longitude) {
    const url = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${TOKEN}`;
    return makeRequest(url);
}

function getForecastDataByCity(search) {
    const url = `${BASE_URL}/forecast?q=${search}&units=${UNITS}&appid=${TOKEN}`;
    return makeRequest(url);
}

function getForecastDataByCoords(latitude, longitude) {
    const url = `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${TOKEN}`;
    return makeRequest(url);
}

function makeRequest(url) {
    return axios.get(url)
        .then(response => response.data);
}
