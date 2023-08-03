import { DateTime } from './types';

// See https://open-meteo.com/en/docs
export const weatherCodes: Record<number, Record<'description' | 'iconSlug', string>> = {
  0: {
    description: 'clear sky',
    iconSlug: 'clear-day',
  },
  1: {
    description: 'mainly clear',
    iconSlug: 'clear-day',
  },
  2: {
    description: 'partly cloudy',
    iconSlug: 'partly-cloudy-day',
  },
  3: {
    description: 'clouds',
    iconSlug: 'overcast',
  },
  45: {
    description: 'fog',
    iconSlug: 'fog',
  },
  48: {
    description: 'depositing rime fog',
    iconSlug: 'fog',
  },
  51: {
    description: 'light drizzle',
    iconSlug: 'drizzle',
  },
  53: {
    description: 'moderate drizzle',
    iconSlug: 'drizzle',
  },
  55: {
    description: 'dense intensity drizzle',
    iconSlug: 'drizzle',
  },
  56: {
    description: 'light freezing drizzle',
    iconSlug: 'drizzle',
  },
  57: {
    description: 'dense intensity freezing drizzle',
    iconSlug: 'drizzle',
  },
  61: {
    description: 'slight rain',
    iconSlug: 'drizzle',
  },
  63: {
    description: 'moderate rain',
    iconSlug: 'rain',
  },
  65: {
    description: 'heavy intensity rain',
    iconSlug: 'rain',
  },
  66: {
    description: 'light freezing rain',
    iconSlug: 'rain',
  },
  67: {
    description: 'heavy intensity freezing rain',
    iconSlug: 'rain',
  },
  71: {
    description: 'slight snow fall',
    iconSlug: 'snow',
  },
  73: {
    description: 'moderate snow fall',
    iconSlug: 'snow',
  },
  75: {
    description: 'heavy intensity snow fall',
    iconSlug: 'snow',
  },
  77: {
    description: 'snow grains',
    iconSlug: 'snow',
  },
  80: {
    description: 'slight rain showers',
    iconSlug: 'rain',
  },
  81: {
    description: 'moderate rain showers',
    iconSlug: 'rain',
  },
  82: {
    description: 'violent rain showers',
    iconSlug: 'rain',
  },
  85: {
    description: 'slight snow showers',
    iconSlug: 'snow',
  },
  86: {
    description: 'heavy snow showers',
    iconSlug: 'snow',
  },
  95: {
    description: 'thunderstorm',
    iconSlug: 'thunderstorms',
  },
  96: {
    description: 'thunderstorm with slight hail',
    iconSlug: 'hail',
  },
  99: {
    description: 'thunderstorm with heavy hail',
    iconSlug: 'hail',
  },
};

export function getDate(dateStr: string) {
  const dateFormatted: DateTime = {
    currentDay: '',
    currentMonth: '',
    currentDate: null,
  };
  const d = new Date(dateStr);
  dateFormatted.currentDay = d.toLocaleString('en-us', { weekday: 'long' });
  dateFormatted.currentMonth = d.toLocaleString('en-us', { month: 'long' });
  dateFormatted.currentDate = d.getDate();
  return dateFormatted;
}

export function getHour(dateStr: string) {
  return new Date(dateStr).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric' });
}

export function toFahrenheit(degree: number) {
  return (degree * 1.8) + 32;
}

export function capitalize(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getRandomIndex(upTo: number) {
  return Math.floor(Math.random() * upTo);
}

export function zip(rows: [number[], number[], string[]]) {
  return rows[0].map((_, i) => rows.map((row) => row[i])) as [number, number, string][];
}

export function getSlug(weathercode: number | null) {
  let slug;
  if (weathercode !== null) {
    slug = weatherCodes[weathercode].iconSlug;
  }
  return slug;
}
