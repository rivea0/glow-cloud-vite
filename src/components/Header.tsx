import { PropsBase } from '../types';
import Logo from './Logo';
import About from './About';

export default function Header({ handleClick }: PropsBase) {
  return (
    <div className="header">
      <Logo />
      <About handleClick={handleClick} />
    </div>
  );
}
