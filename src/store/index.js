import { createStore } from 'redux';

// store de redux --> // parameters must be explicit to work devtools extension in chrome
export const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
