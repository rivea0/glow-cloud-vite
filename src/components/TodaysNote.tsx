import { useEffect, useState, useMemo } from 'react';
import weird from '../weird';
import { weatherCodes } from '../utils';
import { WeatherWeirdness } from '../types';

export default function TodaysNote({ weathercode }: { weathercode: number }) {
  const todaysWeather = weatherCodes[weathercode].iconSlug;
  let collectionSource: WeatherWeirdness[];
  switch (todaysWeather) {
    case 'clear-sky':
      collectionSource = weird.sun;
      break;
    case 'overcast':
      collectionSource = weird.overcast;
      break;
    case 'fog':
      collectionSource = weird.fog;
      break;
    case 'rain':
      collectionSource = weird.rain;
      break;
    default:
      collectionSource = weird.misc;
  }

  const todaysElement = useMemo(
    () => collectionSource[Math.floor(Math.random() * collectionSource.length)],
    [collectionSource],
  );

  const [note, setNote] = useState(() => ({
    paragraph: todaysElement.paragraph,
    sourceUrl: todaysElement.source?.url,
    sourceName: todaysElement.source?.name,
  }));

  // const [todaysElement, setTodaysElement] = useState(
  //   collectionSource[Math.floor(Math.random() * collectionSource.length)],
  // );

  // const [note, setNote] = useState({
  //   paragraph: todaysElement.paragraph,
  //   sourceUrl: todaysElement.source?.url,
  //   sourceName: todaysElement.source?.name,
  // });

  useEffect(() => {
    if (localStorage.noteStr) { // and not expired
      // setNote((prevNote) => ({ ...prevNote, paragraph: localStorage.noteStr as string }));
      setNote({
        paragraph: localStorage.noteStr as string,
        sourceUrl: localStorage.noteSourceUrl as string,
        sourceName: localStorage.noteSourceName as string,
      });
      // setNote(localStorage.noteStr as string);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.noteStr) {
      localStorage.noteStr = note.paragraph;
      localStorage.noteSourceUrl = note.sourceUrl;
      localStorage.noteSourceName = note.sourceName;
    }
    return () => {
      localStorage.removeItem('noteStr');
      localStorage.removeItem('noteSourceUrl');
      localStorage.removeItem('noteSourceName');
    };
  }, [note]);

  return (
    <div className="todays-note">
      <div className="notebox">
        <h1 className="note-title">A Note for Today</h1>
        {note.paragraph.split('\n').map((p) => <p className="note-p" key={p} style={{ margin: '.5rem 0' }}>{p}</p>)}
        <span className="source-mark">
          *
          <span className="source-text">
            Source of inspiration:
            {' '}
            <a href={note.sourceUrl && note.sourceUrl} className="link">{note.sourceName}</a>
          </span>
        </span>
      </div>
    </div>
  );
}
