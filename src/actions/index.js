import axios from 'axios';

const API_KEY = 'aead2500629cdf7967f6095aaa5ec100';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) { //city je ono sto se unosi u input
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        playload: request
    }
}