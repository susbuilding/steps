import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';
import Square from './Square';

export default class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
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
