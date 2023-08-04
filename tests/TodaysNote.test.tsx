import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import TodaysNote from '../src/components/TodaysNote';

describe('TodaysNote', () => {
  it('renders', () => {
    render(<TodaysNote weathercode={0} />);
  });

  it('should display the note', () => {
    render(<TodaysNote weathercode={0} />);
    expect(screen.getByText('A Note for Today')).toBeInTheDocument();
    expect(screen.getByTestId('note')).not.toBeNull();
    expect(screen.getByText('Source of inspiration:')).toBeInTheDocument();
    expect(screen.getByTestId('source-link')).not.toBeNull();
  });
});
