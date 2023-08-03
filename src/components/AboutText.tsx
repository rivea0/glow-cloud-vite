import { PropsBase } from '../types';

export default function AboutText({ fadingOut, handleClick }: PropsBase & { fadingOut: boolean }) {
  return (
    (fadingOut && (
      <div className="about-container">

        <div className={`about-text ${fadingOut ? 'show' : 'hide'}`}>
          <p>
            Glow Cloud is a daily weather report, with slightly an absurd take.
            <sup>*</sup>
          </p>
          <br />
          <p>
            Inspired by the world of
            {' '}
            <a
              href="https://www.welcometonightvale.com/"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Welcome to Night Vale
            </a>
            {' '}
            &#128156;
          </p>
          <div className="about-end">
            <p>
              <sup>*</sup>
              With additional information on the Sun.
            </p>
            <p>
&nbsp;&nbsp;And the Moon.
              {' '}
              <br />
            &nbsp;&nbsp;But it doesn&#39;t say much, you know.
            </p>
          </div>
          <hr />
          <div className="credits">
            <p>Credits:</p>
            <ul>
              <li>
                The sources of quotes (or, adaptation of quotes) from Welcome to Night Vale
                <br />
                are given where appropriate.
              </li>
              <li>
                Weather icons are
                {' '}
                <a
                  href="https://bas.dev/work/meteocons"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  Meteocons by bas.dev
                </a>
                .
              </li>
              <li>
                SVG loader by
                {' '}
                <a
                  href="https://samherbert.net/svg-loaders/"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  Sam Herbert
                </a>
                .
              </li>
              <li>
                Cloud icon from
                {' '}
                <a
                  href="https://icons8.com/"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  icons8
                </a>
                .
              </li>
              <li>
                Rating component is adapted from an article by
                {' '}
                <a
                  href="https://javascript.plainenglish.io/how-to-build-a-star-rating-component-in-react-dad06b05679b"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  Andrew Bliss
                </a>
                .
              </li>
              <li>
                Data from
                {' '}
                <a
                  href="https://open-meteo.com/en/docs"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  Open-Meteo
                </a>
                .
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={(e) => (fadingOut === true ? handleClick(e) : null)}
            className="goBackBtn"
          >
            Go back
          </button>
        </div>
      </div>
    ))
  );
}
