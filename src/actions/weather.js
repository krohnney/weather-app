import {
    getForecastDataByCity,
    getWeatherDataByCity,
    getWeatherDataByCoords,
    getForecastDataByCoords
} from '../utils/weather.api';


/*
 * action types
 */
export const WEATHER_FETCHED_CITY = 'WEATHER_FETCHED_CITY';
export const WEATHER_ERROR = 'WEATHER_ERROR';
export const NEW_SEARCH = 'NEW_SEARCH';

/*
 * action creators
 */
export const getWeatherByCoords = (latitude, longitude) => async dispatch => {
    try {
        const allRequests = [getWeatherDataByCoords(latitude, longitude), getForecastDataByCoords(latitude, longitude)];
        const response = await Promise.all(allRequests);

        dispatch({
            type: WEATHER_FETCHED_CITY,
            payload: {
                city: response[0].name,
                weather: response[0],
                forecast: response[1],
            }
        });
    } catch (e) {
        dispatch({ type: WEATHER_ERROR, payload: 'City not found' });
    }
};

export const newSearch = (city) => dispatch => {
    dispatch({
        type: NEW_SEARCH,
        payload: {
            city
        }
    });
};

export const getWeatherByCity = (city) => async dispatch => {
    try {
        const allRequests = [getWeatherDataByCity(city), getForecastDataByCity(city)];
        const response = await Promise.all(allRequests);

        dispatch({
            type: WEATHER_FETCHED_CITY,
            payload: {
                city,
                weather: response[0],
                forecast: response[1],
            }
        });
    } catch (e) {
        dispatch({ type: WEATHER_ERROR, payload: 'City not found' });
    }
};
