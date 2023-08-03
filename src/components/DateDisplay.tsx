import { DateTime } from '../types';
import { getDate } from '../utils';
import Loading from './Loading';

export default function DateDisplay({ dateTimeStr }: { dateTimeStr: string | null }) {
  let dateStr: DateTime = { currentDay: null, currentMonth: null, currentDate: null };
  if (dateTimeStr !== null) { dateStr = getDate(dateTimeStr); }

  return (
    <i className="date">
      {(!dateStr.currentDay || !dateStr.currentMonth || !dateStr.currentDate)
        ? <Loading /> : `${dateStr.currentDay}, ${dateStr.currentMonth} ${dateStr.currentDate}`}
    </i>
  );
}
