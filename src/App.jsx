import { useState } from "react";
import { Weather } from "./Weather";
import { FetchData } from "./FetchData";
import ShowWeather from "./ShowWeather";

function App() {
  let [alldata, setAlldata] = useState("");

  let searchTerm = async (ter) => {
    let weather = await FetchData(ter);
    setAlldata(weather);
  };
  return (
    <>
      {" "}
      <Weather term={searchTerm} />
      <ShowWeather mydata={alldata} />
    </>
  );
}

export default App;
