import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header', () => {
  it('renders', () => {
    render(<Header handleClick={() => {}} />);
  });
});
