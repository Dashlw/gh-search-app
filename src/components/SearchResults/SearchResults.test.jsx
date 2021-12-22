import { render,screen} from '@testing-library/react';
import SearchResults from './index';
import {SearchContext} from '../../context/SearchContext';
import { BrowserRouter as Router } from 'react-router-dom';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <SearchContext.Provider {...providerProps}>
      <Router>
        {ui}
      </Router>
    </SearchContext.Provider>,
    renderOptions,
  );
};

describe('SearchResults component', () => {
it('shows repo name from Search Context', () => {
    const providerProps = {
      value: { repos: [{ name: 'First Search Result Name' }] },
    };
    customRender(<SearchResults/>, { providerProps });
expect(screen.getByTestId('repo-name')).toHaveTextContent(
      'First Search Result Name',
    );
  });

it('shows no match message is repos is empty', () => {
    const providerProps = {
      value: { repos: [] },
    };
    customRender(<SearchResults/>, { providerProps });
expect(screen.getByTestId('no-match')).toHaveTextContent(
      'No search results match...',
    );
  });
});
