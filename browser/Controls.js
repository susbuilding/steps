import React, { Component } from 'react';
import Board from './Board';
import { start, up, down, left, right, reset} from './action-creators';
import { connect } from 'react-redux';
import DND from './DND';

class Controls extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
        <div>
        <div>
        </div>

            <DND />

             <button className='Action'
            onClick={()=> {
                // const oldSquares = this.props.squares.slice();
                // oldSquares.shift();
                // oldSquares.unshift('🐼')
                const emptySquares = Array(35).fill(null);
                 emptySquares.shift();
                 emptySquares.unshift('🐼')
                this.props.dispatch(
                    start(emptySquares)
                )
            }}
            >START
            </button>

            <button
                className='Action'
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current - 6) >= 0 ? newCurrent = (current - 6) : newCurrent = current;
                const squares = this.props.squares.slice(); //copies the array
                this.props.dispatch(down(newCurrent))
                squares[current] = '';
                squares[newCurrent] = '🐼';
                this.props.dispatch(start(squares))
                }}
                >Move Up</button>

             <button
                className='Action'
                onClick={()=>{
                    let current = this.props.playerPosition;
                    let newCurrent;
                    (current + 6) <= 35 ? newCurrent = (current + 6) : newCurrent = current;
                    this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                }}
                >Move Down</button>

            <button
                className='Action'
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current - 1) >= 0 ? newCurrent = (current - 1) : newCurrent = current;
                this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                }}
                >Move Left</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current + 1) <= 35 ? newCurrent = (current + 1) : newCurrent = current;
                this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                }}
                >Move Right</button>
            <button
                className='Action'
                onClick={()=> {
                    this.props.dispatch(
                        start(Array(35).fill(null))
                        )}
                }
                >Reset
            </button>
            <button
                className='Action'
                onClick={()=> {}
                }
                >Run All
            </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        squares: state.squares,
        playerPosition: state.playerPosition
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: (playerPosition) => {
            dispatch(
                action(playerPosition)
            )
        }
    }
}

export default connect(mapStateToProps)(Controls)
