import React from 'react';
import { render } from '@testing-library/react';
import GenreSongs from '..';
import { mockGenres } from '../../../mocks';

describe('GenreSongs', () => {
  it('should render correctly when genre is Bollywood', () => {
    const { asFragment } = render(<GenreSongs genre={mockGenres[0].name} />);
    expect(asFragment).toMatchSnapshot();
  });
  it('should render correctly when genre is Pop', () => {
    const { asFragment } = render(<GenreSongs genre="Pop" />);
    expect(asFragment).toMatchSnapshot();
  });
  it('should render correctly when genre is Rock', () => {
    const { asFragment } = render(<GenreSongs genre="Rock" />);
    expect(asFragment).toMatchSnapshot();
  });
  it('should render correctly when genre is Country', () => {
    const { asFragment } = render(<GenreSongs genre="Country" />);
    expect(asFragment).toMatchSnapshot();
  });
});
