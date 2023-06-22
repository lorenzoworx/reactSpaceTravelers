import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Missions from '../Missions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Missions', () => {
  test('renders missions correctly', () => {
    useSelector.mockReturnValue([
      {
        mission_id: 1, mission_name: 'Mission 1', description: 'Description 1', reserved: true,
      },
      {
        mission_id: 2, mission_name: 'Mission 2', description: 'Description 2', reserved: false,
      },
    ]);
    render(<Missions />);
    expect(screen.getByText(/Mission 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Mission 2/i)).toBeInTheDocument();
  });
});
