import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is imported
import SearchBar from '../Components/SearchBar/SearchBar';

test('calls onSearch with the input value when the search button is clicked', () => {
  const onSearch = jest.fn();

  const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={onSearch} />);
  
  const input = getByPlaceholderText('Enter A Song, Album, or Artist');
  act(() => {
    fireEvent.change(input, { target: { value: 'test search' } });
    fireEvent.click(getByText('SEARCH'));
  });

  expect(onSearch).toHaveBeenCalledWith('test search');
});
