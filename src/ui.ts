import { weatherInfo, quote } from "./api";

type State = {
  weather: weatherInfo;
  quote: quote;
};

const updateUI = (state: State) => {
  const cityEl = document.getElementById("city") as HTMLParagraphElement;
  const curWeatherTempEl = document.getElementById(
    "curWeatherTemp"
  ) as HTMLParagraphElement;
  const curWeatherConditionEl = document.getElementById(
    "curWeatherCondition"
  ) as HTMLParagraphElement;
  const curWeatherIconEl = document.getElementById(
    "curWeatherIcon"
  ) as HTMLImageElement;
  const quoteEl = document.getElementById("quote") as HTMLParagraphElement;
  const authorEl = document.getElementById("author") as HTMLParagraphElement;
  const forecastEl = document.getElementById("forecast") as HTMLDivElement;

  cityEl.textContent = `${state.weather.city}, ${state.weather.country}`;
  curWeatherTempEl.textContent = `${state.weather.curWeather.temp}°C`;
  curWeatherConditionEl.textContent = state.weather.curWeather.condition;
  curWeatherIconEl.src = state.weather.curWeather.icon;
  quoteEl.textContent = state.quote.quote;
  authorEl.textContent = state.quote.author;

  forecastEl.innerHTML = state.weather.forecast
    .map((day) => {
      return `
      <p>${day.date}</p>
      <p>${day.condition}</p>
      <p>${day.maxTemp}°C / ${day.minTemp}°C</p>
      <img src="${day.icon}" alt="${day.condition}" />
    `;
    })
    .join("");
};

const getSearchQuery = (): string => {
  const searchInput = document.getElementById("search") as HTMLInputElement;
  return searchInput.value;
};

export { updateUI, getSearchQuery };
