const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
let button = document.getElementById("btn");
button.onclick = function () {
    searchWeather();
};
function searchWeather() {
    let searchInput = document.getElementById("search").value.trim();
    let weather = document.getElementById("weather");
    weather.innerHTML = "";
    if (searchInput === "") {
        alert("Không hợp lệ")
    }else{
        let filteredCity = [];
        for (let city in weatherData) {
            if (city.toLowerCase().includes(searchInput.toLowerCase())) {
                filteredCity.push(city);
            }
        }
        filteredCity.forEach(city => {
            let data = weatherData[city];
            weather.innerHTML += `
                <h2 id="city">${city}</h2>
                <div class="container">        
                    <span>${data.icon} ${data.temperature}&deg;C</span>
                    <div class="parameter">
                        <p>${data.description}</p>
                        <p>Độ ẩm: ${data.humidity}%</p>
                        <p>Tốc độ gió: ${data.windSpeed} km/h</p>
                    </div>
                </div>`;
        });
    }
}