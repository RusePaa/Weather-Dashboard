import Weather from './weather.js';
import { fetchProvincias, fetchWeather, fetchForecast } from './api.js';

const select = document.getElementById('city');
const tiempoLocal = document.getElementById('local_time');
const temperatura = document.querySelector('.current-weather h6:nth-child(2)');
const viento = document.querySelector('.current-weather h6:nth-child(3)');
const humedad = document.querySelector('.current-weather h6:nth-child(4)');
const predicciones = document.querySelector('.container-forecast');

function actualizarProvincia(weather, forecast) {
    tiempoLocal.textContent = `${select.value} (${weather.getTiempoLocal()})`;
    temperatura.textContent = `Temperature: ${weather.getTemperatura()}°C`;
    viento.textContent = `Wind: ${weather.getViento()}KpH`;
    humedad.textContent = `Humidity: ${weather.getHumedad()}%`;

    predicciones.innerHTML = '';
    forecast.forEach(day => {
        const card = document.createElement('div');
        card.className = 'card-forecast';
        card.innerHTML = 
        `<p>${day.date}</p>
        <p>Avg Temp: ${day.day.avgtemp_c}°C</p>
        <p>Max Wind: ${day.day.maxwind_kph}KpH</p>
        <p>Avg Humidity: ${day.day.avghumidity}%</p>`;
        predicciones.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const provinces = await fetchProvincias();
        provinces.forEach(item => {
            const option = document.createElement('option');
            option.text = item.provincia;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Error:', error);
    }

    select.addEventListener('change', async (event) => {
        const provincia = event.target.value;
        try {
            const weatherData = await fetchWeather(provincia);
            const weather = new Weather(weatherData);
            const forecast = await fetchForecast(provincia);
            actualizarProvincia(weather, forecast);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});