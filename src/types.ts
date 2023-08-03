import { MouseEvent, KeyboardEvent } from 'react';

export type JSONValue = string
| number
| boolean
| null
| JSONValue[]
| { [key: string]: JSONValue }
| undefined;

export type DailyValues<T> = {
  [K in keyof T]: T[K] extends { [k: number]: infer U } ? U[] : never;
};

export type WeirdParagraphKeys = 'sun' | 'overcast' | 'fog' | 'rain' | 'misc';
export type AstroKeys = 'sunrise' | 'sunset' | 'dateToday';

interface CurrentWeather {
  weathercode: number | null;
  temperature: number | null;
  time: string;
}

export interface Daily {
  time: { [k: number]: string };
  weathercode: { [k: number]: number };
  apparent_temperature_max: { [k: number]: number };
  sunrise: { [k: number]: string };
  sunset: { [k: number]: string };
}

export interface ILocationData {
  city: string;
  country_name: string;
  latitude: number | null;
  longitude: number | null;
}

export interface IWeatherReport {
  current_weather: CurrentWeather & { [k: string]: JSONValue };
  daily: Daily & { [k: string]: JSONValue };
  [k: string]: JSONValue;
}

export interface WeatherDataObj {
  current_weather: CurrentWeather;
  daily: DailyValues<Daily>
}

// For component props
export interface PropsBase {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void | null;
}

export interface MainProps {
  weatherData: WeatherDataObj;
  locationData: ILocationData
}

export interface WeatherCurrentProps extends PropsBase {
  currentWeatherData: CurrentWeather;
  city: string;
  country: string;
  tempChoice: string;
  activeBtn: string;
}

export interface RatingIconProps {
  id: number;
  index: number;
  iconProps: {
    rating: number,
    hoverRating: number,
    onMouseEnter: (index: number) => void,
    onMouseLeave: () => void,
    onSaveRating: (index: number) => void,
    onKeyUp: (e: KeyboardEvent<HTMLDivElement>) => void,
    onKeyDown: () => void,
  }
}

// For variables
export interface DateTime {
  currentDay: string | null;
  currentMonth: string | null;
  currentDate: number | null
}

export interface WeatherWeirdness {
  id: number;
  paragraphs: string[];
  paragraph: string;
  source?: { url: string, name: string }
}
