export default function(forecastData) {

    return parse(group(forecastData));

    function parse(grouped) {
        return grouped.map((group, key) => {
            const tempMinList = group.map(item => item.main.temp_min);
            const tempMaxList = group.map(item => item.main.temp_max);
            const tempMaxHumidity = group.map(item => item.main.humidity);
            const status = group.map(item => item.weather[0]);
            const weather = status[Math.round(status.length / 2)];

            group = {
                day: key,
                min: tempMinList.reduce(min),
                max: tempMaxList.reduce(max),
                humidity: average(tempMaxHumidity),
                icon: weather.icon,
                main: weather.main,
                description: weather.description,
            };

            return group;
        });
    }

    function group(list) {
        return list.reduce((group, list) => {
            const day = new Date(list.dt*1000).getDay();
            group[day] = group[day] || [];
            group[day].push(list);
            return group;
        }, []);
    }

    function average(items) {
        return Math.round(items.reduce(sum, 0) / items.length);
    }

    function min(a, b) {
        return a > b ? a : b;
    }

    function max(a, b) {
        return a < b ? a : b;
    }

    function sum(a, b) {
        return a + b;
    }

};
