import React from 'react';
import './App.css';
import { Header } from './modules/header';
import { BrowserRouter } from 'react-router-dom';
import { RootPage } from './modules/rootPage';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <RootPage/>
              <footer>
                  Footer
              </footer>
          </div>
      </BrowserRouter>

  );
}

export default App;
