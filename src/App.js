import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './modules/page';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter  >
                <Page/>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
