import { describe, vi } from 'vitest';
import type { MockInstance } from 'vitest';
import { render } from '@testing-library/react';
import MainContainer from '../src/components/MainContainer';
import * as customHooks from '../src/customHooks';
import { ILocationData, WeatherDataObj } from '../src/types';
import NotFound from '../src/components/NotFound';
import Loading from '../src/components/Loading';

const mockLocationDataResult: {
  locationData: ILocationData;
  locationDataError: PromiseRejectedResult | null;
} = { locationData: { city: 'Paris', country_name: 'France', latitude: 48.8588897, longitude: 2.3199997 },
  locationDataError: null };

const mockWeatherDataResult: {
  weatherData: WeatherDataObj,
  weatherDataError: PromiseRejectedResult | null,
  loading: boolean } = { weatherData: { current_weather: {
  temperature: 32,
  weathercode: 0,
  time: '2023-08-04T09:00',
},
daily: {
  time: ['2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09', '2023-08-10'],
  weathercode: [80, 61, 61, 3, 3, 1, 95],
  apparent_temperature_max: [20.4, 18.3, 16.8, 19.7, 22.0, 30.8, 33.4],
  sunrise: ['2023-08-04T06:28', '2023-08-05T06:29', '2023-08-06T06:30', '2023-08-07T06:32', '2023-08-08T06:33', '2023-08-09T06:34', '2023-08-10T06:36'],
  sunset: ['2023-08-04T21:25', '2023-08-05T21:24', '2023-08-06T21:22', '2023-08-07T21:21', '2023-08-08T21:19', '2023-08-09T21:17', '2023-08-10T21:16'],
} },
weatherDataError: null,
loading: false };

describe('MainContainer', () => {
  // let mockUseLocationData: MockInstance<[], {
  //   locationData: ILocationData; locationDataError: PromiseRejectedResult | null | undefined;
  // }>;
  let mockUseLocationData: MockInstance<[]>;

  // let mockUseWeatherData: MockInstance<[latitude: number | null, longitude: number | null],
  // { weatherData: WeatherDataObj;
  //   weatherDataError: PromiseRejectedResult | null; loading: boolean; }>;
  let mockUseWeatherData: MockInstance<[latitude: number | null, longitude: number | null]>;

  beforeEach(() => {
    mockUseLocationData = vi.spyOn(
      customHooks,
      'useLocationData',
    ).mockImplementation(() => mockLocationDataResult);
    mockUseWeatherData = vi.spyOn(
      customHooks,
      'useWeatherData',
    ).mockImplementation(() => mockWeatherDataResult);
  });

  afterEach(() => {
    mockUseLocationData.mockRestore();
    mockUseWeatherData.mockRestore();
  });

  it('renders', () => {
    render(<MainContainer />);
  });

  it('calls useLocationData', () => {
    render(<MainContainer />);
    expect(mockUseLocationData).toHaveBeenCalledTimes(1);
    expect(mockUseLocationData).toHaveReturned();
  });

  it('calls useWeatherData', () => {
    render(<MainContainer />);
    expect(mockUseWeatherData).toHaveBeenCalledTimes(1);
    expect(mockUseWeatherData).toHaveReturned();
  });

  it('renders the NotFound component when location data cannot be found', async () => {
    try {
      mockLocationDataResult.locationDataError = await Promise.reject();
    } catch (e) {
      render(<NotFound />);
    }
  });

  it('renders the NotFound component when weather data cannot be found', async () => {
    try {
      mockWeatherDataResult.weatherDataError = await Promise.reject();
    } catch (e) {
      render(<NotFound />);
    }
  });

  it('renders the Loading component when loading is true', () => {
    mockWeatherDataResult.loading = true;
    render(<Loading />);
  });
});
