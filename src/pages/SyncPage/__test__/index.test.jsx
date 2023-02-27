import { render } from '@testing-library/react';
import React from 'react';
import SyncPage from '../index';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('SyncPage', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SyncPage />);

    expect(asFragment).toMatchSnapshot();
  });
});
