import { start, up, down, left, right, reset } from './action-creators';
import { combineReducers } from 'redux';

let initialState = {
    squares: Array(35).fill(null),
    playerPosition: 0
}

function BoardReducer (state = initialState, action) {
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
        case 'RESET':{
                return action.squares
            }
        default: {
            return state
        }
    }
}

export default combineReducers({
    board: BoardReducer
})
