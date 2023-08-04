import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AstroDisplay from '../src/components/AstroDisplay';
import SunDisplay from '../src/components/SunDisplay';
import MoonDisplay from '../src/components/MoonDisplay';
import { getDate, getHour } from '../src/utils';

const mockAstroProps = { sunrise: '2023-08-04T06:28', sunset: '2023-08-04T21:25', dateToday: '2023-08-04' };

describe('AstroDisplay', () => {
  it('renders', () => {
    render(<AstroDisplay
      sunrise={mockAstroProps.sunrise}
      sunset={mockAstroProps.sunset}
      dateToday={mockAstroProps.dateToday}
    />);
  });

  it('should display the date elements', () => {
    render(<AstroDisplay
      sunrise={mockAstroProps.sunrise}
      sunset={mockAstroProps.sunset}
      dateToday={mockAstroProps.dateToday}
    />);
    const dateStr = getDate(mockAstroProps.dateToday);
    const dates = screen.getAllByText(`${dateStr.currentDay}, ${dateStr.currentMonth} ${dateStr.currentDate}`);
    dates.forEach((date) => expect(date).toBeInTheDocument());
  });

  it('should display the SunDisplay component', () => {
    render(<SunDisplay
      sunrise={mockAstroProps.sunrise}
      sunset={mockAstroProps.sunset}
      dateToday={mockAstroProps.dateToday}
    />);
    expect(screen.getByText('What about the Sun?')).toBeInTheDocument();

    expect(screen.getByAltText('sunrise animated icon')).toBeInTheDocument();
    const sunriseHour = getHour(mockAstroProps.sunrise);
    expect(screen.getByTestId('sunrise')).toHaveTextContent(`It rises at ${sunriseHour} on this day, oblivious to its significance on our tiny planet.`);

    expect(screen.getByAltText('sunset animated icon')).toBeInTheDocument();
    const sunsetHour = getHour(mockAstroProps.sunset);
    expect(screen.getByTestId('sunset')).toHaveTextContent(`It sets at ${sunsetHour}, seems frightened. Be a shame if anything happened to it.`);
  });

  it('should display the MoonDisplay component', () => {
    render(<MoonDisplay dateToday={mockAstroProps.dateToday} />);
    expect(screen.getByText('What about the Moon?')).toBeInTheDocument();
    expect(screen.getByAltText('starry-night animated icon')).toBeInTheDocument();
    expect(screen.getByText("Well, let's just say that the Moon is going through a phase."));
  });
});
