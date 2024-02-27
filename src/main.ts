import "./index.css";
import "./style.css";

import { getWeather, getQuote } from "./api.ts";
import { updateUI, getSearchQuery } from "./ui.ts";

const weather = await getWeather("Giza");
const quote = await getQuote();

updateUI({ weather, quote });

const setup = async () => {
  const weather = await getWeather("Giza");
  const quote = await getQuote();

  updateUI({ weather, quote });
};

setup();

document.getElementById("search")?.addEventListener("input", async () => {
  const weather = await getWeather(getSearchQuery());
  const quote = await getQuote();

  updateUI({ weather, quote });
});
