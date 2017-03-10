import React, { Component } from 'react';
import Board from './Board';
//import { start, up, down, left, right} from './action-creators';
import { connect } from 'react-redux';

export class Controls extends React.Component {
    constructor(){
        super();
        this.state = {
            squares: Array(35).fill(null),
            playerPosition: 0
        };
    }
    render(){
        return (
        <div>
        <div>
        <Board squares={this.state.squares} />
        </div>
            <button className='Action'
            onClick={()=> {
                const squares = this.state.squares.slice();
                squares[0] = '🐼';
                this.setState({squares: squares})
            }}
            >START
            </button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.state.playerPosition;
                let newCurrent;
                (current - 6) >= 0 ? newCurrent = (current - 6) : newCurrent = current;
                const squares = this.state.squares.slice(); //copies the array
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Up</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.state.playerPosition;
                let newCurrent;
                (current + 6) <= 35 ? newCurrent = (current + 6) : newCurrent = current;
                const squares = this.state.squares.slice(); //copies the array
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Down</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.state.playerPosition;
                let newCurrent;
                (current - 1) >= 0 ? newCurrent = (current - 1) : newCurrent = current;
                const squares = this.state.squares.slice(); //copies the array
                squares[current] = '';
                this.setState({playerPosition: newCurrent})
                squares[newCurrent] = '🐼';
                this.setState({squares: squares})
                }}
                >Move Left</button>
            <button
                className='Action'
                onClick={()=>{
                let current = this.state.playerPosition;
                let newCurrent;
                (current + 1) <= 35 ? newCurrent = (current + 1) : newCurrent = current;
                const squares = this.state.squares.slice(); //copies the array
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

const mapStateToProps = (state) => {
    return {
        squares: state.squares,
        playerPosition: state.playerPosition
    }
}

export default connect(mapStateToProps)(Controls)
