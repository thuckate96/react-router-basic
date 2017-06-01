import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'Home';
import Login from 'Login';
import Profile from 'Profile';
import Nav from 'Nav';
import Transaction from 'Transaction';
import {Route, HashRouter, Switch} from 'react-router-dom';
var redux = require("redux");
var {Provider} = require("react-redux");

var username = (state=null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.username;
    case 'LOG_OUT':
      return null;
    default:
      return state;
  }
}
var reducer = redux.combineReducers({username});
var store = redux.createStore(reducer);
store.dispatch({type: 'LOG_IN', username: 'Vi Van Thuc'});
var requireLogin = ()=>{
  console.log("Vi Van Thuc");
}
ReactDOM.render(
  <div>
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/transaction" component={Transaction} onEnter={requireLogin} />
      </div>
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById("root")
)
