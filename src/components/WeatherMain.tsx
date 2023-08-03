import { useState, MouseEvent } from 'react';
import { MainProps } from '../types';
import WeatherCurrent from './WeatherCurrent';
import WeatherDaily from './WeatherDaily';

export default function WeatherMain({ weatherData, locationData }: MainProps) {
  const [tempChoice, setTempChoice] = useState('C');
  const [activeBtn, setActiveBtn] = useState(tempChoice);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const { value, id } = e.target as HTMLButtonElement;
    if (typeof value === 'string') {
      setTempChoice(value);
    }
    setActiveBtn(id);
  }

  return (
    <>
      <WeatherCurrent
        currentWeatherData={weatherData.current_weather}
        city={locationData.city}
        country={locationData.country_name}
        tempChoice={tempChoice}
        handleClick={handleClick}
        activeBtn={activeBtn}
      />
      <WeatherDaily dailyWeatherData={weatherData.daily} tempChoice={tempChoice} />
    </>
  );
}
