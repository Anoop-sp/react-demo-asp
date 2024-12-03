import React from 'react';
import { renderWithProviders } from '../../test-utils/renderWithProviders'; // Adjust path
import Counter from '../Counter'; // Adjust path
import { fireEvent, screen } from '@testing-library/react';

describe('Counter Component', () => {
  test('renders with initial state and interacts correctly', () => {
    const { store } = renderWithProviders(<Counter />, {
      preloadedState: { counter: { value: 0 } },
    });

    // Verify initial state
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

    // Simulate increment
    fireEvent.click(screen.getByText(/Increment/i));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

    // Simulate decrement
    fireEvent.click(screen.getByText(/Decrement/i));
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
