import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchField from './index';
import userEvent from '@testing-library/user-event';

describe('SearchField component', () => {
  it('renders Search component', () => {
    render(<SearchField/>);
    expect(screen.getByPlaceholderText('Search Repos in Github')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Clear Results')).toBeInTheDocument();
  });

  it('sets query', async () => {
    const setQuery = jest.fn();
    render(<SearchField setQuery={setQuery} error=""/>);
    userEvent.click(screen.getByText('Search'));
    expect(setQuery).toHaveBeenCalledTimes(1);
  });
});