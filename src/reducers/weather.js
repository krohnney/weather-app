import * as actions from '../actions/weather.js'
import parseForecastData from '../utils/parseForecastData';
import parseWeatherData from '../utils/parseWeatherData';

const initialWeatherState = {
    city: '',
    weather: null,
    forecast: null,
    previous: []
};

export default function(state = initialWeatherState, action) {
    switch (action.type) {
        case actions.WEATHER_FETCHED_CITY:
            return {
                ...state,
                city: action.payload.city,
                weather: parseWeatherData(action.payload.weather),
                forecast: parseForecastData(action.payload.forecast.list),
            };
        case actions.WEATHER_ERROR:
            return {
                ...state,
                city: '',
                weather: null,
                forecast: null
            };
        case actions.NEW_SEARCH:
            return {
                ...state,
                previous: state.previous.concat(action.payload.city).slice(-5),
            };
        default:
            return state
    }
}
