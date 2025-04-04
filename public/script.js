// Function to fetch and display weather data
function fetchWeather() {
    // Your API URL
    const apiUrl = '/people';

    // Fetch the weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerText = ''; // Clear previous data
            data.forEach(element => {
                weatherDiv.innerText += 'Id:' + element.id + ' => ' + element.name + '\n';
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch weather data on page load
// window.onload = fetchWeather;

// Refresh button event listener
document.getElementById('refresh').addEventListener('click', fetchWeather);