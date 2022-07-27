import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_WEATHER_KEY,
    lat: '28.7041',
    lon: '77.1025',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div className="absolute flex flex-col ml-3 font-opensans top-12 left-40">
      <div className="flex flex-col py-3 pl-3 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Delhi"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
      </div>
    </div>
  );
};

export default Weather;
