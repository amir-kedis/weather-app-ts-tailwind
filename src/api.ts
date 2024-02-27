import { quotes, quote } from "./quotes";

const fetchWeather = async (city: string) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=ababb842785b4213a51124011241901&q=${city}&days=7`
  );

  const data = await res.json();

  return data;
};

const getWeather = async (city: string) => {
  const weather = await fetchWeather(city);
  return {
    city: weather.location.name as string,
    country: weather.location.country as string,
    curWeather: {
      temp: weather.current.temp_c as number,
      condition: weather.current.condition.text as string,
      icon: weather.current.condition.icon as string,
    },
    forecast: weather.forecast.forecastday.map((day: any) => {
      return {
        date: day.date as string,
        maxTemp: day.day.maxtemp_c as number,
        minTemp: day.day.mintemp_c as number,
        condition: day.day.condition.text as string,
        icon: day.day.condition.icon as string,
      };
    }) as {
      date: string;
      maxTemp: number;
      minTemp: number;
      condition: string;
      icon: string;
    }[],
  };
};

const getQuote = async () => {
  return quotes[Math.floor(Math.random() * quotes.length)] as quote;
};

export { getWeather, getQuote };
