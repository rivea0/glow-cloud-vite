import { PropsBase } from '../types';

export default function About({ handleClick }: PropsBase) {
  return (
    <div className="about">
      <button type="button" className="about-btn" onClick={handleClick}>
        <a href="/">What is this site?</a>
      </button>
    </div>
  );
}
