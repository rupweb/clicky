// characterGallery.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CharacterGallery from '../src/components/CharacterGallery';

describe('CharacterGallery Component', () => {
  test('increments score on first click', () => {
    const mockIncrementScore = jest.fn();
    const mockResetScore = jest.fn();
    const { getByTestId } = render(
      <CharacterGallery 
        incrementScore={mockIncrementScore} 
        resetScore={mockResetScore} 
      />
    );

    // Using the first image in your JSON data as an example
    fireEvent.click(getByTestId('character-5cd99d4bde30eff6ebccfbe6'));
    expect(mockIncrementScore).toHaveBeenCalledTimes(1);
  });
});
