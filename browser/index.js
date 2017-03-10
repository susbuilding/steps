'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import Game from './Game';

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Game />
    </div>
  </div>,
  document.getElementById('app')
);
