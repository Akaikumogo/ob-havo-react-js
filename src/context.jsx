/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import dClear from "./backgrounds/dClear.png";
import dClouds from "./backgrounds/dClouds.png";
import dMist from "./backgrounds/dMist.png";
import dSnow from "./backgrounds/dSnow.png";
import dRain from "./backgrounds/dRain.png";

import nClear from "./backgrounds/nClear.png";
import nClouds from "./backgrounds/nClouds.png";
import nMist from "./backgrounds/nMist.png";
import nSnow from "./backgrounds/nSnow.png";
import nRain from "./backgrounds/nRain.png";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [cityName, setCityName] = useState();

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY; // Use process.env instead of import.meta.env

  const setCity = (value) => {
    setCityName(value);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsLoading(true);
    return () => clearTimeout(timer);
  };

  const tarjima = {
    Clear: "ochiq",
    Clouds: "bulutli",
    Snow: "qorli",
    Mist: "tumanli",
    Smoke: "tutunli",
    Haze: "tumanli",
    Dust: "havo changli",
    Fog: "quyuq tuman mavjud",
    Sand: "yuqori darajada changlangan",
    Ash: "havo tarkibida kul miqdori ko'p",
    Squall: "yomg'irli",
    Tornado: "Bo'ron bo'lmoqda",
    Rain: "yomg'irli",
    Drizzle: "yomg'irli",
    Thunderstorm: "chaqmoq va momaqaldiroq mavjud",
  };
  const getBackgroundImage = (pod, weather) => {
    if (pod === "d") {
      switch (weather) {
        case "Clear":
          return dClear;
        case "Clouds":
          return dClouds;
        case "Mist":
          return dMist;
        case "Snow":
          return dSnow;
        case "Rain":
          return dRain;
      }
    } else if (pod === "n") {
      switch (weather) {
        case "Clear":
          return nClear;
        case "Clouds":
          return nClouds;
        case "Mist":
          return nMist;
        case "Snow":
          return nSnow;
        case "Rain":
          return nRain;
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${
            cityName ? cityName : "O'zbekiston"
          }&appid=${apiKey}`
        );
        setWeatherData(response.data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    };
    getWeather();
  }, [cityName]);

  return (
    <AppContext.Provider
      value={{
        tarjima,
        setCity,
        setCityName,
        weatherData,
        isLoading,
        isError,
        getBackgroundImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
