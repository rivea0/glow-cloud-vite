import { MouseEvent, useState } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import AboutText from './components/AboutText';

export default function App() {
  /*
  For showing and hiding the `AboutText`.
  The app doesn't use routing,
  so the visibility of the "about page" is handled using a css class.
  */
  const [fadingOut, setFadingOut] = useState<boolean>(false);
  function handleAboutClick(e: MouseEvent<HTMLButtonElement>): void | null {
    e.preventDefault();
    setFadingOut((prevFadingOut) => !prevFadingOut);
  }

  return (
    <>
      <div className={`main-div ${fadingOut ? 'show-main-div' : ''}`}>
        <Header handleClick={handleAboutClick} />
        <MainContainer />
      </div>
      <AboutText fadingOut={fadingOut} handleClick={handleAboutClick} />
    </>
  );
}
