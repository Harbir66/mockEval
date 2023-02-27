import React from 'react';
import { render } from '@testing-library/react';
import Home from '../index';

describe('Home', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment).toMatchSnapshot();
  });
});
