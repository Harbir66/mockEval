import React from 'react';
import { render } from '@testing-library/react';
import TitleBar from '../index';

describe('TitleBar', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <TitleBar toggle={false} handleToggle={jest.fn()} />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
