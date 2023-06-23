import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../Profile';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  it('renders reserved missions, rockets, and dragons correctly', () => {
    const reservedMissions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
    ];
    const reservedRockets = [
      { id: 1, name: 'Rocket 1', reserved: true },
      { id: 2, name: 'Rocket 2', reserved: true },
    ];
    const reservedDragons = [{ id: 1 }, { id: 2 }];

    useSelector.mockImplementation((selector) => selector({
      mission: { missions: reservedMissions },
      rockets: { rockets: reservedRockets },
      dragons: reservedDragons,
    }));

    render(<Profile />);

    const missionsElements = screen.getAllByText('My Missions');
    expect(missionsElements.length).toBeGreaterThan(0);

    const rocketsElements = screen.getAllByText('My Rockets');
    expect(rocketsElements.length).toBeGreaterThan(0);

    const dragonsElements = screen.getAllByText('My Dragons');
    expect(dragonsElements.length).toBeGreaterThan(0);
  });
});
