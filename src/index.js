import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




//reducer party here
const firstReducer = (state = [], action) => {
    if (action.type === 'ADD_SNACK')    {
        console.log('first reducer czeck', action);
        return [...state, 'czeck. add payload here'];
    }
    return state;
}


// creating store and c-c-c-combo any reducers
const storeInstance = createStore(
    combineReducers({
        firstReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
