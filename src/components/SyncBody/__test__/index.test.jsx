import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SyncBody from '..';
import { HOME_ROUTE } from '../../../constants/routes';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('SyncBody', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockNavigate = jest.fn();
  it('should render correctly', () => {
    const { asFragment } = render(<SyncBody />);
    expect(asFragment).toMatchSnapshot();
  });
  it('should navigate to home route when sync button is clicked', () => {
    useNavigate.mockReturnValue(mockNavigate);
    const { getByTestId } = render(<SyncBody />);
    const syncButton = getByTestId('sync-button');
    expect(mockNavigate).not.toHaveBeenCalled();
    fireEvent.click(syncButton);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(HOME_ROUTE);
  });
});
