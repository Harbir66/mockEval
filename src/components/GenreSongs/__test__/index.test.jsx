import React from 'react';
import { render } from '@testing-library/react';
import GenreSongs from '..';
import { mockSongs } from '../../../mocks/index';

describe('GenreSongs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const { asFragment } = render(
      <GenreSongs key={Math.random()} songs={mockSongs.data} />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
