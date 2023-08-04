import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '../src/components/Logo';

describe('Logo', () => {
  it('renders', () => {
    render(<Logo />);
  });

  it('should display logo', () => {
    render(<Logo />);
    const logo = screen.getByText('glow cloud*');
    expect(logo).toBeInTheDocument();
  });

  it('should display logo subtitle', () => {
    render(<Logo />);
    const sub = screen.getByText('*all hail');
    expect(sub).toBeInTheDocument();
  });
});
