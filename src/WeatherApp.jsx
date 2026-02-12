import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './InfoBox.css'
import { useState } from "react";
export default function WeatherApp(){
    const [weather,setresult] =useState({
      temp:"25 ",
      humidity:21,
      city:"Satara",
      weather:"Sunny",
      feelsLike:"20",
      region:"Maharashtra",
    })

    let updateInfo=(newresult)=>{
        setresult(newresult)
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather app</h1>
            <SearchBox  update={updateInfo}/>
            <InfoBox  info={weather} />
        </div>
    );
}