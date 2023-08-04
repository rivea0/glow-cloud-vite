import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import DateDisplay from '../src/components/DateDisplay';
import { getDate } from '../src/utils';

describe('DateDisplay', () => {
  it('renders', () => {
    const randomDate = '2023-08-04';
    const dateStr = getDate(randomDate);

    render(<DateDisplay dateTimeStr={randomDate} />);

    const dates = screen.getAllByText(`${dateStr.currentDay}, ${dateStr.currentMonth} ${dateStr.currentDate}`);
    dates.forEach((date) => expect(date).toBeInTheDocument());
  });
});
