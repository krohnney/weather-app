import parseForecastData from './parseForecastData';
import parseWeatherData from './parseWeatherData';
import { rawWeatherData, parsedWeatherData, rawForecastData, parsedForecastData } from './weatherMockData';

describe('Utils', () => {

    test('raw weather data is parsed correctly', () => {
        const data = parseWeatherData(rawWeatherData);
        expect(data).toEqual(parsedWeatherData);
    });

    test('raw forecast data is parsed correctly', () => {
        const data = parseForecastData(rawForecastData);
        expect(data).toEqual(parsedForecastData);
    });

});
