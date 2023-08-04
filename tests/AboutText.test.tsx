import { describe, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import AboutText from '../src/components/AboutText';

const noop = () => { };

describe('AboutText', () => {
  it('renders the container when fadingOut is true', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    expect(screen.getByTestId('about-container')).toBeInTheDocument();
  });

  it('should not render the container when fadingOut is false', () => {
    render(<AboutText fadingOut={false} handleClick={noop} />);
    const aboutText = screen.queryByTestId('about-container');
    expect(aboutText).toBeNull();
  });

  it('should display the main div when fadingOut is true', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    expect(screen.getByTestId('about-text')).toBeVisible();
  });

  it('should display the main sentence when fadingOut is true', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    const p = screen.getByText('Glow Cloud is a daily weather report, with slightly an absurd take.');
    expect(p).toBeInTheDocument();
  });

  it('should display link to Night Vale', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    const link = screen.getByRole('link', { name: 'Welcome to Night Vale' });
    expect(link).toHaveAttribute('href', 'https://www.welcometonightvale.com/');
  });

  it('should display the additional paragraphs div', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    const aboutEnd = screen.getByTestId('about-end');
    expect(aboutEnd).toBeInTheDocument();
  });

  it('should display credits div', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    const credits = screen.getByTestId('credits');
    expect(credits).toBeInTheDocument();
  });

  it('should display the go back button', () => {
    render(<AboutText fadingOut handleClick={noop} />);
    const button = screen.getByRole('button', { name: 'Go back' });
    expect(button).toBeInTheDocument();
  });

  it('should call the handleClick function when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<AboutText fadingOut handleClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Go back' });

    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should not call the handleClick function when it is not clicked', async () => {
    const handleClick = vi.fn();
    render(<AboutText fadingOut handleClick={handleClick} />);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
