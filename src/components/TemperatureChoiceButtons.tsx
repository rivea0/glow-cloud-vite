import { PropsBase } from '../types';

export default function TemperatureChoiceButtons({ handleClick, activeBtn }:
PropsBase & { activeBtn: string }) {
  return (
    <div className="temp-choice-buttons">
      <button
        type="submit"
        onClick={handleClick}
        value="C"
        id="C"
        className={`temp-choice-button ${activeBtn === 'C' ? 'active-btn' : undefined}`}
      >
        °C
      </button>
      <button
        type="submit"
        onClick={handleClick}
        value="F"
        id="F"
        className={`temp-choice-button ${activeBtn === 'F' ? 'active-btn' : undefined}`}
      >
        °F
      </button>
    </div>
  );
}
