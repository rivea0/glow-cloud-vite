import DateDisplay from './DateDisplay';
import Icon from './Icon';

export default function MoonDisplay({ dateToday }: { dateToday: string | null }) {
  return (
    <div className="moon-display">
      <h1>What about the Moon?</h1>
      <DateDisplay dateTimeStr={dateToday} />
      <div className="moon-item">
        <Icon slug="starry-night" width="25%" />
        <p>Well, let&apos;s just say that the Moon is going through a phase.</p>
      </div>
    </div>
  );
}
