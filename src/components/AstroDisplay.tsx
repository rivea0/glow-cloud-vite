import { AstroKeys } from '../types';
import SunDisplay from './SunDisplay';
import MoonDisplay from './MoonDisplay';

export default function AstroDisplay({ sunrise, sunset, dateToday }:
Record<AstroKeys, string | null>) {
  return (
    <>
      <SunDisplay
        sunrise={sunrise}
        sunset={sunset}
        dateToday={dateToday}
      />
      <MoonDisplay dateToday={dateToday} />
    </>
  );
}
