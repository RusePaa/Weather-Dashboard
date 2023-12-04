async function fetchAPI(url, options) {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

export async function fetchProvincias() {
    const url = 'https://apimocha.com/jjreina/provinces1';
    const data = await fetchAPI(url);
    return data.results;
}

export async function fetchWeather(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32e5bacbd9mshf16f0e6d36e37dbp15c445jsn7fcbde6a3b11',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    return fetchAPI(url, options);
}

export async function fetchForecast(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32e5bacbd9mshf16f0e6d36e37dbp15c445jsn7fcbde6a3b11',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    const data = await fetchAPI(url, options);
    return data.forecast.forecastday;
}