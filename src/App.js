import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Detail from './pages/Detail';
import SearchContext from './context/SearchContext';
import './App.css';

function App() {
  const search = useState(null);

  return (
    <SearchContext.Provider value={search}>
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
    </SearchContext.Provider>
  );
}

export default App;
