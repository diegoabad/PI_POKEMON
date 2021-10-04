import { createStore, applyMiddleware } from 'redux';
import { composseWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducer.js';

export const store = createStore(
	rootReducer,
	composseWithDevTools(applyMiddleware(thunk))
);
