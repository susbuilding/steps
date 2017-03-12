import React, { Component } from 'react';
import Board from './Board';
import { start, up, down, left, right} from './action-creators';
import { connect } from 'react-redux';
import DND from './DND';

class Controls extends React.Component {
    constructor(){
        super();
        // this.props = {
        //     squares: Array(35).fill(null),
        //     playerPosition: 0
        // };

    }
    render(){
        console.log('CONTROLS PROPS', this.props)
        return (
        <div>
        <div>
        </div>

            <DND />

             <button className='Action'
            onClick={()=> {
                const oldSquares = this.props.squares.slice();
                oldSquares.shift();
                oldSquares.unshift('🐼')
                this.props.dispatch(
                    start(oldSquares)
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
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Up</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current + 6) <= 35 ? newCurrent = (current + 6) : newCurrent = current;
                const squares = this.props.squares.slice(); //copies the array
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Down</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current - 1) >= 0 ? newCurrent = (current - 1) : newCurrent = current;
                const squares = this.props.squares.slice(); //copies the array
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Left</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.props.playerPosition;
                let newCurrent;
                (current + 1) <= 35 ? newCurrent = (current + 1) : newCurrent = current;
                const squares = this.props.squares.slice(); //copies the array
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Right</button>
            <button
                className='Action'
                onClick={()=>
                        this.setState({squares: Array(35).fill(null), playerPosition: 0}
                        )}
                >Reset
            </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('STATE', state)
    return {
        squares: state.squares,
        playerPosition: state.playerPosition
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: (playerPosition) => {
            dispatch(
                start(playerPosition)
            )
        }
    }
}

export default connect(mapStateToProps)(Controls)
