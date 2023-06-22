import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Dragons from '../Dragons';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Dragons', () => {
  test('renders loading text when dragons are not available', () => {
    useSelector.mockReturnValue([]);
    render(<Dragons />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
