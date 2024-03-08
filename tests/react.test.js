import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App.js';

test('renders text', () => {
  render(<App />);
  const text = screen.getByText(/Rupert/i);
  expect(text).toBeInTheDocument();
});
