import { useEffect, useMemo } from 'react';
import { generateRandomWeird, isInWeirdObj } from '../utils';
import { WeatherWeirdness } from '../types';

export default function TodaysNote({ weathercode }: { weathercode: number }) {
  const todaysElement = useMemo<WeatherWeirdness>(
    () => generateRandomWeird(weathercode),
    [weathercode],
  );

  const note = useMemo(() => ({
    paragraph: todaysElement.paragraph,
    sourceUrl: todaysElement.source?.url,
    sourceName: todaysElement.source?.name,
  }), [todaysElement]);

  useEffect(() => {
    if (!isInWeirdObj(localStorage.noteStr as string, weathercode)) {
      localStorage.noteStr = note.paragraph;
      localStorage.noteSourceUrl = note.sourceUrl;
      localStorage.noteSourceName = note.sourceName;
    }
  }, [note, weathercode]);

  return (
    <div className="todays-note">
      <div className="notebox">
        <h1 className="note-title">A Note for Today</h1>
        {(localStorage.noteStr
          ? (localStorage.noteStr as string).split('\n').map((p) => <p className="note-p" data-testid="note" key={p} style={{ margin: '.5rem 0' }}>{p}</p>)
          : note.paragraph.split('\n').map((p) => <p className="note-p" data-testid="note" key={p} style={{ margin: '.5rem 0' }}>{p}</p>))}
        <span className="source-mark">
          *
          <span className="source-text">
            Source of inspiration:
            {(
            localStorage.noteSourceUrl || localStorage.noteSourceName
              ? <a href={(localStorage.noteSourceUrl as string)} className="link" data-testid="source-link">{localStorage.noteSourceName}</a>
              : <a href={(note.sourceUrl)} className="link" data-testid="source-link">{note.sourceName}</a>
            )}
          </span>
        </span>
      </div>
    </div>
  );
}
