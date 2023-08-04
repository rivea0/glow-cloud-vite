import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DailyValues, Daily } from '../src/types';

import WeatherDaily from '../src/components/WeatherDaily';

const mockWeatherDaily: DailyValues<Daily> = {
  time: ['2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09', '2023-08-10'],
  weathercode: [80, 61, 61, 3, 3, 1, 95],
  apparent_temperature_max: [20.4, 18.3, 16.8, 19.7, 22.0, 30.8, 33.4],
  sunrise: ['2023-08-04T06:28', '2023-08-05T06:29', '2023-08-06T06:30', '2023-08-07T06:32', '2023-08-08T06:33', '2023-08-09T06:34', '2023-08-10T06:36'],
  sunset: ['2023-08-04T21:25', '2023-08-05T21:24', '2023-08-06T21:22', '2023-08-07T21:21', '2023-08-08T21:19', '2023-08-09T21:17', '2023-08-10T21:16'],
};

describe('WeatherDaily', () => {
  it('renders', () => {
    render(<WeatherDaily dailyWeatherData={mockWeatherDaily} tempChoice="C" />);
  });

  it('should display daily container', () => {
    render(<WeatherDaily dailyWeatherData={mockWeatherDaily} tempChoice="C" />);
    expect(screen.getByTestId('daily-container')).toBeInTheDocument();
  });

  it('should display the daily weather elements with Celsius', () => {
    render(<WeatherDaily dailyWeatherData={mockWeatherDaily} tempChoice="C" />);
    const dailyWeatherElements = screen.getAllByTestId('daily-weather');
    dailyWeatherElements.forEach((el) => {
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('C');
    });
  });

  it('should display the daily weather elements with Fahrenheit', () => {
    render(<WeatherDaily dailyWeatherData={mockWeatherDaily} tempChoice="F" />);
    const dailyWeatherElements = screen.getAllByTestId('daily-weather');
    dailyWeatherElements.forEach((el) => {
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('F');
    });
  });
});
