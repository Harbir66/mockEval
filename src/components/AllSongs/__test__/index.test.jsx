import React from 'react';
import { render } from '@testing-library/react';
import AllSongs from '..';
import { mockSongs } from '../../../mocks/index';

describe('AllSongs', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AllSongs songs={mockSongs.data} />);
    expect(asFragment).toMatchSnapshot();
  });
});
