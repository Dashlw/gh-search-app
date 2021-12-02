import React from 'react';
import { render } from '@testing-library/react';
import Search from './index';

describe('Search component', () => {
  test('renders Search component',  () => {
    render(<Search />);
  });
});