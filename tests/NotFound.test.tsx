import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from '../src/components/NotFound';

describe('NotFound', () => {
  it('renders', () => {
    render(<NotFound />);
  });

  it('should display the error text', () => {
    render(<NotFound />);
    expect(screen.getByText('The universe is attempting to redact your location and all weather related information.')).toBeInTheDocument();
    expect(screen.getByText('"Errors, more network errors," it whispers.')).toBeInTheDocument();
    expect(screen.getByText('So, you wait.')).toBeInTheDocument();
  });

  it('should display the image', () => {
    render(<NotFound />);
    expect(screen.getByAltText('A skull in astronaut suit waiting in space')).toBeInTheDocument();
  });
});
