import { start, up, down, left, right, reset } from './action-creators';
import { combineReducers } from 'redux';

let positionInitialState = {
    playerPosition: 0
}
let squaresInitialState = {
    squares: Array(35).fill(null)
}

function PositionReducer (state = positionInitialState, action) {

    switch (action.type) {
        case 'START':{
            return action.playerPosition
            }
        case 'UP':{
            return action.playerPosition
            }
        case 'DOWN':{
             return action.playerPosition
            }
        case 'LEFT':{
            return action.playerPosition
            }
        case 'RIGHT':{
            return action.playerPosition
            }
        default: {
            return state
        }
    }
}

function SquaresReducer (state = squaresInitialState, action) {
    //let newState = Object.assign({}, state)

    switch (action.type) {
        case 'RESET':{
           return action.squares
            //return newState
        }
        default: {
            //return newState
            return state
        }
    }
}

export default combineReducers({
    squares: SquaresReducer,
    playerPosition: PositionReducer
})
