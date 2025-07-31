const API_KEY = "e78fafb4e4fa365fdf482b0cae55306c";

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}℃ /`;
        city.innerText = data.name;
    });
};

function onGeoError() {
    alert("위치 정보 없이는 날씨를 제공하기 어려워요!");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

