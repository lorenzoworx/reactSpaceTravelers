import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchRockets,
  RocketsSlice,
  rocketReserve,
  cancelReserve,
} from '../../redux/rockets/RocketsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('RocketsSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: [],
      isLoading: true,
    });
  });

  test('fetchRockets should dispatch pending and fulfilled actions correctly', async () => {
    const mockResponse = [
      {
        id: 1, rocket_name: 'Falcon 9', description: 'Description', flicker_images: ['image1.jpg'],
      },
      {
        id: 2, rocket_name: 'Falcon Heavy', description: 'Description', flicker_images: ['image2.jpg'],
      },
    ];

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    }));

    await store.dispatch(fetchRockets());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchRockets.pending.type);
    expect(actions[1].type).toBe(fetchRockets.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponse);
  });

  test('fetchRockets should dispatch pending and rejected actions on error', async () => {
    const mockError = 'Failed to fetch rockets';

    global.fetch = jest.fn().mockImplementation(() => Promise.reject(mockError));

    await store.dispatch(fetchRockets());

    const actions = store.getActions();
    expect(actions[0].type).toBe(fetchRockets.pending.type);
    expect(actions[1].type).toBe(fetchRockets.rejected.type);
    expect(actions[1].error.message).toBe(mockError);
  });

  test('rocketReserve should create the correct action', () => {
    const payload = 1;
    const action = rocketReserve(payload);
    expect(action.type).toBe('rockets/rocketReserve');
    expect(action.payload).toBe(payload);
  });

  test('cancelReserve should create the correct action', () => {
    const payload = 1;
    const action = cancelReserve(payload);
    expect(action.type).toBe('rockets/cancelReserve');
    expect(action.payload).toBe(payload);
  });

  test('RocketsSlice reducer should handle rocketReserve action correctly', () => {
    const initialState = {
      rockets: [
        { id: 1, reserved: false },
        { id: 2, reserved: false },
      ],
    };
    const action = rocketReserve(1);
    const nextState = RocketsSlice.reducer(initialState, action);

    expect(nextState.rockets[0].reserved).toBe(true);
    expect(nextState.rockets[1].reserved).toBe(false);
  });

  test('RocketsSlice reducer should handle cancelReserve action correctly', () => {
    const initialState = {
      rockets: [
        { id: 1, reserved: true },
        { id: 2, reserved: true },
      ],
    };
    const action = cancelReserve(1);
    const nextState = RocketsSlice.reducer(initialState, action);

    expect(nextState.rockets[0].reserved).toBe(false);
    expect(nextState.rockets[1].reserved).toBe(true);
  });
});
