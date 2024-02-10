import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const hours = new Date().getHours();
  let time = new Date().toLocaleTimeString();
  let greet = "";
  const [currTime, setCurrTime] = useState(time);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("noida");

  //function to get and show current time
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  //to increment timer every second
  setInterval(updateTime, 1000);

  //show greet according to time hours
  if (hours < 12) {
    greet = "Good morning";
  } else if (hours < 16) {
    greet = "Good afternoon";
  } else if (hours < 20) {
    greet = "Good evening";
  } else {
    greet = "Good night";
  }

  //function to fetch weather updates using openweatherapi
  useEffect(() => {
    const API_KEY = "c21f00db0213bf819fa9d709032ec69c";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    ).then(res=> res.json())
      .then(result=>setWeather(result.weather[0].description))
      .catch((err) => {
        console.log("Error fetching data from the api");
      });
  }, [city]);

  return (
    <div className="App">
      <h1>Hey Swapnil</h1>
      <h2>
        {greet}. The current time is {currTime}. The weather at your location is{" "}
        {weather}{" "}
      </h2>
    </div>
  );
}

export default App;
