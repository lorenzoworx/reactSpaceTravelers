import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import Dragons from '../Dragons';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Dragons', () => {
  test('renders loading text when dragons are not available', () => {
    useSelector.mockReturnValue([]);
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
