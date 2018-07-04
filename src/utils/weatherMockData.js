import {timeStampToTime} from './general';


export const rawWeatherData = {
    "coord": {
        "lon": -3.53,
        "lat": 50.72
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 23,
        "pressure": 1023,
        "humidity": 64,
        "temp_min": 23,
        "temp_max": 23
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 270
    },
    "clouds": {
        "all": 75
    },
    "dt": 1529418000,
    "sys": {
        "type": 1,
        "id": 5145,
        "message": 0.0028,
        "country": "GB",
        "sunrise": 1529380845,
        "sunset": 1529440230
    },
    "id": 2649808,
    "name": "London",
    "cod": 200
};

export const parsedWeatherData = {
    humidity: 64,
    temp: 23,
    windSpeed: 3.6,
    windDirection: 270 - 90,
    sunrise: timeStampToTime(1529380845),
    sunset: timeStampToTime(1529440230),
    status: {
        icon: "04d",
        main: "Clouds",
        description: "broken clouds",
    }
};

export const rawForecastData = [{
    "dt": 1529431200,
    "main": {
        "temp": 21.97,
        "temp_min": 21.97,
        "temp_max": 22.56,
        "pressure": 1027.8,
        "sea_level": 1035.34,
        "grnd_level": 1027.8,
        "humidity": 65,
        "temp_kf": -0.59
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 88},
    "wind": {"speed": 4.31, "deg": 255.004},
    "rain": {"3h": 0.0025},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-19 18:00:00"
}, {
    "dt": 1529442000,
    "main": {
        "temp": 20.73,
        "temp_min": 20.73,
        "temp_max": 21.17,
        "pressure": 1027.88,
        "sea_level": 1035.45,
        "grnd_level": 1027.88,
        "humidity": 72,
        "temp_kf": -0.44
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 92},
    "wind": {"speed": 3.23, "deg": 251.501},
    "rain": {"3h": 0.0125},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-19 21:00:00"
}, {
    "dt": 1529452800,
    "main": {
        "temp": 19.29,
        "temp_min": 19.29,
        "temp_max": 19.58,
        "pressure": 1027.88,
        "sea_level": 1035.41,
        "grnd_level": 1027.88,
        "humidity": 82,
        "temp_kf": -0.29
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 44},
    "wind": {"speed": 2.41, "deg": 240.501},
    "rain": {"3h": 0.0725},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-20 00:00:00"
}, {
    "dt": 1529463600,
    "main": {
        "temp": 17.95,
        "temp_min": 17.95,
        "temp_max": 18.1,
        "pressure": 1027.47,
        "sea_level": 1034.98,
        "grnd_level": 1027.47,
        "humidity": 88,
        "temp_kf": -0.15
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 20},
    "wind": {"speed": 2.44, "deg": 228.001},
    "rain": {"3h": 0.005},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-20 03:00:00"
}, {
    "dt": 1529474400,
    "main": {
        "temp": 18.44,
        "temp_min": 18.44,
        "temp_max": 18.44,
        "pressure": 1027.2,
        "sea_level": 1034.75,
        "grnd_level": 1027.2,
        "humidity": 80,
        "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.56, "deg": 222.504},
    "rain": {"3h": 0.005},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-20 06:00:00"
}, {
    "dt": 1529485200,
    "main": {
        "temp": 21.15,
        "temp_min": 21.15,
        "temp_max": 21.15,
        "pressure": 1026.88,
        "sea_level": 1034.43,
        "grnd_level": 1026.88,
        "humidity": 75,
        "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 4.97, "deg": 232.001},
    "rain": {"3h": 0.005},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-20 09:00:00"
}, {
    "dt": 1529496000,
    "main": {
        "temp": 23.96,
        "temp_min": 23.96,
        "temp_max": 23.96,
        "pressure": 1025.79,
        "sea_level": 1033.3,
        "grnd_level": 1025.79,
        "humidity": 66,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 5.52, "deg": 241.5},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-20 12:00:00"
}, {
    "dt": 1529506800,
    "main": {
        "temp": 24.95,
        "temp_min": 24.95,
        "temp_max": 24.95,
        "pressure": 1024.94,
        "sea_level": 1032.38,
        "grnd_level": 1024.94,
        "humidity": 60,
        "temp_kf": 0
    },
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
    "clouds": {"all": 56},
    "wind": {"speed": 5.71, "deg": 254.502},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-20 15:00:00"
}, {
    "dt": 1529517600,
    "main": {
        "temp": 23.5,
        "temp_min": 23.5,
        "temp_max": 23.5,
        "pressure": 1024.7,
        "sea_level": 1032.21,
        "grnd_level": 1024.7,
        "humidity": 59,
        "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 88},
    "wind": {"speed": 5.86, "deg": 271.01},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-20 18:00:00"
}, {
    "dt": 1529528400,
    "main": {
        "temp": 20.11,
        "temp_min": 20.11,
        "temp_max": 20.11,
        "pressure": 1026.01,
        "sea_level": 1033.59,
        "grnd_level": 1026.01,
        "humidity": 64,
        "temp_kf": 0
    },
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n"}],
    "clouds": {"all": 56},
    "wind": {"speed": 4.72, "deg": 313.502},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-20 21:00:00"
}, {
    "dt": 1529539200,
    "main": {
        "temp": 14.61,
        "temp_min": 14.61,
        "temp_max": 14.61,
        "pressure": 1028.28,
        "sea_level": 1035.73,
        "grnd_level": 1028.28,
        "humidity": 64,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 4.83, "deg": 329},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-21 00:00:00"
}, {
    "dt": 1529550000,
    "main": {
        "temp": 12,
        "temp_min": 12,
        "temp_max": 12,
        "pressure": 1029.34,
        "sea_level": 1036.91,
        "grnd_level": 1029.34,
        "humidity": 69,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "02n"}],
    "clouds": {"all": 8},
    "wind": {"speed": 4.21, "deg": 329.006},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-21 03:00:00"
}, {
    "dt": 1529560800,
    "main": {
        "temp": 13.11,
        "temp_min": 13.11,
        "temp_max": 13.11,
        "pressure": 1030.48,
        "sea_level": 1038.07,
        "grnd_level": 1030.48,
        "humidity": 69,
        "temp_kf": 0
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
    "clouds": {"all": 20},
    "wind": {"speed": 4.36, "deg": 335.002},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-21 06:00:00"
}, {
    "dt": 1529571600,
    "main": {
        "temp": 14.98,
        "temp_min": 14.98,
        "temp_max": 14.98,
        "pressure": 1031.73,
        "sea_level": 1039.33,
        "grnd_level": 1031.73,
        "humidity": 67,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "02d"}],
    "clouds": {"all": 8},
    "wind": {"speed": 4.51, "deg": 343},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-21 09:00:00"
}, {
    "dt": 1529582400,
    "main": {
        "temp": 17.24,
        "temp_min": 17.24,
        "temp_max": 17.24,
        "pressure": 1032.1,
        "sea_level": 1039.61,
        "grnd_level": 1032.1,
        "humidity": 58,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.96, "deg": 338.005},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-21 12:00:00"
}, {
    "dt": 1529593200,
    "main": {
        "temp": 18.54,
        "temp_min": 18.54,
        "temp_max": 18.54,
        "pressure": 1032.06,
        "sea_level": 1039.59,
        "grnd_level": 1032.06,
        "humidity": 50,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 4.11, "deg": 336.001},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-21 15:00:00"
}, {
    "dt": 1529604000,
    "main": {
        "temp": 17.81,
        "temp_min": 17.81,
        "temp_max": 17.81,
        "pressure": 1032.48,
        "sea_level": 1040.03,
        "grnd_level": 1032.48,
        "humidity": 44,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 4.35, "deg": 339.502},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-21 18:00:00"
}, {
    "dt": 1529614800,
    "main": {
        "temp": 14.89,
        "temp_min": 14.89,
        "temp_max": 14.89,
        "pressure": 1033.88,
        "sea_level": 1041.53,
        "grnd_level": 1033.88,
        "humidity": 50,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.57, "deg": 338.501},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-21 21:00:00"
}, {
    "dt": 1529625600,
    "main": {
        "temp": 12.52,
        "temp_min": 12.52,
        "temp_max": 12.52,
        "pressure": 1034.83,
        "sea_level": 1042.45,
        "grnd_level": 1034.83,
        "humidity": 59,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.41, "deg": 324.501},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-22 00:00:00"
}, {
    "dt": 1529636400,
    "main": {
        "temp": 11.03,
        "temp_min": 11.03,
        "temp_max": 11.03,
        "pressure": 1035.11,
        "sea_level": 1042.73,
        "grnd_level": 1035.11,
        "humidity": 68,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.32, "deg": 328.003},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-22 03:00:00"
}, {
    "dt": 1529647200,
    "main": {
        "temp": 12.73,
        "temp_min": 12.73,
        "temp_max": 12.73,
        "pressure": 1035.66,
        "sea_level": 1043.44,
        "grnd_level": 1035.66,
        "humidity": 63,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.11, "deg": 344.504},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-22 06:00:00"
}, {
    "dt": 1529658000,
    "main": {
        "temp": 16.98,
        "temp_min": 16.98,
        "temp_max": 16.98,
        "pressure": 1036.35,
        "sea_level": 1043.85,
        "grnd_level": 1036.35,
        "humidity": 61,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 2.95, "deg": 8.00549},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-22 09:00:00"
}, {
    "dt": 1529668800,
    "main": {
        "temp": 19.02,
        "temp_min": 19.02,
        "temp_max": 19.02,
        "pressure": 1036.21,
        "sea_level": 1043.73,
        "grnd_level": 1036.21,
        "humidity": 54,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.3, "deg": 353.502},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-22 12:00:00"
}, {
    "dt": 1529679600,
    "main": {
        "temp": 20.19,
        "temp_min": 20.19,
        "temp_max": 20.19,
        "pressure": 1035.77,
        "sea_level": 1043.21,
        "grnd_level": 1035.77,
        "humidity": 46,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.03, "deg": 1.00479},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-22 15:00:00"
}, {
    "dt": 1529690400,
    "main": {
        "temp": 19.63,
        "temp_min": 19.63,
        "temp_max": 19.63,
        "pressure": 1035.25,
        "sea_level": 1042.75,
        "grnd_level": 1035.25,
        "humidity": 43,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 2.61, "deg": 9.00903},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-22 18:00:00"
}, {
    "dt": 1529701200,
    "main": {
        "temp": 15.76,
        "temp_min": 15.76,
        "temp_max": 15.76,
        "pressure": 1035.44,
        "sea_level": 1042.98,
        "grnd_level": 1035.44,
        "humidity": 51,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 2.12, "deg": 18.0008},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-22 21:00:00"
}, {
    "dt": 1529712000,
    "main": {
        "temp": 12.47,
        "temp_min": 12.47,
        "temp_max": 12.47,
        "pressure": 1035.85,
        "sea_level": 1043.55,
        "grnd_level": 1035.85,
        "humidity": 58,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 2.51, "deg": 75.5003},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-23 00:00:00"
}, {
    "dt": 1529722800,
    "main": {
        "temp": 9.74,
        "temp_min": 9.74,
        "temp_max": 9.74,
        "pressure": 1035.53,
        "sea_level": 1043.29,
        "grnd_level": 1035.53,
        "humidity": 78,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 1.16, "deg": 124.506},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-23 03:00:00"
}, {
    "dt": 1529733600,
    "main": {
        "temp": 12.57,
        "temp_min": 12.57,
        "temp_max": 12.57,
        "pressure": 1035.15,
        "sea_level": 1042.92,
        "grnd_level": 1035.15,
        "humidity": 74,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 1.26, "deg": 241},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-23 06:00:00"
}, {
    "dt": 1529744400,
    "main": {
        "temp": 17.74,
        "temp_min": 17.74,
        "temp_max": 17.74,
        "pressure": 1034.8,
        "sea_level": 1042.47,
        "grnd_level": 1034.8,
        "humidity": 60,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 2.06, "deg": 288.503},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-23 09:00:00"
}, {
    "dt": 1529755200,
    "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 1034.04,
        "sea_level": 1041.6,
        "grnd_level": 1034.04,
        "humidity": 49,
        "temp_kf": 0
    },
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
    "clouds": {"all": 56},
    "wind": {"speed": 2.92, "deg": 311.5},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-23 12:00:00"
}, {
    "dt": 1529766000,
    "main": {
        "temp": 21.29,
        "temp_min": 21.29,
        "temp_max": 21.29,
        "pressure": 1032.98,
        "sea_level": 1040.52,
        "grnd_level": 1032.98,
        "humidity": 45,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 3.02, "deg": 342.001},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-23 15:00:00"
}, {
    "dt": 1529776800,
    "main": {
        "temp": 20.8,
        "temp_min": 20.8,
        "temp_max": 20.8,
        "pressure": 1032.37,
        "sea_level": 1039.89,
        "grnd_level": 1032.37,
        "humidity": 43,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "02d"}],
    "clouds": {"all": 8},
    "wind": {"speed": 3.58, "deg": 0.00338745},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-23 18:00:00"
}, {
    "dt": 1529787600,
    "main": {
        "temp": 17.38,
        "temp_min": 17.38,
        "temp_max": 17.38,
        "pressure": 1032.84,
        "sea_level": 1040.41,
        "grnd_level": 1032.84,
        "humidity": 48,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "02n"}],
    "clouds": {"all": 8},
    "wind": {"speed": 2.82, "deg": 18.5008},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-23 21:00:00"
}, {
    "dt": 1529798400,
    "main": {
        "temp": 13.88,
        "temp_min": 13.88,
        "temp_max": 13.88,
        "pressure": 1033.26,
        "sea_level": 1040.91,
        "grnd_level": 1033.26,
        "humidity": 67,
        "temp_kf": 0
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n"}],
    "clouds": {"all": 24},
    "wind": {"speed": 2.87, "deg": 96.0004},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-24 00:00:00"
}, {
    "dt": 1529809200,
    "main": {
        "temp": 11.64,
        "temp_min": 11.64,
        "temp_max": 11.64,
        "pressure": 1033.29,
        "sea_level": 1040.87,
        "grnd_level": 1033.29,
        "humidity": 80,
        "temp_kf": 0
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n"}],
    "clouds": {"all": 20},
    "wind": {"speed": 1.46, "deg": 95.5016},
    "rain": {},
    "sys": {"pod": "n"},
    "dt_txt": "2018-06-24 03:00:00"
}, {
    "dt": 1529820000,
    "main": {
        "temp": 13.78,
        "temp_min": 13.78,
        "temp_max": 13.78,
        "pressure": 1033.25,
        "sea_level": 1040.92,
        "grnd_level": 1033.25,
        "humidity": 71,
        "temp_kf": 0
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
    "clouds": {"all": 12},
    "wind": {"speed": 1.5, "deg": 355},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-24 06:00:00"
}, {
    "dt": 1529830800,
    "main": {
        "temp": 18.63,
        "temp_min": 18.63,
        "temp_max": 18.63,
        "pressure": 1033.3,
        "sea_level": 1040.88,
        "grnd_level": 1033.3,
        "humidity": 58,
        "temp_kf": 0
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
    "clouds": {"all": 24},
    "wind": {"speed": 1.76, "deg": 5.00369},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-24 09:00:00"
}, {
    "dt": 1529841600,
    "main": {
        "temp": 21.03,
        "temp_min": 21.03,
        "temp_max": 21.03,
        "pressure": 1032.99,
        "sea_level": 1040.47,
        "grnd_level": 1032.99,
        "humidity": 51,
        "temp_kf": 0
    },
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "clouds": {"all": 32},
    "wind": {"speed": 2.61, "deg": 24.5029},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-24 12:00:00"
}, {
    "dt": 1529852400,
    "main": {
        "temp": 22.54,
        "temp_min": 22.54,
        "temp_max": 22.54,
        "pressure": 1032.15,
        "sea_level": 1039.77,
        "grnd_level": 1032.15,
        "humidity": 46,
        "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "02d"}],
    "clouds": {"all": 8},
    "wind": {"speed": 2.73, "deg": 37.0043},
    "rain": {},
    "sys": {"pod": "d"},
    "dt_txt": "2018-06-24 15:00:00"
}];

export const parsedForecastData = [{
    "day": 0,
    "min": 22.54,
    "max": 11.64,
    "humidity": 62,
    "icon": "02d",
    "main": "Clouds",
    "description": "few clouds"
}, undefined, {
    "day": 2,
    "min": 21.97,
    "max": 21.17,
    "humidity": 69,
    "icon": "10n",
    "main": "Rain",
    "description": "light rain"
}, {
    "day": 3,
    "min": 24.95,
    "max": 18.1,
    "humidity": 72,
    "icon": "01d",
    "main": "Clear",
    "description": "clear sky"
}, {
    "day": 4,
    "min": 18.54,
    "max": 12,
    "humidity": 59,
    "icon": "01d",
    "main": "Clear",
    "description": "clear sky"
}, {
    "day": 5,
    "min": 20.19,
    "max": 11.03,
    "humidity": 56,
    "icon": "01d",
    "main": "Clear",
    "description": "clear sky"
}, {
    "day": 6,
    "min": 21.29,
    "max": 9.74,
    "humidity": 57,
    "icon": "04d",
    "main": "Clouds",
    "description": "broken clouds"
}];
