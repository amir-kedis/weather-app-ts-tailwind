import "./index.css";
import "./style.css";

import { getWeather, getQuote } from "./api.ts";
import updateUI from "./ui.ts";

const weather = await getWeather("London");
const quote = await getQuote();

console.log(weather);
console.log(quote);

updateUI({ weather, quote });
