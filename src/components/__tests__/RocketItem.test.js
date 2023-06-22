import React from 'react';
import { render, screen } from '@testing-library/react';
import RocketItem from '../RocketItem';

describe('RocketItem', () => {
  test('renders rocket item correctly', () => {
    const rocket = {
      id: 1,
      name: 'Falcon 9',
      description: 'A reusable orbital rocket',
      image: 'rocket-image.jpg',
      reserved: true,
    };
    render(<RocketItem rocket={rocket} />);
    expect(screen.getByText(/Falcon 9/i)).toBeInTheDocument();
    expect(screen.getByText(/A reusable orbital rocket/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Falcon 9/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserved/i)).toBeInTheDocument();
  });

  test('renders reserve button when rocket is not reserved', () => {
    const rocket = {
      id: 2,
      name: 'Falcon Heavy',
      description: 'A super heavy-lift launch vehicle',
      image: 'rocket-image.jpg',
      reserved: false,
    };
    render(<RocketItem rocket={rocket} />);
    expect(screen.getByText(/Falcon Heavy/i)).toBeInTheDocument();
    expect(screen.getByText(/A super heavy-lift launch vehicle/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Falcon Heavy/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve Rocket/i)).toBeInTheDocument();
  });
});
