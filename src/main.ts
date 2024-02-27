import "./index.css";
import "./style.css";

import { getWeather, getQuote } from "./api.ts";

const weather = await getWeather("London");
const quote = await getQuote();

console.log(weather);
console.log(quote);
