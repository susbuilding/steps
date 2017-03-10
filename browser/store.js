import reducer from './reducer';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

const logger = createLogger();

export default createStore(reducer, applyMiddleware(thunkMiddleware, logger))
