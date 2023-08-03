import { ILocationData, IWeatherReport, JSONValue } from './types';

export async function getLocationData() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (response.status >= 400 && response.status < 500) {
      throw new Error('Client error');
    } else if (response.status >= 500) {
      throw new Error('Server error');
    }
    return await (response.json() as Promise<ILocationData & { [k: string]: JSONValue }>);
  } catch (e) {
    throw new Error('Cannot get location data!');
  }
}

export async function getWeatherReport(lat: number, lon: number) {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,apparent_temperature_max,sunrise,sunset&current_weather=true&timezone=auto`);
    if (response.status >= 400 && response.status < 500) {
      throw new Error('Client error');
    } else if (response.status >= 500) {
      throw new Error('Server error');
    }
    return await (response.json() as Promise<IWeatherReport>);
  } catch (e) {
    throw new Error('Cannot get weather data for this location!');
  }
}
