import PropTypes from "prop-types";
export default function ShowWeather({ mydata }) {
  ShowWeather.propTypes = {
    mydata: PropTypes.object.isRequired,
  };
  if (typeof mydata.main !== "undefined") {
    switch (mydata.weather[0].main) {
      case "Clear":
        document.body.style.backgroundImage = `url(${"https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D"})`;
        break;
      case "Haze":
        document.body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhemUlMjB3ZWF0aGVyJ3xlbnwwfHwwfHx8MA%3D%3D"})`;
        break;
      case "Mist":
        document.body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvZ3xlbnwwfHwwfHx8MA%3D%3D"})`;
        break;
      case "Clouds":
        document.body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1516821371801-280cf8069a4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D"})`;
        break;
      case "Rain":
        document.body.style.backgroundImage = `url(${"https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"})`;
        break;
      case "Smoke":
        document.body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1574198886571-fd4f65c06149?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21va2UlMjB3ZWF0aGVyfGVufDB8fDB8fHww"})`;
        break;
      default:
        document.body.style.backgroundImage = `url(${"https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"})`;
        break;
    }
  }
  return (
    <div id="dataShow" className="container text-center">
      {typeof mydata.main !== "undefined" ? (
        <div className="row">
          <div className="col-5">
            <h2>city</h2>
            <h2>temp</h2>
            <h2>feels_like</h2>
            <h2>condition</h2>
            <h2>description</h2>
          </div>
          <div className="col-2">
            <h2>:</h2>
            <h2>:</h2>
            <h2>:</h2>
            <h2>:</h2>
            <h2>:</h2>
          </div>
          <div className="col-5">
            <h2>{mydata.name}</h2>
            <h2>{mydata.main.temp}°C</h2>
            <h2>{mydata.main.feels_like}°C</h2>
            <h2>{mydata.weather[0].main}</h2>
            <h2>{mydata.weather[0].description}</h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
