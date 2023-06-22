import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import RocketList from '../RocketList';

const mockStore = configureStore([]);
const store = mockStore({
  rockets: {
    rockets: [
      { id: 1, name: 'Falcon 9' },
      { id: 2, name: 'Falcon Heavy' },
    ],
    isLoading: false,
  },
});

describe('RocketList', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );
  });

  it('renders loading text when rockets are still loading', () => {
    store.dispatch({ type: 'rockets/setLoading', payload: true });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders rocket list correctly', () => {
    expect(screen.getByText(/Falcon 9/i)).toBeInTheDocument();
    expect(screen.getByText(/Falcon Heavy/i)).toBeInTheDocument();
  });
});
