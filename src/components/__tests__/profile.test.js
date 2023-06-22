import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../Profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  test('renders reserved missions correctly', () => {
    useSelector.mockReturnValue({
      missions: [
        { mission_id: 1, mission_name: 'Mission 1', reserved: true },
        { mission_id: 2, mission_name: 'Mission 2', reserved: true },
      ],
      rockets: { rockets: [] },
      dragons: [],
    });
    render(<Profile />);
    expect(screen.getByText(/Mission 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Mission 2/i)).toBeInTheDocument();
  });

  test('renders reserved rockets correctly', () => {
    useSelector.mockReturnValue({
      missions: { missions: [] },
      rockets: {
        rockets: [
          { id: 1, name: 'Rocket 1', reserved: true },
          { id: 2, name: 'Rocket 2', reserved: true },
        ],
      },
      dragons: [],
    });
    render(<Profile />);
    expect(screen.getByText(/Rocket 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Rocket 2/i)).toBeInTheDocument();
  });

  test('renders reserved dragons correctly', () => {
    useSelector.mockReturnValue({
      missions: { missions: [] },
      rockets: { rockets: [] },
      dragons: [
        { id: 1, name: 'Dragon 1', reserved: true },
        { id: 2, name: 'Dragon 2', reserved: true },
      ],
    });
    render(<Profile />);
    expect(screen.getByText(/Dragon 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Dragon 2/i)).toBeInTheDocument();
  });
});
