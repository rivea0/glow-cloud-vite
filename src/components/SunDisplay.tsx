import { getHour } from '../utils';
import { AstroKeys } from '../types';
import DateDisplay from './DateDisplay';
import Icon from './Icon';

function Sunrise({ sunriseTodayDateTime }: { sunriseTodayDateTime: string | null }) {
  return (
    <div className="sun-item">
      <Icon slug="sunrise" width="25%" />
      <p data-testid="sunrise">
        It rises at
        {' '}
        <span className="sun-time">{sunriseTodayDateTime ? getHour(sunriseTodayDateTime) : 'who knows at what hour'}</span>
        {' '}
        on this day, oblivious to its significance on our tiny planet.
      </p>
    </div>
  );
}

function Sunset({ sunsetTodayDateTime }: { sunsetTodayDateTime: string | null }) {
  return (
    <div className="sun-item">
      <Icon slug="sunset" width="25%" />
      <p data-testid="sunset">
        It sets at
        {' '}
        <span className="sun-time">{sunsetTodayDateTime ? getHour(sunsetTodayDateTime) : 'who knows at what hour '}</span>
        , seems frightened. Be a shame if anything happened to it.
      </p>
    </div>
  );
}

export default function SunDisplay({ sunrise, sunset, dateToday }:
Record<AstroKeys, string | null>) {
  return (
    <div className="sun-display">
      <h1>What about the Sun?</h1>
      <DateDisplay dateTimeStr={dateToday} />
      <Sunrise sunriseTodayDateTime={sunrise} />
      <Sunset sunsetTodayDateTime={sunset} />
    </div>
  );
}
