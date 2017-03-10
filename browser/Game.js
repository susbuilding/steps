import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';
import Square from './Square';
import { connect } from 'react-redux';

class Game extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.props.squares} />
          <Controls />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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

export default connect(mapStateToProps)(Game)

