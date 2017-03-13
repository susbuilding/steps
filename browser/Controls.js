import React, { Component } from 'react';
import Board from './Board';
import { start, up, down, left, right, reset} from './action-creators';
import { connect } from 'react-redux';
import DND from './DND';

class Controls extends React.Component {
    constructor(){
        super();
        this.state = {
        history: [{
            move: null
        }],
        stepNumber: 0
        }
    }
    jumpTo(step) {
    this.setState({
        stepNumber: step
    });
    }
    render(){
            const history = this.state.history;
            const moves = history.map((step, move) => {
            const desc = move ?
                'move' + (step.move).slice(0,1).toUpperCase() + (step.move).slice(1) + '()' :
                'Empty Board';
            return (
                <li key={move}>
                <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
            });
        return (
        <div>
        <div>
        </div>

            <DND />
             <button className='Action' type="button" className="btn btn-primary btn-xs"
            onClick={()=> {
                // const oldSquares = this.props.squares.slice();
                // oldSquares.shift();
                // oldSquares.unshift('🐼')
                const emptySquares = Array(35).fill(null);
                 emptySquares.shift();
                 emptySquares.unshift('🐼')
                 emptySquares.push('🎋')
                this.props.dispatch(
                    start(emptySquares)
                )
                this.setState({
                    history: history.concat([{
                    move: 'start'
                }])
                })
            }}
            >START
            </button>

            <button
                className='Action' type="button" className="btn btn-primary btn-xs"
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current - 6) >= 0 ? newCurrent = (current - 6) : newCurrent = current;
                const squares = this.props.squares.slice(); //copies the array
                this.props.dispatch(down(newCurrent))
                squares[current] = '';
                squares[newCurrent] = '🐼';
                this.props.dispatch(start(squares))
                this.setState({
                    history: history.concat([{
                    move: 'up'
                }])
                })
                }}
                >Move Up</button>

             <button
                className='Action' type="button" className="btn btn-primary btn-xs"
                onClick={()=>{
                    let current = this.props.playerPosition;
                    let newCurrent;
                    (current + 6) <= 35 ? newCurrent = (current + 6) : newCurrent = current;
                    this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                    this.setState({
                    history: history.concat([{
                    move: 'down'
                }])
                })
                }}
                >Move Down</button>

            <button
                className='Action' type="button" className="btn btn-primary btn-xs"
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current - 1) >= 0 ? newCurrent = (current - 1) : newCurrent = current;
                this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                    this.setState({
                    history: history.concat([{
                    move: 'left'
                }])
                })
                }}

                >Move Left</button>
            <button
                className='Action' type="button" className="btn btn-primary btn-xs"
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current + 1) <= 35 ? newCurrent = (current + 1) : newCurrent = current;
                this.props.dispatch(down(newCurrent))
                    const squares = this.props.squares.slice(); //copies the array
                    squares[current] = '';
                    squares[newCurrent] = '🐼';
                    this.props.dispatch(start(squares))
                    this.setState({
                    history: history.concat([{
                    move: 'right'
                }])
                })
                }}
                >Move Right</button>
            {/** <button
            //     className='Action' type="button" className="btn btn-primary btn-xs"
            //     onClick={()=> {
            //         this.props.dispatch(
            //             start(Array(35).fill(null))
            //             )}
            //     }
            //     >Reset
            // </button> **/}
            <button
                className='Action' type="button" className="btn btn-primary btn-xs"
                onClick={()=> {}
                }
                >Run All
            </button>
            <div>
            <ol>{moves}</ol>
            </div>
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
