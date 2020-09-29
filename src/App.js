import React from 'react';
import './App.css';
import { Header } from './modules/header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <main>
                  Main
              </main>
              <footer>
                  Footer
              </footer>
          </div>
      </BrowserRouter>

  );
}

export default App;
