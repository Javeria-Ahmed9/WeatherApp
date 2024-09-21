import "bootstrap/dist/css/bootstrap.min.css";
import { RotatingTriangles } from "react-loader-spinner";
import { useState } from "react";
import listIs from "./CityName.json";
import PropTypes from "prop-types";

export function Weather({ term }) {
  Weather.propTypes = {
    term: PropTypes.func.isRequired,
  };
  let [spin, setSpin] = useState(true);
  let [show, setShow] = useState(false);
  let [cityname, setCityname] = useState("");
  let [data, setData] = useState([]);
  let fun = () => {
    setSpin(false);
  };
  let handleinput = (event) => {
    setShow(true);
    setCityname(event.target.value);

    let searchCities = listIs.filter((val) =>
      val.toLowerCase().startsWith(cityname)
    );
    setData(searchCities);
  };

  let handleSearch = () => {
    Calldata();
    fun();
    setShow(false);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    Calldata();
    fun();
    setShow(false);
  };

  let Calldata = () => {
    term(cityname);
    setCityname("");
  };
  let handleClickName = (val) => {
    setCityname(val);
    setShow(false);
    term(cityname);
    fun();
    setShow(false);
  };
  return (
    <div className="container  text-center">
      <div id="inputbtn" className="container  text-center">
        <h1>Weather</h1>
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            id="inputid"
            value={cityname}
            placeholder="Enter name of city..."
            onChange={handleinput}
          />
        </form>
        {show && (
          <div id="list">
            {data.map((val, ind) => (
              <>
                <li key={ind} onClick={() => handleClickName(val)}>
                  {val}
                </li>
              </>
            ))}
          </div>
        )}

        <button type="button" className="btn btn-info" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div id="loader">{spin && <RotatingTriangles />}</div>
    </div>
  );
}
