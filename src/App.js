import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Detail from './pages/Detail';
import { SearchContextProvider } from './context/SearchContext';
import './App.css';

function App() {

  return (
    <SearchContextProvider>
      <main className="App">
        <Router>
          <header>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="logo">
              <img src="ghLogo.png" alt="logo"/>
            </a>
          </header>
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="/details/:id" element={<Detail/>}/>
          </Routes>
        </Router>
      </main>
    </SearchContextProvider>
  );
}

export default App;
