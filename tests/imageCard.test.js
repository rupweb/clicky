import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageCard from '../src/components/ImageCard'

describe('ImageCard Component', () => {
  test('increments score on first click', () => {
    const mockIncrementScore = jest.fn();
    const { getByRole } = render(<ImageCard onImageClick={mockIncrementScore} />);

    fireEvent.click(getByRole('img')); // Assuming each image has 'img' role
    expect(mockIncrementScore).toHaveBeenCalledTimes(1);
  });
});
