export { geoLocation };

async function geoLocation() {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(response => {
            resolve(response.coords);
        });
    });
}
