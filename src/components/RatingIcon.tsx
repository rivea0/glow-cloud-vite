import { useMemo } from 'react';
import { RatingIconProps } from '../types';
import StarIcon from './StarIcon';

export default function RatingIcon({ id, index, iconProps }: RatingIconProps) {
  const fill = useMemo(() => {
    const yellow = '#F8DE7E';
    if (iconProps.hoverRating >= index) {
      return yellow;
    } if (!iconProps.hoverRating && iconProps.rating >= index) {
      return yellow;
    }
    return 'none';
  }, [iconProps.rating, iconProps.hoverRating, index]);

  return (
    <div
      id={id.toString()}
      className="cursor-pointer"
      onMouseEnter={() => iconProps.onMouseEnter(index)}
      onMouseLeave={() => iconProps.onMouseLeave()}
      onClick={() => iconProps.onSaveRating(index)}
      role="button"
      tabIndex={0}
      onKeyUp={(e) => iconProps.onKeyUp(e)}
      onKeyDown={() => iconProps.onKeyDown()}
    >
      <StarIcon fill={fill} />
    </div>
  );
}
