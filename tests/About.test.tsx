import { describe, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import About from '../src/components/About';

const noop = () => { };

describe('About', () => {
  it('renders', () => {
    render(<About handleClick={noop} />);
  });

  it('renders the about link', () => {
    render(<About handleClick={noop} />);
    const link = screen.getByRole('link', { name: 'What is this site?' });
    expect(link).toHaveAttribute('href', '/');
  });

  it('should call the handleClick function when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<About handleClick={handleClick} />);

    const link = screen.getByRole('link', { name: 'What is this site?' });
    await user.click(link);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should not call the handleClick function when it is not clicked', async () => {
    const handleClick = vi.fn();
    render(<About handleClick={handleClick} />);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
