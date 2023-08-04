import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Rating from '../src/components/Rating';
import RatingIcon from '../src/components/RatingIcon';
import RateResult from '../src/components/RateResult';

const noop = () => { };

const mockIconProps = {
  rating: 5,
  hoverRating: 5,
  onMouseEnter: noop,
  onMouseLeave: noop,
  onSaveRating: noop,
  onKeyUp: noop,
  onKeyDown: noop,
};

describe('Rating', () => {
  it('renders', () => {
    render(<Rating />);
  });

  it('should display the rating text', () => {
    render(<Rating />);
    expect(screen.getByText('Rate this weather:')).toBeInTheDocument();
  });

  it('should display the star icons', () => {
    render(<Rating />);
    const starIcons = screen.getAllByTestId('star-icon');
    starIcons.forEach((icon) => expect(icon).toBeInTheDocument());
  });

  it('renders the RatingIcon component', () => {
    render(<RatingIcon id={5} index={5} iconProps={mockIconProps} />);
  });

  it('should call the onSaveRating function when clicked', async () => {
    const onStarClick = vi.fn();
    const user = userEvent.setup();
    render(<RatingIcon
      id={5}
      index={5}
      iconProps={{ ...mockIconProps,
        onSaveRating: onStarClick }}
    />);

    const starButton = screen.getByRole('button');
    await user.click(starButton);
    expect(onStarClick).toHaveBeenCalled();
  });

  it('should display the rate result after the star is clicked', async () => {
    const onStarClick = vi.fn();
    const user = userEvent.setup();
    render(<RatingIcon
      id={5}
      index={5}
      iconProps={{ ...mockIconProps,
        onSaveRating: onStarClick }}
    />);

    const starButton = screen.getByRole('button');
    await user.click(starButton);
    expect(onStarClick).toHaveBeenCalled();

    render(<RateResult starCount={5} />);

    expect(screen.getByText('You gave 5 stars for this weather!')).toBeInTheDocument();
    expect(screen.getByText('Meanwhile, here are some questions to think about:')).toBeInTheDocument();
    expect(screen.getByTestId('rate-result-questions')).toBeInTheDocument();
  });
});
