import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
    city: 'Madrid,es'
};

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store de redux --> // parameters must be explicit to work devtools extension in chrome
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
