import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
  it('renders', () => {
    render(<App />);
  });

  it('should display the main div', () => {
    render(<App />);
    expect(screen.getByTestId('main-div')).toBeInTheDocument();
  });
});
