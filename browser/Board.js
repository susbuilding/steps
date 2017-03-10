import React, {Component} from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      playerPosition: 0
    };
  }
  handleClick(i){
    this.state.squares[i] = '🐼'; //this mutates state so I should fix it
    const squares = this.state.squares.slice(); //copies the array
     squares[i] === '🐼' ? squares[i] = null : squares[i] = '🐼';
    const newPosition = {playerPosition: i};
    let current = this.state.playerPosition;
    const newState = Object.assign({}, this.state, newPosition)
    this.setState(newState);
    squares[current] = '🐼';
  }
  renderSquare(i) {
    return <Square
             value={this.state.squares[i]}
             onClick={() => this.handleClick(i)}/>;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>
        <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
        <div className="board-row">
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
        <div>
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
                    this.setState({squares: Array(9).fill(null), playerPosition: 0}
                    )}
            >Reset
          </button>
        </div>
      </div>
    );
  }
}
