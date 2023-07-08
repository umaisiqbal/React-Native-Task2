import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CounterScreen from './CounterScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Create a mock Redux store
const mockStore = configureStore([]);
const initialState = { counter: 0 };
const store = mockStore(initialState);

describe('CounterScreen', () => {
  it('should render counter value correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    );

    const counterText = getByText(`Counter: ${initialState.counter}`);
    expect(counterText).toBeDefined();
  });

  it('should increment counter on button press', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    );

    const incrementButton = getByText('Increment');
    fireEvent.press(incrementButton);

    const updatedCounterText = getByText(`Counter: ${initialState.counter + 1}`);
    expect(updatedCounterText).toBeDefined();
  });

  it('should decrement counter on button press', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    );

    const decrementButton = getByText('Decrement');
    fireEvent.press(decrementButton);

    const updatedCounterText = getByText(`Counter: ${initialState.counter - 1}`);
    expect(updatedCounterText).toBeDefined();
  });
});
