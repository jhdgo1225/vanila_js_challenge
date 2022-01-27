const API_KEY = "f230afea68cbe4f59074e7d561de0e1c";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const info = document.querySelector(".localInfo");
        info.setAttribute("style", "background: rgba(255, 255, 255, 0.5)");
        const weather = document.querySelector(".localInfo__weather");
        const img = document.createElement("img");
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        info.insertBefore(img, weather);
        const temp = weather.querySelector("span:first-child");
        const city = weather.querySelector("span:last-child");
        temp.innerText = `${Math.floor(data.main.temp)}ºC`;
        city.innerText = data.name;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);