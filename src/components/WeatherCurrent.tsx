import { useMemo } from 'react';
import { WeatherCurrentProps } from '../types';
import { capitalize, getSlug, toFahrenheit, weatherCodes } from '../utils';
import Icon from './Icon';
import TemperatureStr from './TemperatureStr';
import TemperatureChoiceButtons from './TemperatureChoiceButtons';
import DateDisplay from './DateDisplay';

export default function WeatherCurrent({ currentWeatherData, city, country,
  handleClick, tempChoice, activeBtn }: WeatherCurrentProps) {
  const slug = useMemo(
    () => getSlug(currentWeatherData?.weathercode),
    [currentWeatherData?.weathercode],
  );
  return (
    <div className="weather-current">
      <div className="weather-current-main">
        {slug && <Icon slug={slug} width="25%" />}
        <div className="weather-current-tempdate">
          <p className="temperature">
            {currentWeatherData.temperature && (
            <TemperatureStr
              temp={tempChoice === 'C'
                ? currentWeatherData.temperature.toFixed()
                : toFahrenheit(currentWeatherData.temperature).toFixed()}
              tempChoice={tempChoice}
            />
            )}
          </p>
          <TemperatureChoiceButtons handleClick={handleClick} activeBtn={activeBtn} />
          <DateDisplay dateTimeStr={currentWeatherData.time} />
        </div>
      </div>
      <p>
        {typeof currentWeatherData.weathercode === 'number'
        && (
        <span className="weather-description">
          {capitalize(weatherCodes[currentWeatherData.weathercode].description)}
        </span>
        )}
        {(!city || !country) ? ('') : ` in ${city}, ${country}`}
      </p>
    </div>
  );
}
