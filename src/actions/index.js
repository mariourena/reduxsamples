import Axios from 'axios';

const API_KEY = 'aa749a303ada2c396bbf3259493933d7';
const WEATHER_API_URL = (city = 'New York') => {
	city = encodeURI(city);
	return `//api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`
}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	return {
		type: FETCH_WEATHER
		, payload: Axios.get(WEATHER_API_URL(city)) //promise
	};
}