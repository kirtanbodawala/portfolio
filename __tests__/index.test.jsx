import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../component/Homepage';

describe('Home-Paralax', () => {
  it('check homepage parallax', async () => {
    render(<HomePage />);
    expect(screen.getByTestId('parallax-home')).toBeInTheDocument();
  });
});

describe('Home', () => {
  it('check homepage heading content', async () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'KIRTAN BODAWALA'
    );
  });
});
