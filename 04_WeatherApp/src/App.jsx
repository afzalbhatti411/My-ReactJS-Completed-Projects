import { useState } from "react";

const API_KEY = "f024ed1134f8b276ac4849e6694d77de";

export default function WeatherApp(){
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function getWeatherData(e){
    e.preventDefault();
    if(!city.trim()) return;
    setWeather(null);
    setLoading(true);
    setError('');
      try{
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    if(!response.ok) throw new Error('City Not Found. Try again')
      const data = await response.json();
    setWeather({
      temperature: Math.round(data.main.temp),
      cityName: data.name,
      country: data.sys.country, 
      description: data.weather[0].description,
      icon: data.weather[0].icon
    })
  } catch(err){
    setError(err.message);
  }finally{
    setLoading(false);
  }
  }  
  return(
    <div style={{
      maxWidth: "400px",
      margin: "60px auto",
      padding: "10px",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      <h2 style={{
        fontSize: "40px",
        fontWeight: "bold",
        color:" #333",
         
      }}> Weather App </h2>
      <form onSubmit={getWeatherData}>
      <input type="text" placeholder="Enter your city here..." value={city} onChange={(e)=>setCity(e.target.value)} 
      style={{
        padding: "10px 13px",
        border: "2px solid",
        borderRadius: "5px",
        outline: "none",
        fontSize: "15px",
        width: "240px"
      }}
      />
      <button style={{
        padding: "14px 10px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "2px solid",
        borderRadius: "10px",
        marginLeft: "8px",
        width: "100px",
        backgroundColor: "lightblue"

      }}>Search</button>
      </form>
      {error && <p style={{fontSize: "30px", marginTop: "30px"}}> {error} </p>}

      {weather && <div 
      style={{
        backgroundColor: "lightpink",
        border: "2px solid #0e0d0d",
        borderRadius: "15px",
        marginTop: "20px",
      }}>
        <h2 style={{
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold"
        }}> {weather.cityName} {weather.country} </h2>
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt=" weather icon" />
        <span style={{
          fontSize: "40px",
          color: "#888"
        }}>{weather.temperature}°C </span>
        <p style={{
          fontSize: "30px",
          marginBottom: "20px"
        }}> {weather.description} </p>
        </div>}
    </div>
  )
}