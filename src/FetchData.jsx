import axios from "axios";

export async function FetchData(ter) {
  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${ter}&units=metric&APPID=22f95b9e23b27b9a2acfabb47b7414af`
  );

  return response.data;
}
