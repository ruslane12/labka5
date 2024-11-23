const API_KEY = "95a86fc9638cc0d996c9c08e79e18eaa";
const weatherDiv = document.getElementById('weather');

document.getElementById('getWeather').addEventListener('click', () => {
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherDiv.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            weatherDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
});
