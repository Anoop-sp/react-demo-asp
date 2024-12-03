import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button'; // Adjust path

describe('Button Component', () => {
  test('renders with provided label and handles click events', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    // Check if the button renders with the correct label
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();

    // Simulate a click event
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
