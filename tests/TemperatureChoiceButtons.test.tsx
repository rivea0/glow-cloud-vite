import { describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import TemperatureChoiceButtons from '../src/components/TemperatureChoiceButtons';

const noop = () => { };
const defaultChoice = 'C';

describe('TemperatureChoiceButtons', () => {
  it('renders', () => {
    render(<TemperatureChoiceButtons handleClick={noop} activeBtn={defaultChoice} />);
    expect(screen.getByRole('button', { name: '°C' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '°F' })).toBeInTheDocument();
  });

  it('should call the handleClick function when clicked Celsius', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<TemperatureChoiceButtons handleClick={handleClick} activeBtn={defaultChoice} />);

    const button = screen.getByRole('button', { name: '°C' });

    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should call the handleClick function when clicked Fahrenheit', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<TemperatureChoiceButtons handleClick={handleClick} activeBtn={defaultChoice} />);

    const button = screen.getByRole('button', { name: '°F' });

    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should not call the handleClick function when it is not clicked', async () => {
    const handleClick = vi.fn();
    render(<TemperatureChoiceButtons handleClick={handleClick} activeBtn={defaultChoice} />);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
