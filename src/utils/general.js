export const timeStampToTime = function(timeStamp) {
    const date = new Date(timeStamp*1000);
    return `${date.getHours()}:${date.getMinutes()}`
};

export const weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
