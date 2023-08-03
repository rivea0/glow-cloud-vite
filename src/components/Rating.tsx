import { useState, KeyboardEvent } from 'react';
import RatingIcon from './RatingIcon';
import RateResult from './RateResult';

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [goHover, setGoHover] = useState(true);
  const [goRating, setGoRating] = useState(true);

  function onSaveRating(index: number) {
    setGoHover(false);
    if (goRating) { setRating(index); }
    setGoRating(false);
  }

  function onKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    const { currentTarget, key } = e;
    const currentIndex = parseInt(currentTarget.id, 10);
    key === 'Tab' ? (goHover && setHoverRating(currentIndex))
      : (key === 'Enter' && onSaveRating(currentIndex));
  }

  const iconProps = {
    rating,
    hoverRating,
    onMouseEnter: (index: number) => { if (goHover) { setHoverRating(index); } },
    onMouseLeave: () => { if (goHover) { setHoverRating(0); } },
    onSaveRating,
    onKeyUp,
    onKeyDown: () => { if (goHover) { setHoverRating(0); } },
  };

  return (
    <div className="rating-container">
      <div className="rating">
        <p>Rate this weather:</p>
        <div className="stars" style={{ display: 'flex' }}>
          {[1, 2, 3, 4, 5].map((index) => (
            <RatingIcon id={index} key={index} index={index} iconProps={iconProps} />
          ))}
        </div>
        {rating > 0 && <RateResult starCount={rating} />}
      </div>
    </div>
  );
}
