'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Store from './store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
       <Provider store={ Store }>
        <Game />
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);
