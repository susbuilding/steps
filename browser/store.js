import reducer from './reducer';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

const logger = createLogger();

const initialState = {
    squares: Array(35).fill(null),
    playerPosition: 0
}

export default createStore(reducer, initialState, applyMiddleware(thunkMiddleware, logger))
