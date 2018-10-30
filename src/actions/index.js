import axios from "axios";

const API_KEY = "4cde6b1e74da4d49ab326d137c095d96";

const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url= `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type:FETCH_WEATHER,
        payload: request

    };
}

export {FETCH_WEATHER}