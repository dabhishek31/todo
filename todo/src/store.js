import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import asyncReducer from './reducers';

const store = createStore(asyncReducer, applyMiddleware(thunk, logger));

export default store;
