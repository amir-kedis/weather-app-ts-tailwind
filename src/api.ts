const fetchWeather = async (city: string) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=ababb842785b4213a51124011241901&q=${city}&days=7`
  );

  const data = await res.json();

  console.log(data);

  return data;
};

const getWeather = async (city: string) => {
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

export default getWeather;
