import { useEffect, useState } from 'react';
import { getLocationData, getWeatherReport } from './apis';
import { ILocationData, WeatherDataObj } from './types';

export function useLocationData() {
  const [locationDataError, setLocationDataError] = useState<PromiseRejectedResult | null>(null);
  const [locationData, setLocationData] = useState<ILocationData>({
    city: '',
    country_name: '',
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    let ignore = false;
    getLocationData()
      .then((data) => {
        if (!ignore) {
          setLocationData(() => data && {
            city: data.city,
            country_name: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude,
          });
        }
      })
      .catch((err: PromiseRejectedResult) => setLocationDataError(err));
    return () => {
      ignore = true;
    };
  }, []);

  return { locationData, locationDataError };
}

export function useWeatherData(latitude: number | null, longitude: number | null) {
  const [weatherDataError, setWeatherDataError] = useState<PromiseRejectedResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<WeatherDataObj>({
    current_weather: {
      temperature: null, weathercode: null, time: '',
    },
    daily: {
      time: [], weathercode: [], apparent_temperature_max: [], sunrise: [], sunset: [],
    },
  });

  useEffect(() => {
    let ignore = false;
    if (latitude && longitude) {
      getWeatherReport(latitude, longitude)
        .then((weatherReport) => {
          if (!ignore) {
            setWeatherData(() => weatherReport && {
              current_weather: {
                temperature: weatherReport.current_weather.temperature,
                weathercode: weatherReport.current_weather.weathercode,
                time: weatherReport.current_weather.time,
              },
              daily: {
                time: Object.values(weatherReport.daily.time),
                weathercode: Object.values(weatherReport.daily.weathercode),
                apparent_temperature_max: Object.values(
                  weatherReport.daily.apparent_temperature_max,
                ),
                sunrise: Object.values(weatherReport.daily.sunrise),
                sunset: Object.values(weatherReport.daily.sunset),
              },
            });
          }
        })
        .catch((err: PromiseRejectedResult) => setWeatherDataError(err))
        .finally(() => setLoading(false));
    }
    return () => {
      ignore = true;
    };
  }, [latitude, longitude]);

  return { weatherData, weatherDataError, loading };
}
