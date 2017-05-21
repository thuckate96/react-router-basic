import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'Main';
import Account from 'Account';
import HomePage from 'HomePage';
import Nav from 'Nav';
import Transaction from 'Transaction';

import {Route, HashRouter, Switch} from 'react-router-dom';



ReactDOM.render(
  <div>

    <HashRouter>
      <div>
        <Route path="/" component={Main}/>
        <Route path="/homepage" component={HomePage}/>
        <Route path="/account" component={Account}/>
        <Route path="/transaction" component={Transaction}/>
      </div>
    </HashRouter>
  </div>,
  document.getElementById("root")
)

// "css-loader": "^0.28.1",
// "foundation-sites": "^6.3.1",
// "less-loader": "^4.0.3",
// "script-loader": "^0.7.0",
// "style-loader": "^0.17.0"
