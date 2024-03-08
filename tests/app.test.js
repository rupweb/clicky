import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../src/App.js';

describe('App Component', () => {
  test('resets score when the same image is clicked twice', () => {
    const { getAllByRole } = render(<App />);
    const images = getAllByRole('img');

    // Simulate clicking the same image twice
    fireEvent.click(images[0]);
    fireEvent.click(images[0]);

    // Assuming you display the score somewhere in the App
    const scoreDisplay = getByTestId('score-display'); // Adjust as per your implementation
    expect(scoreDisplay.textContent).toBe('0');
  });
});
