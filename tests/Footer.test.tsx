import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />);
  });

  it('should display links', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-links')).toBeInTheDocument();
  });

  it('should display footer text', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-end')).toBeInTheDocument();
  });
});
