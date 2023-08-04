import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getDate } from '../src/utils';
import WeatherCurrent from '../src/components/WeatherCurrent';

const noop = () => { };
const mockWeatherCurrentProps = {
  currentWeatherData: { temperature: 32, weathercode: 0, time: '2023-08-04T09:00' },
  city: 'Paris',
  country: 'France',
  handleClick: noop,
  tempChoice: 'C',
  activeBtn: 'C',
};

describe('WeatherCurrent', () => {
  it('renders', () => {
    render(<WeatherCurrent
      currentWeatherData={mockWeatherCurrentProps.currentWeatherData}
      city={mockWeatherCurrentProps.city}
      country={mockWeatherCurrentProps.country}
      handleClick={mockWeatherCurrentProps.handleClick}
      tempChoice={mockWeatherCurrentProps.tempChoice}
      activeBtn={mockWeatherCurrentProps.activeBtn}
    />);
  });

  it('should display the temperature', () => {
    render(<WeatherCurrent
      currentWeatherData={mockWeatherCurrentProps.currentWeatherData}
      city={mockWeatherCurrentProps.city}
      country={mockWeatherCurrentProps.country}
      handleClick={mockWeatherCurrentProps.handleClick}
      tempChoice={mockWeatherCurrentProps.tempChoice}
      activeBtn={mockWeatherCurrentProps.activeBtn}
    />);

    expect(screen.getByTestId('temperature'))
      .toHaveTextContent(`${mockWeatherCurrentProps.currentWeatherData.temperature}°C`);
  });

  it('should display the temperature choice buttons', () => {
    render(<WeatherCurrent
      currentWeatherData={mockWeatherCurrentProps.currentWeatherData}
      city={mockWeatherCurrentProps.city}
      country={mockWeatherCurrentProps.country}
      handleClick={mockWeatherCurrentProps.handleClick}
      tempChoice={mockWeatherCurrentProps.tempChoice}
      activeBtn={mockWeatherCurrentProps.activeBtn}
    />);

    expect(screen.getByRole('button', { name: '°C' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '°F' })).toBeInTheDocument();
  });

  it('should display the date', () => {
    render(<WeatherCurrent
      currentWeatherData={mockWeatherCurrentProps.currentWeatherData}
      city={mockWeatherCurrentProps.city}
      country={mockWeatherCurrentProps.country}
      handleClick={mockWeatherCurrentProps.handleClick}
      tempChoice={mockWeatherCurrentProps.tempChoice}
      activeBtn={mockWeatherCurrentProps.activeBtn}
    />);

    const randomDate = '2023-08-04';
    const dateStr = getDate(randomDate);

    expect(screen.getByText(`${dateStr.currentDay}, ${dateStr.currentMonth} ${dateStr.currentDate}`))
      .toBeInTheDocument();
  });

  it('should display the current weather description text', () => {
    render(<WeatherCurrent
      currentWeatherData={mockWeatherCurrentProps.currentWeatherData}
      city={mockWeatherCurrentProps.city}
      country={mockWeatherCurrentProps.country}
      handleClick={mockWeatherCurrentProps.handleClick}
      tempChoice={mockWeatherCurrentProps.tempChoice}
      activeBtn={mockWeatherCurrentProps.activeBtn}
    />);

    expect(screen.getByTestId('weather-current-description'))
      .toHaveTextContent('Clear sky in Paris, France');
  });
});
