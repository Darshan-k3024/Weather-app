import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function SearchBox({update}) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.weatherapi.com/v1/current.json";
  const API_KEY = "3444f88138154ae2bda43855260902";

  let getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_URL}?key=${API_KEY}&q=${city}`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse); // ✅ city weather इथे येईल
  let result = {
  temp: jsonResponse.current.temp_c,
  feelsLike: jsonResponse.current.feelslike_c,
  humidity: jsonResponse.current.humidity,
  weather: jsonResponse.current.condition.text,
  city:jsonResponse.location.name,
  region:jsonResponse.location.region,

};

console.log(result);
return result;

  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);   
    setCity("");
   let newres=  await getWeatherInfo(city); // ✅ ONLY FIX
   update(newres)
  };

  return (
    <div className="search-box">
      <h3>Search weather by cities</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Cities"
          variant="outlined"
          onChange={handleChange}

          value={city}
          required
        />
        <br /><br />
    
        <Button variant="contained" type="submit">
          Search
        </Button> 
        
        
      </form>
    </div>
  );
}
