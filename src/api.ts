import { quotes, quote } from "./quotes";

const fetchWeather = async (city: string) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=ababb842785b4213a51124011241901&q=${city}&days=7`
  );

  const data = await res.json();

  return data;
};

type weatherInfo = {
  city: string;
  country: string;
  curWeather: {
    temp: number;
    condition: string;
    icon: string;
  };
  forecast: {
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
    icon: string;
  }[];
};

const getWeather = async (city: string): Promise<weatherInfo> => {
  const weather = await fetchWeather(city);
  return {
    city: weather.location.name,
    country: weather.location.country,
    curWeather: {
      temp: weather.current.temp_c,
      condition: weather.current.condition.text,
      icon: weather.current.condition.icon,
    },
    forecast: weather.forecast.forecastday.map((day: any) => {
      return {
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
      };
    }),
  };
};

const getQuote = async () => {
  return quotes[Math.floor(Math.random() * quotes.length)] as quote;
};

export { getWeather, getQuote };
export type { weatherInfo, quote };
