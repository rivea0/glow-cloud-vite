import { Daily, DailyValues } from '../types';
import { weatherCodes, getDate, toFahrenheit, zip } from '../utils';
import Icon from './Icon';
import TemperatureStr from './TemperatureStr';

export default function WeatherDaily({ dailyWeatherData, tempChoice }:
{ dailyWeatherData: DailyValues<Daily>, tempChoice: string }) {
  const dailies = zip([
    dailyWeatherData.weathercode,
    dailyWeatherData.apparent_temperature_max,
    dailyWeatherData.time,
  ]);

  return (
    <div className="daily-container" data-testid="daily-container">
      <ul className="daily">
        {dailies.map((item, i) => (
          <div key={i} data-testid="daily-weather">
            <li key={`${i}_0`}>
              <Icon slug={weatherCodes[item[0]].iconSlug} width="50%" />
            </li>
            <li key={`${i}_1`}>
              <TemperatureStr
                temp={tempChoice === 'C' ? item[1].toFixed() : toFahrenheit(item[1]).toFixed()}
                tempChoice={tempChoice}
              />
            </li>
            <li key={`${i}_2`}>{getDate(item[2]).currentDay?.slice(0, 3)}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
