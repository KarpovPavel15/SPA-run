import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const sagas = [
    // sagasUserOptions,
    // sagaMainPage
];

export const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagas.forEach(saga=>sagaMiddleware.run(saga));
    return store;
};

export const store = configureStore();
