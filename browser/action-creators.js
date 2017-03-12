export function start(squares){
    return {
        type: 'START',
        squares: squares
    }
}

export function up(playerPosition){
    return {
        type: 'UP',
        playerPosition: playerPosition
    }
}

export function down(playerPosition){
    return {
        type: 'DOWN',
        playerPosition: playerPosition
    }
}

export function left(playerPosition){
    return {
        type: 'LEFT',
        playerPosition: playerPosition
    }
}

export function right(playerPosition){
    return {
        type: 'RIGHT',
        playerPosition: playerPosition
    }
}

export function reset(squares){
    return {
        type: 'RESET',
        squares: squares
    }
}

